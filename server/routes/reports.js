import express from 'express'
import { getReports, getReportById, getBookValueData } from '../controllers/reportsController.js'

const router = express.Router()

// Get all reports
router.get('/', getReports)

// Get specific report by ID
router.get('/:id', getReportById)

// Get book value data for charts
router.get('/data/book-value', getBookValueData)

export default router