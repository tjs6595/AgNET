// DEPENDENCIES
// const { Op } = require('sequelize')
// const cattleHerds = require('express').Router()
// const db = require('../models')
// const meetgreet = require('../models/meetgreet')
// const { Band, MeetGreet, Event, SetTime } = db 
const express = require('express')
const methodOverride = require('method-override')
const cattleHerds = express.Router()

// MIDDLEWARE
cattleHerds.use(methodOverride('_method'))

// FIND ALL CATTLE HERDS (INDEX ROUTE)
cattleHerds.get('/', async (req, res) => {
    res.send(`This is the Cattle Herd Index Page`)
    // try {
    //     const foundCattleHerds = await cattleHerd.findAll({
            // order: [['available_start_time', 'ASC']],
            // where: {
            //     name: {[Op.like]: `%${req.query.name ? req.query.name : ''}%`}
            // }
//         })
//         res.status(200).json(foundCattleHerds)
//     }
//     catch (error) {
//         res.status(500).json(error)
//     }
})

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

// EXPORT
module.exports = cattleHerds;
