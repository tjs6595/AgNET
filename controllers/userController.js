// DEPENDENCIES
const express = require ('express')
const users = require('express').Router()
const bcrypt = require('bcrypt')
const User = require('../models/user')
const db = require('../models')
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
    try{
        // check if the user exists
        const user = await db.User.findOne({ email: req.body.email });
        if (user) {
            //check if password matches
            const result = await bcrypt.compare(req.body.password, db.User.password);
            if (result) {
              // sign token and send it in response
              const token = await jwt.sign({ email: db.User.email }, SECRET);
              res.json({ token });
            } else {
              res.status(400).json({ error: "password doesn't match" });
            }
          } else {
            res.status(400).json({ error: "User doesn't exist" });
          }
        } catch (error) {
          res.status(400).json({ error });
        res.render('users/login.jsx')
    }    
})

// 3.) REGISTER PAGE
users.get('/Register', async (req, res) => {
    res.render('users/register.jsx')
})

// 4.) REGISTER POST ACTION
users.post('/Register', async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = await db.User.create(req.body)
            // {
            // firstName: req.body.firstName,
            // lastName: req.body.lastName,
            // email: req.body.email,
            // password: hashedPassword
        // })
        res.json(user);
        res.redirect('/Login')
    } catch (error) {
        res.status(400).json({ error });
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
