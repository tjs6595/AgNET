// DEPENDENCIES
const cattle = require('express').Router()
const { db } = require('../models/cattle.js')
const Cattle = require('../models/cattle.js')
const cattleSeedData = require('../seeders/cattle_seed.js')

cattle.get('/data/seed', (req, res) => {
    Cattle.insertMany(cattleSeedData)
        .then(res.redirect('/Livestock/Cattle/HerdList'))
})




// export
// module.exports = cattle                   





// DEPENDENCIES
// const { Op } = require('sequelize')
// const cattle = require('express').Router()
// const db = require('../models')
// const meetgreet = require('../models/meetgreet')
// const { Band, MeetGreet, Event, SetTime } = db 

// 1.) CATTLE INDEX PAGE
cattle.get('/', async (req, res) => {
    res.send(`This is the Single Cattle Index Page`)
})


// 2.) CREATE NEW CATTLE HERD (FROM PUSH BUTTON)
cattle.post('/new', async (req, res) => {
    console.log(req.body)
    db.CattleHerd.findById(req.params.id)
        .then(cattleHerd => {
            db.Cattle.create(req.body)
            .then((cattle) => {
                cattleHerd.cattle.push(cattle.id)
                cattleHerd.save()
                .then(() => {
                    res.redirect(`/Livestock/Cattle/HerdList/${req.params.id}`)
                })
            })
            .catch(err => {
              console.log('err', err)
              res.render('error404')
            })
        })
  })

// EXPORT
module.exports = cattle;
