import express from 'express'
import { getSECFilings, getSECFilingById } from '../controllers/secFilingsController.js'

const router = express.Router()

// Get recent SEC filings
router.get('/', getSECFilings)

// Get specific filing by ID
router.get('/:id', getSECFilingById)

export default router