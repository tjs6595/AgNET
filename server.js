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
// app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// SEQUELIZE CONNECTION
const sequelize = new Sequelize(process.env.PG_URI)

try {
    sequelize.authenticate() 
    console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
} catch(err) {
    console.log(`Unable to connect to PG: ${err}`) 
}


// ROOT
app.get('/', (req, res) => {
    // res.status(200).json({
    //     message: 'Welcome to the AgNET Home Page about Breads'
    // })
    res.render('home')
})

// LIVESTOCK HOME PAGE
app.get('/livestock', (req, res) => {
    res.render('livestock')
})

// CATTLE HERD PAGE
app.get('/cattleHerds/herdList', (req, res) => {
    res.render('cattleHerds/herdList')
})

// CATTLE INFO PAGE
app.get('/cattle/cattleList', (req, res) => {
    res.render('cattle/cattleList')
})

// SWINE HERD PAGE
app.get('/swineHerds/herdList', (req, res) => {
    res.render('swineHerds/herdList')
})

// SWINE INFO PAGE
app.get('/swine/swineList', (req, res) => {
    res.render('swine/swineList')
})


// CONTROLLERS 
const livestockController = require('./controllers/livestockController')
app.use('/livestock', livestockController)

const cattleHerdController = require('./controllers/cattleHerdController')
app.use('/cattleHerds/herdList', cattleHerdController)

const cattleController = require('./controllers/cattle_controller')
app.use('/cattle/cattleList', cattleController)

const swineHerdController = require('./controllers/cattleHerdController')
app.use('/swineHerds/herdList', swineHerdController)

const swineController = require('./controllers/cattle_controller')
app.use('/swine/swineList', swineController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🚜 Workin' on port: ${process.env.PORT}`)
})