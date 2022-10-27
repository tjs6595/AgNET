// DEPENDENCIES
const express = require ('express')
const users = require('express').Router()
// const cattleHerdList = require('../models/cattleHerd')
// const db = require('../models')
// const CattleHerd = require('../models/cattleHerd.js')
// const methodOverride = require('method-override')


// MIDDLEWARE
// cattleHerds.use(methodOverride('_method'))

// 1.) LOGIN PAGE
users.get('/Login', async (req, res) => {
    res.render('users/login.jsx')
})

// 1.) REGISTER PAGE
users.get('/Register', async (req, res) => {
    res.render('users/register.jsx')
})

// EXPORT
module.exports = users;
