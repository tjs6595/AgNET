// DEPENDENCIES
const { Op } = require('sequelize')
const cattleHerds = require('express').Router()
const db = require('../models')
const { CattleHerds } = db 
const methodOverride = require('method-override')


// MIDDLEWARE
cattleHerds.use(methodOverride('_method'))

// FIND ALL CATTLE HERDS (INDEX ROUTE)
cattleHerds.get('/', async (req, res) => {
    let cattleHerdArray = [{
        cattle_herd_id:'1',
        name: 'Cattle Herd 1',
      }, {
        cattle_herd_id:'2',
        name: 'Cattle Herd 2',
      }]
      res.render('cattleHerds/herdList', { cattleHerdArray })
})

// EXPORT
module.exports = cattleHerds;












    // res.send(`This is the Cattle Herd Index Page`)
//     try {
//         const foundCattleHerds = await CattleHerds.findAll()
//         res.status(200).json(foundCattleHerds)
//     }
//     catch (error) {
//         res.status(500).json(error)
//     }
// })

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