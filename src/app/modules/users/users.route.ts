import express from 'express'
import service from './users.controller'

const router = express.Router()

router.post('/create-user', service.createUser)

export default router
