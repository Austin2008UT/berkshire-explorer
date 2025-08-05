import React, { useEffect, useRef } from 'react'
import './BookValueChart.css'
import { Report } from '../types'

interface BookValueChartProps {
  reports: Report[]
}

const BookValueChart: React.FC<BookValueChartProps> = ({ reports }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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
    const chartData = reports
      .filter(r => r.bookValuePerShare)
      .sort((a, b) => a.year - b.year)
      .map(r => ({
        year: r.year,
        value: r.bookValuePerShare!
      }))

    if (chartData.length === 0) return

    // Chart dimensions
    const padding = { top: 40, right: 60, bottom: 60, left: 80 }
    const width = rect.width - padding.left - padding.right
    const height = rect.height - padding.top - padding.bottom

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    // Calculate scales
    const minYear = Math.min(...chartData.map(d => d.year))
    const maxYear = Math.max(...chartData.map(d => d.year))
    const maxValue = Math.max(...chartData.map(d => d.value)) * 1.1

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
      ctx.fillText(`$${Math.round(value).toLocaleString()}`, padding.left - 10, y + 4)
    }

    // X-axis labels
    ctx.textAlign = 'center'
    const yearStep = Math.ceil((maxYear - minYear) / 10)
    for (let year = minYear; year <= maxYear; year += yearStep) {
      const x = xScale(year)
      ctx.fillText(year.toString(), x, height + padding.top + 20)
    }

    // Draw the line
    ctx.strokeStyle = '#003366'
    ctx.lineWidth = 3
    ctx.beginPath()
    chartData.forEach((point, index) => {
      const x = xScale(point.year)
      const y = yScale(point.value)
      
      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.stroke()

    // Draw data points
    ctx.fillStyle = '#003366'
    chartData.forEach(point => {
      const x = xScale(point.year)
      const y = yScale(point.value)
      
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fill()
    })

    // Draw title
    ctx.fillStyle = '#003366'
    ctx.font = 'bold 18px -apple-system, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('Berkshire Hathaway Book Value Per Share Growth', rect.width / 2, 25)

  }, [reports])

  // Calculate CAGR
  const calculateCAGR = () => {
    const sortedReports = reports
      .filter(r => r.bookValuePerShare)
      .sort((a, b) => a.year - b.year)
    
    if (sortedReports.length < 2) return null

    const firstReport = sortedReports[0]
    const lastReport = sortedReports[sortedReports.length - 1]
    const years = lastReport.year - firstReport.year
    
    const cagr = (Math.pow(lastReport.bookValuePerShare! / firstReport.bookValuePerShare!, 1 / years) - 1) * 100
    
    return {
      cagr: cagr.toFixed(1),
      startYear: firstReport.year,
      endYear: lastReport.year,
      startValue: firstReport.bookValuePerShare!,
      endValue: lastReport.bookValuePerShare!
    }
  }

  const cagrData = calculateCAGR()

  return (
    <div className="chart-container">
      <div className="chart-stats">
        {cagrData && (
          <>
            <div className="stat-card">
              <h3>Compound Annual Growth Rate</h3>
              <div className="stat-value">{cagrData.cagr}%</div>
              <div className="stat-period">{cagrData.startYear} - {cagrData.endYear}</div>
            </div>
            <div className="stat-card">
              <h3>Total Growth</h3>
              <div className="stat-value">
                {((cagrData.endValue / cagrData.startValue - 1) * 100).toFixed(0)}%
              </div>
              <div className="stat-detail">
                ${cagrData.startValue.toLocaleString()} → ${cagrData.endValue.toLocaleString()}
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