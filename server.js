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


// ROOT
app.get('/', (req, res) => {
    // res.status(200).json({
    //     message: 'Welcome to the AgNET Home Page about Breads'
    // })
    res.render('home')
})


// CONTROLLERS 
const livestockController = require('./controllers/livestock_controller')
app.use('/livestock', livestockController)

const cattleHerdController = require('./controllers/cattle_herd_controller')
app.use('/livestock/cattleHerds', cattleHerdController)

const cattleController = require('./controllers/cattle_controller')
app.use('/livestock/cattleHerds/cattle', cattleController)

// const stagesController = require('./controllers/stages_controller')
// app.use('/stages', stagesController)


// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🚜 Workin' on port: ${process.env.PORT}`)
})