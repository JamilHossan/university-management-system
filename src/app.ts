import express from 'express'
import cors from 'cors'
import router from './app/modules/users/users.route'

// const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/app/user', router)

// app.get('/', async (req, res) => {
//   res.send('Hello World!')
// })

export default app
