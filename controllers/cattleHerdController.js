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
  .populate('cattle')
  .then( cattleHerd => {
    // console.log(cattleHerd.cattle)
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
  .populate('cattle')
  .then(cattleHerd => {
    res.render('./cattleHerds/edit', { cattleHerd })
  })
  .catch(err => {
    res.render('error404', err)
  })
})

// 8.) ADD NEW CATTLE TO HERD (FROM PUSH BUTTON)
cattleHerds.post('/:id/Cattle/New', async (req, res) => {
  // res.send('POST /:id/Cattle New')
  console.log(req.params.id)
  db.CattleHerd.findById(req.params.id)
    .then(cattleHerd => {
      // console.log(req.body)
      // console.log(cattleHerd.id)
      // console.log(req.params.id)
      db.Cattle.create(req.body)
        .then(cattle => {
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
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

// 9.) ADD NEW CATTLE TO HERD FORM PAGE
cattleHerds.get('/:id/Cattle/New', (req, res) => {
  res.render('./cattle/new')
})

// EXPORT
module.exports = cattleHerds;
