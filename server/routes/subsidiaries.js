import express from 'express'
import { getSubsidiaries, getSubsidiaryById, getSubsidiaryMentions } from '../controllers/subsidiariesController.js'

const router = express.Router()

// Get all subsidiaries
router.get('/', getSubsidiaries)

// Get specific subsidiary by ID
router.get('/:id', getSubsidiaryById)

// Get mentions for a specific subsidiary
router.get('/:id/mentions', getSubsidiaryMentions)

export default router