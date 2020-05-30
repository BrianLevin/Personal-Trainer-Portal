// require express, define Router:

const express = require('express')
const router = express.Router();

// require XXX.js models:
const XXX = require('../models/XXX.js')

// Create a router for the app and export the router at the end of this file

router.get('/', function (req, res) {

})

router.post('/api/XXX', function (req, res) {

})

router.put('/api/XXX/:id', function (req, res) {

})

router.delete('/api/XXX/:id', function (req, res) {

})

module.exports = router;