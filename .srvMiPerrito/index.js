
const express = require('express')
const morgan = require('morgan')

const hostName = 'localhost'
const port = 3000

const app = express()

app.use(morgan('dev'))

