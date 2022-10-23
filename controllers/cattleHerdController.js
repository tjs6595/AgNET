// DEPENDENCIES
// const { Op } = require('sequelize')
const express = require ('express')
const cattleHerds = require('express').Router()
// const cattleHerdList = require('../models/cattleHerd')
const db = require('../models')
const CattleHerd = require('../models/cattleHerd.js')
const methodOverride = require('method-override')


// MIDDLEWARE
cattleHerds.use(methodOverride('_method'))

// 1.) CATTLE HERDS INDEX PAGE
cattleHerds.get('/', async (req, res) => {
  db.CattleHerd.find()
  .then((cattleHerd) => {
      res.render('cattleHerds/herdList', { cattleHerd })
  })
  .catch(err => {
      console.log(err)
      res.render('error404')
  })
})

// 2.) CREATE NEW CATTLE HERD (FROM PUSH BUTTON)
cattleHerds.post('/new', async (req, res) => {
  console.log(req.body)
  db.CattleHerd.create(req.body)
  .then(() => {
    res.redirect('/Livestock/Cattle/HerdList')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// 3.) NEW CATTLE HERD FORM PAGE
cattleHerds.get('/new', (req, res) => {
  res.render('./cattleHerds/new')
})

// 4.) CATTLE HERD SHOW PAGE
cattleHerds.get('/:id', (req, res) => {
  db.CattleHerd.findById(req.params.id)
  .then( cattleHerd => {
    res.render('cattleHerds/show', { cattleHerd })   
    // console.log(cattleHerd);
  })
  .catch( err => {
    console.log('err', err)
    res.render('error404')
  })
})

// 5.) CATTLE HERD UPDATE (FROM PUSH BUTTON)
cattleHerds.put('/:id', (req, res) => {
  db.CattleHerd.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
    res.redirect(`/Livestock/Cattle/HerdList/${req.params.id}`)
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// 6.) CATTLE HERDS DELETE PAGE
cattleHerds.delete('/:id', (req, res) => {
  db.CattleHerd.findByIdAndDelete(req.params.id)
  .then(cattleHerd => {
      res.redirect('/Livestock/Cattle/HerdList')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

// 7.) CATTLE HERD UPDATE FORM PAGE
cattleHerds.get('/:id/edit', (req, res) => {
  // res.send('GET ./cattleHerds/herdList/:id/edit stub')
  db.CattleHerd.findById(req.params.id)
  .then(cattleHerd => {
    res.render('./cattleHerds/edit', { cattleHerd })
  })
  .catch(err => {
    res.render('error404', err)
  })
})

// EXPORT
module.exports = cattleHerds;











  // try {
  //   const foundCattleHerds = await db.CattleHerd.findAll()
  //   res.status(200).json(foundCattleHerds)
  //   // res.render('./cattleHerds/herdList')
  // }
  // catch (error) {
  //   res.status(500).json(error)
  // }




// CREATE A HERD
// cattleHerds.get('/new', async (req, res) => {
//     res.render('./cattleHerds/new')
    // try {
    //     const newHerd = await db.CattleHerd.create(req.body)
    //     res.status(200).json({
    //         message: 'Successfully created a new herd.',
    //         data: newHerd
    //     })
    // } catch(err) {
    //     res.status(500).json(err)
    // }
// })




// db.CattleHerd.find(`SELECT * FROM public."cattleHerds"`)
// .then((cattleHerd) => {
//   res.render('cattleHerds/herdList', { cattleHerd })
// })
// .catch(err => {
//   console.log(err)
//   res.render('error404')
// })
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








// // CATTLE HERDS INDEX PAGE
// cattleHerds.get('/', async (req, res) => {
//   res.render('./cattleHerds/herdList', { cattleHerdList })
// })

// // CREATE NEW CATTLE HERD (FROM PUSH BUTTON)
// cattleHerds.post('/new', async (req, res) => {
//   cattleHerdList.push(req.body)
//   res.redirect('./')
// })

// // NEW CATTLE HERD FORM PAGE
// cattleHerds.get('/new', (req, res) => {
//   res.render('./cattleHerds/new')
// })

// // CATTLE HERD SHOW PAGE
// cattleHerds.get('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   console.log(id)
//     if (isNaN(id)) {
//       res.render('error404')
//     }
//     else if(!cattleHerdList[id]) {
//       res.render('error404')
//     }
//     else {
//       res.render('./cattleHerds/show', { cattleHerdList: cattleHerdList[id], id})
//     }
// })

// // CATTLE HERD UPDATE (FROM PUSH BUTTON)
// cattleHerds.put('/:id', (req, res) => {
//   res.send('PUT ./cattleHerds/herdList/:id stub')
// })

// // CATTLE HERDS DELETE PAGE
// cattleHerds.delete('/:id', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if(!cattleHerdList[id]) {
//     res.render('error404')
//   }
//   else {
//     cattleHerdList.splice(id, 1)
//     res.redirect('./')
//   }
// })

// // CATTLE HERD UPDATE FORM PAGE
// cattleHerds.get('/:id/edit', (req, res) => {
//   let id = Number(req.params.id)
//   if (isNaN(id)) {
//     res.render('error404')
//   }
//   else if(!cattleHerdList[id]) {
//     res.render('error404')
//   }
//   else {
//     res.render('./cattleHerds/edit', { cattleHerdList: cattleHerdList[id]})
//   }

// })