// DEPENDENCIES
const express = require('express')
const app = express()
const { Sequelize } = require('sequelize')
const methodOverride = require('method-override')


// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))


// CONTROLLERS 
const livestockController = require('./controllers/livestockController')
app.use('/Livestock', livestockController)

const cattleHerdController = require('./controllers/cattleHerdController')
app.use('/Livestock/Cattle/HerdList', cattleHerdController)

const cattleController = require('./controllers/cattle_controller')
app.use('/cattle/cattleList', cattleController)



// ROOT
app.get('/', (req, res) => {
    res.render('home')
})

// LIVESTOCK HOME PAGE
app.get('/Livestock', (req, res) => {
    res.render('./livestock')
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