import React, { useEffect, useRef, useState } from 'react'
import './BookValueChart.css'
import { Report } from '../types'

interface BookValueChartProps {
  reports: Report[]
}

const BookValueChart: React.FC<BookValueChartProps> = ({ reports }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [chartView, setChartView] = useState<'bookvalue' | 'stockprice'>('bookvalue')
  const [showSP500, setShowSP500] = useState(false)

  useEffect(() => {
    if (!canvasRef.current || reports.length === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Function to draw the entire chart
    const drawChart = (hoveredPoint?: { x: number, y: number, text: string }) => {
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
      // Starting from $155 in 1977 to match BRK-A's starting price
      const sp500DataRaw: { [key: number]: number } = {
        1977: 155, 1978: 165, 1979: 183, 1980: 246, 1981: 231,
        1982: 282, 1983: 345, 1984: 367, 1985: 485, 1986: 574,
        1987: 603, 1988: 702, 1989: 923, 1990: 895, 1991: 1171,
        1992: 1259, 1993: 1388, 1994: 1408, 1995: 1935, 1996: 2381,
        1997: 3171, 1998: 4072, 1999: 4926, 2000: 4476, 2001: 3940,
        2002: 3068, 2003: 3939, 2004: 4364, 2005: 4574, 2006: 5298,
        2007: 5594, 2008: 3527, 2009: 4457, 2010: 5125, 2011: 5236,
        2012: 6068, 2013: 8021, 2014: 9116, 2015: 9013, 2016: 10086,
        2017: 12315, 2018: 11754, 2019: 15458, 2020: 18380, 2021: 23606,
        2022: 19368, 2023: 24541, 2024: 27125
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
      
      // Prepare display data based on view
      let displayData: any[]
      let maxValue: number
      
      if (chartView === 'bookvalue') {
        // Book Value View - show both book value and stock price in dollars
        displayData = chartData.map(d => ({
          year: d.year,
          bookValue: d.value,
          stockPrice: d.stockPrice
        }))
        
        maxValue = Math.max(...displayData.map(d => d.bookValue))
        const stockMax = Math.max(...displayData.filter(d => d.stockPrice).map(d => d.stockPrice!))
        maxValue = Math.max(maxValue, stockMax)
      } else {
        // Stock Price View - normalize stock price and S&P 500 to base 100
        const firstStockPriceData = chartData.find(d => d.stockPrice)
        const baseYear = firstStockPriceData?.year || 1977
        const baseStockPrice = firstStockPriceData?.stockPrice || 155
        const baseSP500 = sp500DataRaw[baseYear] || 155
        
        displayData = chartData.map(d => ({
          year: d.year,
          stockPrice: d.stockPrice ? (d.stockPrice / baseStockPrice) * 100 : null,
          stockPriceDollar: d.stockPrice,
          sp500: sp500DataRaw[d.year] ? (sp500DataRaw[d.year] / baseSP500) * 100 : null,
          sp500Dollar: sp500DataRaw[d.year] || null
        }))
        
        maxValue = 100
        const stockMax = Math.max(...displayData.filter(d => d.stockPrice !== null).map(d => d.stockPrice!))
        maxValue = Math.max(maxValue, stockMax)
        if (showSP500) {
          const sp500Max = Math.max(...displayData.filter(d => d.sp500 !== null).map(d => d.sp500!))
          maxValue = Math.max(maxValue, sp500Max)
        }
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
        
        // Label
        ctx.fillStyle = '#666'
        if (chartView === 'bookvalue') {
          // Show dollars
          ctx.fillText(`$${Math.round(value).toLocaleString()}`, padding.left - 10, y + 4)
        } else {
          // Show percentage for stock price view
          ctx.fillText(`${Math.round(value)}%`, padding.left - 10, y + 4)
        }
      }

      // X-axis labels
      ctx.textAlign = 'center'
      const yearStep = Math.ceil((maxYear - minYear) / 10)
      for (let year = minYear; year <= maxYear; year += yearStep) {
        const x = xScale(year)
        ctx.fillText(year.toString(), x, height + padding.top + 20)
      }

      if (chartView === 'bookvalue') {
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

        // Draw Stock Price line
        ctx.strokeStyle = '#FF6B35'
        ctx.lineWidth = 3
        ctx.beginPath()
        let started = false
        displayData.forEach(point => {
          if (point.stockPrice) {
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

        // Draw data points for book value
        ctx.fillStyle = '#003366'
        displayData.forEach(point => {
          const x = xScale(point.year)
          const y = yScale(point.bookValue)
          
          ctx.beginPath()
          ctx.arc(x, y, 3, 0, Math.PI * 2)
          ctx.fill()
        })
      } else {
        // Stock Price View - draw stock price line
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
      }

      // Draw title
      ctx.fillStyle = '#003366'
      ctx.font = 'bold 18px -apple-system, sans-serif'
      ctx.textAlign = 'center'
      const title = chartView === 'bookvalue' 
        ? 'Berkshire Hathaway Book Value & Stock Price Per Share' 
        : 'Berkshire Hathaway Stock Price Performance (Base: 100)'
      ctx.fillText(title, rect.width / 2, 25)

      // Draw legend
      const legendY = 50
      let legendX = rect.width / 2 - 100
      
      if (chartView === 'bookvalue') {
        // Book Value
        ctx.fillStyle = '#003366'
        ctx.fillRect(legendX, legendY, 20, 3)
        ctx.font = '12px -apple-system, sans-serif'
        ctx.fillText('Book Value', legendX + 25, legendY + 5)
        
        // Stock Price
        legendX += 100
        ctx.fillStyle = '#FF6B35'
        ctx.fillRect(legendX, legendY, 20, 3)
        ctx.fillText('Stock Price', legendX + 25, legendY + 5)
      } else {
        // Stock Price
        ctx.fillStyle = '#FF6B35'
        ctx.fillRect(legendX, legendY, 20, 3)
        ctx.font = '12px -apple-system, sans-serif'
        ctx.fillText('BRK-A', legendX + 25, legendY + 5)
        
        if (showSP500) {
          legendX += 80
          ctx.fillStyle = '#39D353'
          ctx.fillRect(legendX, legendY, 20, 3)
          ctx.fillText('S&P 500', legendX + 25, legendY + 5)
        }
      }

      // Draw hover tooltip if provided
      if (hoveredPoint) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.8)'
        ctx.font = '12px -apple-system, sans-serif'
        const metrics = ctx.measureText(hoveredPoint.text)
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
        ctx.fillText(hoveredPoint.text, tooltipX + padding, tooltipY + 14)
      }

      return { displayData, xScale, yScale }
    }

    // Initial draw
    const chartInfo = drawChart()
    if (!chartInfo) return

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const { displayData, xScale, yScale } = chartInfo
      
      // Check if hovering over any data point
      let hoveredPoint = null
      const hoverRadius = 10
      
      for (const point of displayData) {
        if (chartView === 'bookvalue') {
          // Check book value points
          const bvX = xScale(point.year)
          const bvY = yScale(point.bookValue)
          const bvDistance = Math.sqrt(Math.pow(x - bvX, 2) + Math.pow(y - bvY, 2))
          
          if (bvDistance < hoverRadius) {
            hoveredPoint = {
              x: bvX,
              y: bvY,
              text: `${point.year}: $${point.bookValue.toLocaleString()}`
            }
            break
          }
          
          // Check stock price points
          if (point.stockPrice) {
            const spX = xScale(point.year)
            const spY = yScale(point.stockPrice)
            const spDistance = Math.sqrt(Math.pow(x - spX, 2) + Math.pow(y - spY, 2))
            
            if (spDistance < hoverRadius) {
              hoveredPoint = {
                x: spX,
                y: spY,
                text: `${point.year}: $${point.stockPrice.toLocaleString()} (Stock)`
              }
              break
            }
          }
        } else {
          // Stock price view
          if (point.stockPrice !== null) {
            const spX = xScale(point.year)
            const spY = yScale(point.stockPrice)
            const spDistance = Math.sqrt(Math.pow(x - spX, 2) + Math.pow(y - spY, 2))
            
            if (spDistance < hoverRadius) {
              hoveredPoint = {
                x: spX,
                y: spY,
                text: `${point.year}: $${point.stockPriceDollar.toLocaleString()} (${Math.round(point.stockPrice)}%)`
              }
              break
            }
          }
          
          // Check S&P 500 points
          if (showSP500 && point.sp500 !== null) {
            const sp500X = xScale(point.year)
            const sp500Y = yScale(point.sp500)
            const sp500Distance = Math.sqrt(Math.pow(x - sp500X, 2) + Math.pow(y - sp500Y, 2))
            
            if (sp500Distance < hoverRadius) {
              hoveredPoint = {
                x: sp500X,
                y: sp500Y,
                text: `${point.year}: $${Math.round(point.sp500Dollar).toLocaleString()} (${Math.round(point.sp500)}%)`
              }
              break
            }
          }
        }
      }
      
      // Redraw chart with or without tooltip
      drawChart(hoveredPoint || undefined)
    }

    // Mouse leave handler
    const handleMouseLeave = () => {
      drawChart()
    }

    // Add event listeners
    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)
    
    // Clean up on unmount
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }

  }, [reports, chartView, showSP500])

  // Calculate CAGR and comparisons
  const calculateCAGR = () => {
    const sortedReports = reports
      .filter(r => r.bookValuePerShare)
      .sort((a, b) => a.year - b.year)
    
    if (sortedReports.length < 2) return null

    const firstReport = sortedReports[0]
    const lastReport = sortedReports[sortedReports.length - 1]
    const years = lastReport.year - firstReport.year
    
    const bookValueCAGR = (Math.pow(lastReport.bookValuePerShare! / firstReport.bookValuePerShare!, 1 / years) - 1) * 100
    
    // Stock price CAGR
    const firstStockPriceReport = sortedReports.find(r => r.marketValuePerShare)
    const lastStockPriceReport = sortedReports[sortedReports.length - 1]
    let stockPriceCAGR = null
    let stockPriceTotalGrowth = null
    
    if (firstStockPriceReport && lastStockPriceReport.marketValuePerShare) {
      const stockYears = lastStockPriceReport.year - firstStockPriceReport.year
      stockPriceCAGR = (Math.pow(lastStockPriceReport.marketValuePerShare / firstStockPriceReport.marketValuePerShare!, 1 / stockYears) - 1) * 100
      stockPriceTotalGrowth = ((lastStockPriceReport.marketValuePerShare / firstStockPriceReport.marketValuePerShare! - 1) * 100)
    }
    
    // S&P 500 data for comparison (with dividends reinvested at 0% tax rate)
    const sp500DataRaw: { [key: number]: number } = {
      1977: 155, 1978: 165, 1979: 183, 1980: 246, 1981: 231,
      1982: 282, 1983: 345, 1984: 367, 1985: 485, 1986: 574,
      1987: 603, 1988: 702, 1989: 923, 1990: 895, 1991: 1171,
      1992: 1259, 1993: 1388, 1994: 1408, 1995: 1935, 1996: 2381,
      1997: 3171, 1998: 4072, 1999: 4926, 2000: 4476, 2001: 3940,
      2002: 3068, 2003: 3939, 2004: 4364, 2005: 4574, 2006: 5298,
      2007: 5594, 2008: 3527, 2009: 4457, 2010: 5125, 2011: 5236,
      2012: 6068, 2013: 8021, 2014: 9116, 2015: 9013, 2016: 10086,
      2017: 12315, 2018: 11754, 2019: 15458, 2020: 18380, 2021: 23606,
      2022: 19368, 2023: 24541, 2024: 27125
    }
    
    const sp500Start = sp500DataRaw[firstStockPriceReport?.year || 1977] || sp500DataRaw[1977]
    const sp500End = sp500DataRaw[lastReport.year] || sp500DataRaw[2024]
    const sp500Years = firstStockPriceReport ? lastReport.year - firstStockPriceReport.year : years
    const sp500CAGR = (Math.pow(sp500End / sp500Start, 1 / sp500Years) - 1) * 100
    const sp500TotalGrowth = ((sp500End / sp500Start - 1) * 100)
    
    return {
      bookValueCAGR: bookValueCAGR.toFixed(1),
      startYear: firstReport.year,
      endYear: lastReport.year,
      startValue: firstReport.bookValuePerShare!,
      endValue: lastReport.bookValuePerShare!,
      bookValueTotalGrowth: ((lastReport.bookValuePerShare! / firstReport.bookValuePerShare! - 1) * 100).toFixed(0),
      stockPriceCAGR: stockPriceCAGR?.toFixed(1),
      stockPriceTotalGrowth: stockPriceTotalGrowth?.toFixed(0),
      stockPriceStartValue: firstStockPriceReport?.marketValuePerShare,
      stockPriceEndValue: lastStockPriceReport.marketValuePerShare,
      sp500CAGR: sp500CAGR.toFixed(1),
      sp500TotalGrowth: sp500TotalGrowth.toFixed(0)
    }
  }

  const cagrData = calculateCAGR()

  return (
    <div className="chart-container">
      <div className="chart-controls">
        <button 
          className={`chart-toggle ${chartView === 'bookvalue' ? 'active' : ''}`}
          onClick={() => {
            setChartView('bookvalue')
            setShowSP500(false)
          }}
        >
          Book Value View
        </button>
        <button 
          className={`chart-toggle ${chartView === 'stockprice' ? 'active' : ''}`}
          onClick={() => setChartView('stockprice')}
        >
          Stock Price View
        </button>
        {chartView === 'stockprice' && (
          <button 
            className={`chart-toggle ${showSP500 ? 'active' : ''}`}
            onClick={() => setShowSP500(!showSP500)}
          >
            {showSP500 ? '✓' : ''} Show S&P 500
          </button>
        )}
      </div>
      
      <div className="chart-stats">
        {cagrData && (
          <>
            {chartView === 'bookvalue' ? (
              <>
                <div className="stat-card">
                  <h3>Book Value CAGR</h3>
                  <div className="stat-value">{cagrData.bookValueCAGR}%</div>
                  <div className="stat-period">{cagrData.startYear} - {cagrData.endYear}</div>
                  <div className="stat-detail">
                    ${cagrData.startValue.toLocaleString()} → ${cagrData.endValue.toLocaleString()}
                  </div>
                </div>
                <div className="stat-card">
                  <h3>Book Value Total Growth</h3>
                  <div className="stat-value">{cagrData.bookValueTotalGrowth}%</div>
                  <div className="stat-period">{cagrData.startYear} - {cagrData.endYear}</div>
                </div>
              </>
            ) : (
              <>
                <div className="stat-card">
                  <h3>Stock Price CAGR</h3>
                  <div className="stat-value">{cagrData.stockPriceCAGR}%</div>
                  <div className="stat-period">1977 - {cagrData.endYear}</div>
                  <div className="stat-comparison">
                    S&P 500: {cagrData.sp500CAGR}%
                  </div>
                </div>
                <div className="stat-card">
                  <h3>Total Return</h3>
                  <div className="stat-value">{cagrData.stockPriceTotalGrowth}%</div>
                  <div className="stat-detail">
                    ${cagrData.stockPriceStartValue?.toLocaleString()} → ${cagrData.stockPriceEndValue?.toLocaleString()}
                  </div>
                  <div className="stat-comparison">
                    S&P 500: {cagrData.sp500TotalGrowth}%
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
      
      <div className="chart-wrapper">
        <canvas ref={canvasRef} className="chart-canvas" />
      </div>
      
      <div className="chart-note">
        <p>
          {chartView === 'bookvalue' ? (
            <>
              <strong>Note:</strong> Book value per share represents Berkshire's net worth divided by the number of shares outstanding.
              This has been Warren Buffett's preferred measure of Berkshire's performance. Stock price is shown for comparison in absolute dollar terms.
            </>
          ) : (
            <>
              <strong>Note:</strong> Stock price performance comparison with both BRK-A and S&P 500 normalized to start at 100 in 1977.
              S&P 500 returns include dividends reinvested at a 0% tax rate for fair comparison.
            </>
          )}
        </p>
      </div>
    </div>
  )
}

export default BookValueChart