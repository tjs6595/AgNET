// DEPENDENCIES
const express = require ('express')
const authentication = require('express').Router()
const bcrypt = require('bcrypt')
// const cattleHerdList = require('../models/cattleHerd')
// const db = require('../models')
// const CattleHerd = require('../models/cattleHerd.js')
// const methodOverride = require('method-override')


// MIDDLEWARE
// users.use(methodOverride('_method'))


// const userLoginArray = []


// 1.) AUTHENTICATION PAGE
authentication.post('/', async (req, res) => {
    console.log('IN HERE')
    res.render('/login')
})

// EXPORT
module.exports = authentication;
