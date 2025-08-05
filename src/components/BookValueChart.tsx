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
  const [hoveredPoint, setHoveredPoint] = useState<{x: number, y: number, value: string, year: number} | null>(null)

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

    // S&P 500 historical annual returns (approximate)
    const sp500Data: { [key: number]: number } = {
      1977: 100, 1978: 106.4, 1979: 118.3, 1980: 158.5, 1981: 148.9,
      1982: 181.8, 1983: 222.4, 1984: 236.4, 1985: 312.5, 1986: 370.2,
      1987: 388.8, 1988: 453.0, 1989: 595.4, 1990: 577.4, 1991: 755.2,
      1992: 812.5, 1993: 895.2, 1994: 908.2, 1995: 1248.3, 1996: 1535.5,
      1997: 2045.2, 1998: 2626.7, 1999: 3178.2, 2000: 2887.9, 2001: 2542.2,
      2002: 1979.5, 2003: 2541.5, 2004: 2815.0, 2005: 2951.0, 2006: 3418.1,
      2007: 3609.5, 2008: 2275.1, 2009: 2875.3, 2010: 3305.9, 2011: 3378.2,
      2012: 3916.1, 2013: 5174.7, 2014: 5881.6, 2015: 5814.9, 2016: 6507.0,
      2017: 7945.0, 2018: 7585.0, 2019: 9972.4, 2020: 11857.5, 2021: 15229.5,
      2022: 12495.3, 2023: 15832.8, 2024: 17500.0
    }

    // Chart dimensions
    const padding = { top: 40, right: 60, bottom: 60, left: 80 }
    const width = rect.width - padding.left - padding.right
    const height = rect.height - padding.top - padding.bottom

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Calculate scales
    const minYear = Math.min(...chartData.map(d => d.year))
    const maxYear = Math.max(...chartData.map(d => d.year))
    
    // Normalize all data to start at 100 (percentage growth)
    const baseYear = chartData[0]
    let normalizedData = chartData.map(d => ({
      year: d.year,
      bookValue: (d.value / baseYear.value) * 100,
      stockPrice: d.stockPrice && baseYear.stockPrice ? (d.stockPrice / baseYear.stockPrice) * 100 : null,
      sp500: sp500Data[d.year] || null
    }))

    // Get max value for scale
    let maxValue = Math.max(...normalizedData.map(d => d.bookValue))
    if (showStockPrice) {
      const stockMax = Math.max(...normalizedData.filter(d => d.stockPrice !== null).map(d => d.stockPrice!))
      maxValue = Math.max(maxValue, stockMax)
    }
    if (showSP500) {
      const sp500Max = Math.max(...normalizedData.filter(d => d.sp500 !== null).map(d => d.sp500!))
      maxValue = Math.max(maxValue, sp500Max)
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
      
      // Label (show as percentage)
      ctx.fillText(`${Math.round(value)}%`, padding.left - 10, y + 4)
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
    normalizedData.forEach((point, index) => {
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
      normalizedData.forEach(point => {
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
      normalizedData.forEach(point => {
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
    normalizedData.forEach(point => {
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
    const title = showStockPrice || showSP500 ? 'Berkshire Hathaway Performance Comparison (Base: 100)' : 'Berkshire Hathaway Book Value Per Share Growth'
    ctx.fillText(title, rect.width / 2, 25)

    // Mouse move handler for hover
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      // Check if hovering over a data point
      let hovered = false
      normalizedData.forEach(point => {
        const px = xScale(point.year)
        const py = yScale(point.bookValue)
        const distance = Math.sqrt(Math.pow(x - px, 2) + Math.pow(y - py, 2))
        
        if (distance < 10) {
          const original = chartData.find(d => d.year === point.year)
          setHoveredPoint({
            x: px,
            y: py,
            value: `$${original?.value.toLocaleString()}`,
            year: point.year
          })
          hovered = true
        }
        
        if (showStockPrice && point.stockPrice !== null) {
          const spx = xScale(point.year)
          const spy = yScale(point.stockPrice)
          const spDistance = Math.sqrt(Math.pow(x - spx, 2) + Math.pow(y - spy, 2))
          
          if (spDistance < 10) {
            const original = chartData.find(d => d.year === point.year)
            setHoveredPoint({
              x: spx,
              y: spy,
              value: `$${original?.stockPrice?.toLocaleString()}`,
              year: point.year
            })
            hovered = true
          }
        }
      })
      
      if (!hovered) {
        setHoveredPoint(null)
      }
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
    }

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

  }, [reports, showStockPrice, showSP500])

  // Draw tooltip if hovering
  useEffect(() => {
    if (!canvasRef.current || !hoveredPoint) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const rect = canvas.getBoundingClientRect()
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    
    // Draw tooltip
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
    ctx.font = '12px -apple-system, sans-serif'
    const text = `${hoveredPoint.year}: ${hoveredPoint.value}`
    const metrics = ctx.measureText(text)
    const padding = 8
    const boxWidth = metrics.width + padding * 2
    const boxHeight = 20
    
    let tooltipX = hoveredPoint.x - boxWidth / 2
    let tooltipY = hoveredPoint.y - boxHeight - 10
    
    // Keep tooltip within canvas bounds
    if (tooltipX < 0) tooltipX = 0
    if (tooltipX + boxWidth > rect.width) tooltipX = rect.width - boxWidth
    if (tooltipY < 0) tooltipY = hoveredPoint.y + 10
    
    ctx.fillRect(tooltipX, tooltipY, boxWidth, boxHeight)
    
    ctx.fillStyle = 'white'
    ctx.textAlign = 'left'
    ctx.fillText(text, tooltipX + padding, tooltipY + 14)
  }, [hoveredPoint])

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
    
    // S&P 500 data for comparison (with dividends reinvested)
    const sp500Data: { [key: number]: number } = {
      1977: 100, 1978: 106.4, 1979: 118.3, 1980: 158.5, 1981: 148.9,
      1982: 181.8, 1983: 222.4, 1984: 236.4, 1985: 312.5, 1986: 370.2,
      1987: 388.8, 1988: 453.0, 1989: 595.4, 1990: 577.4, 1991: 755.2,
      1992: 812.5, 1993: 895.2, 1994: 908.2, 1995: 1248.3, 1996: 1535.5,
      1997: 2045.2, 1998: 2626.7, 1999: 3178.2, 2000: 2887.9, 2001: 2542.2,
      2002: 1979.5, 2003: 2541.5, 2004: 2815.0, 2005: 2951.0, 2006: 3418.1,
      2007: 3609.5, 2008: 2275.1, 2009: 2875.3, 2010: 3305.9, 2011: 3378.2,
      2012: 3916.1, 2013: 5174.7, 2014: 5881.6, 2015: 5814.9, 2016: 6507.0,
      2017: 7945.0, 2018: 7585.0, 2019: 9972.4, 2020: 11857.5, 2021: 15229.5,
      2022: 12495.3, 2023: 15832.8, 2024: 17500.0
    }
    
    const sp500Start = sp500Data[firstReport.year] || 100
    const sp500End = sp500Data[lastReport.year] || sp500Data[2024]
    const sp500CAGR = (Math.pow(sp500End / sp500Start, 1 / years) - 1) * 100
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
        </p>
      </div>
    </div>
  )
}

export default BookValueChart