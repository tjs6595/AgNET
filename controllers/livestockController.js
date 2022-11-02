// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const livestock = express.Router()

// MIDDLEWARE
livestock.use(methodOverride('_method'))

// FIND ALL CATTLE HERDS (INDEX ROUTE)
livestock.get('/Livestock', async (req, res) => {
    res.render(`/Livestock`)
})


// EXPORT
module.exports = livestock;
