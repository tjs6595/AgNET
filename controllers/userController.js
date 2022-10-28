// DEPENDENCIES
const express = require ('express')
const users = require('express').Router()
const bcrypt = require('bcrypt')
// const cattleHerdList = require('../models/cattleHerd')
// const db = require('../models')
// const CattleHerd = require('../models/cattleHerd.js')
const methodOverride = require('method-override')


// MIDDLEWARE
users.use(methodOverride('_method'))


const userLoginArray = []


// 1.) LOGIN PAGE
users.get('/Login', async (req, res) => {
    res.render('users/login.jsx')
})

// 2.) LOGIN POST ACTION
users.post('/Login', async (req, res) => {
    res.render('users/login.jsx')
})

// 3.) REGISTER PAGE
users.get('/Register', async (req, res) => {
    res.render('users/register.jsx')
})

// 4.) REGISTER POST ACTION
users.post('/Register', async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        userLoginArray.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/Login')
    } catch {
        res.redirect('/Register')
    }
    console.log(userLoginArray)
})

// 5.) LOGOUT USER
users.delete('/logout', (req, res) => {
    res.redirect('/login')
})

// EXPORT
module.exports = users;
