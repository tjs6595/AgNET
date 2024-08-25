// DEPENDENCIES
// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')


// MIDDLEWARE
// app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
// app.use(express.json())


// CONTROLLERS 
const userController = require('./controllers/userController')
app.use('/', userController)

const authenticationController = require('./controllers/authenticationController')
app.use('/', authenticationController)

const livestockController = require('./controllers/livestockController')
app.use('/Livestock', livestockController)

const cattleHerdController = require('./controllers/cattleHerdController')
app.use('/Livestock/Cattle/HerdList', cattleHerdController)

// const cattleController = require('./controllers/cattleController')
// app.use('/Livestock/Cattle/HerdList/Cattle', cattleController)


// ROOT
app.get('/', (req, res) => {
    res.render('home')
})

// LIVESTOCK HOME PAGE
app.get('/Livestock', (req, res) => {
    res.render('./livestock')
})

// ABOUT PAGE
app.get('/About', (req, res) => {
    res.render('./about')
})

// CONTACT PAGE
app.get('/Contact', (req, res) => {
    res.render('./contact')
})

// CATTLE HERD PAGE
app.get('/Livestock/Cattle/HerdList', (req, res) => {
    res.render('../cattleHerds/herdList')
})

// CATTLE INFO PAGE
app.get('/cattle/cattleList', (req, res) => {
    res.render('cattle/cattleList')
})


// ERROR 404 ROUTE
app.get('*', (req, res) => {
    res.render('error404')
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🚜 Workin' on port: ${process.env.PORT}`)
})







// const swineHerdController = require('./controllers/cattleHerdController')
// app.use('/swineHerds/herdList', swineHerdController)

// const swineController = require('./controllers/cattle_controller')
// app.use('/swine/swineList', swineController)


// SWINE HERD PAGE
// app.get('/swineHerds/herdList', (req, res) => {
//     res.render('swineHerds/herdList')
// })

// // SWINE INFO PAGE
// app.get('/swine/swineList', (req, res) => {
//     res.render('swine/swineList')
// })