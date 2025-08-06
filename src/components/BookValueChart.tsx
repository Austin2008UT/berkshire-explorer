import React, { useEffect, useRef, useState } from 'react'
import './BookValueChart.css'
import { Report } from '../types'

interface BookValueChartProps {
  reports: Report[]
}

const BookValueChart: React.FC<BookValueChartProps> = ({ reports }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [showStockPrice, setShowStockPrice] = useState(false)
  const [showSP500, setShowSP500] = useState(false)

  useEffect(() => {
    if (!canvasRef.current || reports.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * window.devicePixelRatio
    canvas.height = rect.height * window.devicePixelRatio
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)

    // Prepare data
    const sortedReports = reports
      .filter(r => r.bookValuePerShare)
      .sort((a, b) => a.year - b.year)

    const chartData = sortedReports.map(r => ({
      year: r.year,
      value: r.bookValuePerShare!,
      stockPrice: r.marketValuePerShare
    }))

    if (chartData.length === 0) return

    // S&P 500 historical data with dividends reinvested (0% tax rate)
    // Starting from $310 in 1977 to match BRK-A's starting price
    const sp500DataRaw: { [key: number]: number } = {
      1977: 310, 1978: 330, 1979: 367, 1980: 491, 1981: 462,
      1982: 564, 1983: 689, 1984: 733, 1985: 969, 1986: 1148,
      1987: 1205, 1988: 1404, 1989: 1846, 1990: 1790, 1991: 2341,
      1992: 2518, 1993: 2775, 1994: 2816, 1995: 3870, 1996: 4761,
      1997: 6342, 1998: 8143, 1999: 9852, 2000: 8952, 2001: 7880,
      2002: 6136, 2003: 7877, 2004: 8727, 2005: 9147, 2006: 10596,
      2007: 11188, 2008: 7053, 2009: 8914, 2010: 10249, 2011: 10471,
      2012: 12136, 2013: 16041, 2014: 18232, 2015: 18026, 2016: 20172,
      2017: 24630, 2018: 23508, 2019: 30916, 2020: 36760, 2021: 47211,
      2022: 38735, 2023: 49082, 2024: 54250
    }

    // Chart dimensions
    const padding = { top: 40, right: 60, bottom: 60, left: 100 }
    const width = rect.width - padding.left - padding.right
    const height = rect.height - padding.top - padding.bottom

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Calculate scales
    const minYear = Math.min(...chartData.map(d => d.year))
    const maxYear = Math.max(...chartData.map(d => d.year))
    
    // Determine if we're showing normalized or dollar values
    const isNormalized = showStockPrice || showSP500
    
    // Prepare display data
    let displayData: any[]
    let maxValue: number
    
    if (isNormalized) {
      // Normalize all data to start at 100 (percentage growth)
      const baseYear = chartData[0]
      displayData = chartData.map(d => ({
        year: d.year,
        bookValue: (d.value / baseYear.value) * 100,
        bookValueDollar: d.value,
        stockPrice: d.stockPrice && baseYear.stockPrice ? (d.stockPrice / baseYear.stockPrice) * 100 : null,
        stockPriceDollar: d.stockPrice,
        sp500: sp500DataRaw[d.year] && baseYear.stockPrice ? (sp500DataRaw[d.year] / sp500DataRaw[baseYear.year]) * 100 : null,
        sp500Dollar: sp500DataRaw[d.year] || null
      }))
      
      maxValue = Math.max(...displayData.map(d => d.bookValue))
      if (showStockPrice) {
        const stockMax = Math.max(...displayData.filter(d => d.stockPrice !== null).map(d => d.stockPrice!))
        maxValue = Math.max(maxValue, stockMax)
      }
      if (showSP500) {
        const sp500Max = Math.max(...displayData.filter(d => d.sp500 !== null).map(d => d.sp500!))
        maxValue = Math.max(maxValue, sp500Max)
      }
    } else {
      // Show dollar values
      displayData = chartData.map(d => ({
        year: d.year,
        bookValue: d.value,
        stockPrice: d.stockPrice
      }))
      maxValue = Math.max(...displayData.map(d => d.bookValue))
    }
    
    maxValue *= 1.1 // Add 10% padding

    const xScale = (year: number) => ((year - minYear) / (maxYear - minYear)) * width + padding.left
    const yScale = (value: number) => height - (value / maxValue) * height + padding.top

    // Draw axes
    ctx.strokeStyle = '#ddd'
    ctx.lineWidth = 1

    // Y-axis
    ctx.beginPath()
    ctx.moveTo(padding.left, padding.top)
    ctx.lineTo(padding.left, height + padding.top)
    ctx.stroke()

    // X-axis
    ctx.beginPath()
    ctx.moveTo(padding.left, height + padding.top)
    ctx.lineTo(width + padding.left, height + padding.top)
    ctx.stroke()

    // Draw grid lines and labels
    ctx.fillStyle = '#666'
    ctx.font = '12px -apple-system, sans-serif'
    ctx.textAlign = 'right'

    // Y-axis labels
    const ySteps = 5
    for (let i = 0; i <= ySteps; i++) {
      const value = (maxValue / ySteps) * i
      const y = yScale(value)
      
      // Grid line
      ctx.strokeStyle = '#f0f0f0'
      ctx.beginPath()
      ctx.moveTo(padding.left, y)
      ctx.lineTo(width + padding.left, y)
      ctx.stroke()
      
      // Label - always show as dollars
      ctx.fillStyle = '#666'
      if (isNormalized) {
        // Convert normalized value back to dollars using base year
        const baseValue = chartData[0].value
        const dollarValue = (value / 100) * baseValue
        ctx.fillText(`$${dollarValue.toLocaleString()}`, padding.left - 10, y + 4)
      } else {
        ctx.fillText(`$${Math.round(value).toLocaleString()}`, padding.left - 10, y + 4)
      }
    }

    // X-axis labels
    ctx.textAlign = 'center'
    const yearStep = Math.ceil((maxYear - minYear) / 10)
    for (let year = minYear; year <= maxYear; year += yearStep) {
      const x = xScale(year)
      ctx.fillText(year.toString(), x, height + padding.top + 20)
    }

    // Draw Book Value line
    ctx.strokeStyle = '#003366'
    ctx.lineWidth = 3
    ctx.beginPath()
    displayData.forEach((point, index) => {
      const x = xScale(point.year)
      const y = yScale(point.bookValue)
      
      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.stroke()

    // Draw Stock Price line if enabled
    if (showStockPrice) {
      ctx.strokeStyle = '#FF6B35'
      ctx.lineWidth = 3
      ctx.beginPath()
      let started = false
      displayData.forEach(point => {
        if (point.stockPrice !== null) {
          const x = xScale(point.year)
          const y = yScale(point.stockPrice)
          
          if (!started) {
            ctx.moveTo(x, y)
            started = true
          } else {
            ctx.lineTo(x, y)
          }
        }
      })
      ctx.stroke()
    }

    // Draw S&P 500 line if enabled
    if (showSP500) {
      ctx.strokeStyle = '#39D353'
      ctx.lineWidth = 3
      ctx.beginPath()
      let started = false
      displayData.forEach(point => {
        if (point.sp500 !== null) {
          const x = xScale(point.year)
          const y = yScale(point.sp500)
          
          if (!started) {
            ctx.moveTo(x, y)
            started = true
          } else {
            ctx.lineTo(x, y)
          }
        }
      })
      ctx.stroke()
    }

    // Draw data points
    ctx.fillStyle = '#003366'
    displayData.forEach(point => {
      const x = xScale(point.year)
      const y = yScale(point.bookValue)
      
      ctx.beginPath()
      ctx.arc(x, y, 3, 0, Math.PI * 2)
      ctx.fill()
    })

    // Draw title
    ctx.fillStyle = '#003366'
    ctx.font = 'bold 18px -apple-system, sans-serif'
    ctx.textAlign = 'center'
    const title = isNormalized ? 'Berkshire Hathaway Performance Comparison (Normalized)' : 'Berkshire Hathaway Book Value Per Share'
    ctx.fillText(title, rect.width / 2, 25)

    // Draw legend if showing multiple lines
    if (showStockPrice || showSP500) {
      const legendY = 50
      let legendX = rect.width / 2 - 150
      
      // Book Value
      ctx.fillStyle = '#003366'
      ctx.fillRect(legendX, legendY, 20, 3)
      ctx.font = '12px -apple-system, sans-serif'
      ctx.fillText('Book Value', legendX + 25, legendY + 5)
      
      if (showStockPrice) {
        legendX += 100
        ctx.fillStyle = '#FF6B35'
        ctx.fillRect(legendX, legendY, 20, 3)
        ctx.fillText('Stock Price', legendX + 25, legendY + 5)
      }
      
      if (showSP500) {
        legendX += 100
        ctx.fillStyle = '#39D353'
        ctx.fillRect(legendX, legendY, 20, 3)
        ctx.fillText('S&P 500', legendX + 25, legendY + 5)
      }
    }

    // Mouse move handler for hover
    let currentTooltip: any = null
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Clear previous tooltip by redrawing everything
      const drawChart = () => {
        // This is a simplified redraw - just clear and redraw the chart
        ctx.clearRect(0, 0, rect.width, rect.height)
        
        // Redraw everything (axes, lines, etc.) - simplified version
        // In a real implementation, you'd extract the drawing code into a separate function
        // For now, we'll just handle the tooltip overlay
      }
      
      // Check if hovering over any data point
      let hovered = false
      const hoverRadius = 10
      
      displayData.forEach(point => {
        // Check book value points
        const bvX = xScale(point.year)
        const bvY = yScale(point.bookValue)
        const bvDistance = Math.sqrt(Math.pow(x - bvX, 2) + Math.pow(y - bvY, 2))
        
        if (bvDistance < hoverRadius) {
          const value = isNormalized ? point.bookValueDollar : point.bookValue
          drawTooltip(ctx, x, y, `${point.year}: $${value.toLocaleString()}`, rect)
          hovered = true
          return
        }
        
        // Check stock price points
        if (showStockPrice && point.stockPrice !== null) {
          const spX = xScale(point.year)
          const spY = yScale(point.stockPrice)
          const spDistance = Math.sqrt(Math.pow(x - spX, 2) + Math.pow(y - spY, 2))
          
          if (spDistance < hoverRadius) {
            const value = isNormalized ? point.stockPriceDollar : point.stockPrice
            drawTooltip(ctx, x, y, `${point.year}: $${value.toLocaleString()} (Stock)`, rect)
            hovered = true
            return
          }
        }
        
        // Check S&P 500 points
        if (showSP500 && point.sp500 !== null) {
          const sp500X = xScale(point.year)
          const sp500Y = yScale(point.sp500)
          const sp500Distance = Math.sqrt(Math.pow(x - sp500X, 2) + Math.pow(y - sp500Y, 2))
          
          if (sp500Distance < hoverRadius) {
            const value = isNormalized ? point.sp500Dollar : point.sp500
            drawTooltip(ctx, x, y, `${point.year}: $${Math.round(value).toLocaleString()} (S&P 500)`, rect)
            hovered = true
            return
          }
        }
      })
      
      if (!hovered && currentTooltip) {
        // Request a full redraw to clear the tooltip
        currentTooltip = null
        // Trigger a re-render by changing state
        canvas.dispatchEvent(new Event('clearTooltip'))
      }
    }
    
    const drawTooltip = (ctx: CanvasRenderingContext2D, x: number, y: number, text: string, rect: DOMRect) => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
      ctx.font = '12px -apple-system, sans-serif'
      const metrics = ctx.measureText(text)
      const padding = 8
      const boxWidth = metrics.width + padding * 2
      const boxHeight = 20
      
      let tooltipX = x - boxWidth / 2
      let tooltipY = y - boxHeight - 10
      
      // Keep tooltip within canvas bounds
      if (tooltipX < 0) tooltipX = 0
      if (tooltipX + boxWidth > rect.width) tooltipX = rect.width - boxWidth
      if (tooltipY < 0) tooltipY = y + 10
      
      ctx.fillRect(tooltipX, tooltipY, boxWidth, boxHeight)
      
      ctx.fillStyle = 'white'
      ctx.textAlign = 'left'
      ctx.fillText(text, tooltipX + padding, tooltipY + 14)
      
      currentTooltip = { x: tooltipX, y: tooltipY, width: boxWidth, height: boxHeight }
    }

    // Add event listeners
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', () => {
      currentTooltip = null
      // Trigger redraw to clear tooltip
      canvas.dispatchEvent(new Event('clearTooltip'))
    })
    
    // Clean up on unmount
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', () => {})
    }

  }, [reports, showStockPrice, showSP500])

  // Calculate CAGR and comparisons
  const calculateCAGR = () => {
    const sortedReports = reports
      .filter(r => r.bookValuePerShare)
      .sort((a, b) => a.year - b.year)
    
    if (sortedReports.length < 2) return null

    const firstReport = sortedReports[0]
    const lastReport = sortedReports[sortedReports.length - 1]
    const years = lastReport.year - firstReport.year
    
    const cagr = (Math.pow(lastReport.bookValuePerShare! / firstReport.bookValuePerShare!, 1 / years) - 1) * 100
    
    // S&P 500 data for comparison (with dividends reinvested at 0% tax rate)
    const sp500DataRaw: { [key: number]: number } = {
      1977: 310, 1978: 330, 1979: 367, 1980: 491, 1981: 462,
      1982: 564, 1983: 689, 1984: 733, 1985: 969, 1986: 1148,
      1987: 1205, 1988: 1404, 1989: 1846, 1990: 1790, 1991: 2341,
      1992: 2518, 1993: 2775, 1994: 2816, 1995: 3870, 1996: 4761,
      1997: 6342, 1998: 8143, 1999: 9852, 2000: 8952, 2001: 7880,
      2002: 6136, 2003: 7877, 2004: 8727, 2005: 9147, 2006: 10596,
      2007: 11188, 2008: 7053, 2009: 8914, 2010: 10249, 2011: 10471,
      2012: 12136, 2013: 16041, 2014: 18232, 2015: 18026, 2016: 20172,
      2017: 24630, 2018: 23508, 2019: 30916, 2020: 36760, 2021: 47211,
      2022: 38735, 2023: 49082, 2024: 54250
    }
    
    // Find first year with stock price for proper comparison
    const firstStockPriceReport = sortedReports.find(r => r.marketValuePerShare)
    const sp500Start = firstStockPriceReport ? sp500DataRaw[firstStockPriceReport.year] : sp500DataRaw[1977]
    const sp500End = sp500DataRaw[lastReport.year] || sp500DataRaw[2024]
    const sp500Years = firstStockPriceReport ? lastReport.year - firstStockPriceReport.year : years
    const sp500CAGR = (Math.pow(sp500End / sp500Start, 1 / sp500Years) - 1) * 100
    const sp500TotalGrowth = ((sp500End / sp500Start - 1) * 100)
    
    return {
      cagr: cagr.toFixed(1),
      startYear: firstReport.year,
      endYear: lastReport.year,
      startValue: firstReport.bookValuePerShare!,
      endValue: lastReport.bookValuePerShare!,
      totalGrowth: ((lastReport.bookValuePerShare! / firstReport.bookValuePerShare! - 1) * 100).toFixed(0),
      sp500CAGR: sp500CAGR.toFixed(1),
      sp500TotalGrowth: sp500TotalGrowth.toFixed(0)
    }
  }

  const cagrData = calculateCAGR()

  return (
    <div className="chart-container">
      <div className="chart-controls">
        <button 
          className={`chart-toggle ${showStockPrice ? 'active' : ''}`}
          onClick={() => setShowStockPrice(!showStockPrice)}
        >
          {showStockPrice ? '✓' : ''} Show Stock Price (BRK-A)
        </button>
        <button 
          className={`chart-toggle ${showSP500 ? 'active' : ''}`}
          onClick={() => setShowSP500(!showSP500)}
        >
          {showSP500 ? '✓' : ''} Show S&P 500
        </button>
      </div>
      
      <div className="chart-stats">
        {cagrData && (
          <>
            <div className="stat-card">
              <h3>Compound Annual Growth Rate</h3>
              <div className="stat-value">{cagrData.cagr}%</div>
              <div className="stat-period">Berkshire ({cagrData.startYear} - {cagrData.endYear})</div>
              <div className="stat-comparison">
                S&P 500: {cagrData.sp500CAGR}%
              </div>
            </div>
            <div className="stat-card">
              <h3>Total Growth</h3>
              <div className="stat-value">{cagrData.totalGrowth}%</div>
              <div className="stat-detail">
                ${cagrData.startValue.toLocaleString()} → ${cagrData.endValue.toLocaleString()}
              </div>
              <div className="stat-comparison">
                S&P 500: {cagrData.sp500TotalGrowth}%
              </div>
            </div>
          </>
        )}
      </div>
      
      <div className="chart-wrapper">
        <canvas ref={canvasRef} className="chart-canvas" />
      </div>
      
      <div className="chart-note">
        <p>
          <strong>Note:</strong> Book value per share represents Berkshire's net worth divided by the number of shares outstanding.
          This metric has been Warren Buffett's preferred measure of Berkshire's performance over the decades.
          {(showStockPrice || showSP500) && ' When comparisons are shown, all values are normalized to start at 100 for easier comparison.'}
          {showSP500 && ' S&P 500 returns include dividends reinvested at a 0% tax rate, compared against BRK-A stock price.'}
        </p>
      </div>
    </div>
  )
}

export default BookValueChart