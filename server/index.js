import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

// Import routes
import reportsRouter from './routes/reports.js'
import subsidiariesRouter from './routes/subsidiaries.js'

// ES modules dirname workaround
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Log the port for Railway
console.log(`Configured to listen on port: ${PORT}`)

// Middleware
app.use(cors())
app.use(express.json())

// API Routes
app.use('/api/reports', reportsRouter)
app.use('/api/subsidiaries', subsidiariesRouter)

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../dist')))
  
  // Handle React routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
  })
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  })
})

const HOST = '0.0.0.0' // Bind to all interfaces for Railway

app.listen(PORT, HOST, () => {
  console.log(`Server running on ${HOST}:${PORT}`)
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`)
})