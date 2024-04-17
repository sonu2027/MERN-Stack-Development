require('dotenv').config()
const express = require('express')
// import express from "express" // line and 2 are same
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('Home')
  })

  app.get('/about', (req, res) => {
    res.send('<h1>This is about page</h1>')
  })

  app.get('/home/contact', (req, res) => {
    res.send('contact')
  })

app.listen(Number(process.env.PORT), () => {
  console.log(`Example app listening on port ${Number(process.env.PORT)}`)
})