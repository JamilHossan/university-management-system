import express from 'express'
import cors from 'cors'
// const express = require('express')
const app = express()
const port = 3000

app.use(cors())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

export default app;