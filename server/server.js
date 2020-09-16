const express = require('express')

// Include API Routes
const authRoutes = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(express.static('public'))

// Define Base URL for API Access
server.use('/api/v1', authRoutes)

module.exports = server
