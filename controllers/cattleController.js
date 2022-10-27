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
module.exports = cattle                   





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










// FIND ONE HERD (SHOW ROUTE)
// herds.get('/:name', async (req, res) => {
//     try {
//         const foundHerd = await Herd.findOne({
            // where: { name: req.params.name },
            // include: [
            //     {
            //         model: MeetGreet,
            //         as: "meet_greets",
            //         include: { 
            //             model: Event, 
            //             as: "event",
            //             where: { name: {[Op.like]: `${req.query.event ? req.query.event : ''}%`}}
            //     }   
            //     },
            //     {
            //         model: SetTime,
            //         as: "set_times",
            //         include: { 
            //             model: Event, 
            //             as: "event",
            //             where: { name: {[Op.like]: `${req.query.event ? req.query.event : ''}%`}}
            //     }   
            //     }
            // ]
//         })
//         res.status(200).json(foundHerd)
//     } 
//     catch (error) {
//         res.status(500).json(error)
//     }
// })

// CREATE A HERD
// herds.post('/', async (req, res) => {
//     try {
//         const newHerd = await Herd.create(req.body)
//         res.status(200).json({
//             message: 'Successfully created a new herd.',
//             data: newHerd
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })

// UPDATE A HERD
// herds.put('/:id', async (req, res) => {
//     try {
//         const updatedHerds = await Herd.update(req.body,{
            // where: {
            // band_id: req.params.id
            // }
//         })
//         res.status(200).json({
//             message: `Successfully updated ${updatedHerds} herd(s).`
//         })
//     } 
//     catch(err) {
//         res.status(500).json(err)
//     }
// })

// DELETE A BAND
// herds.delete('/:id', async (req, res) => {
//     try {
//         const deletedHerds = await Herd.destroy({
            // where: {
            //     band_id: req.params.id
            // }
//         })
//         res.status(200).json({
//             message: `Successfully deleted ${deletedHerds} Herd(s).`
//         })
//     } catch(err) {
//         res.status(500).json(err)
//     }
// })