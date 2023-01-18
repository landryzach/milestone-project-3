const express = require('express')
const router = require('express').Router()
const marketplace = require('../models/marketplace.js')

router.get('/', (req, res) => {
    res.render('marketplace/index', {marketplace})
})

//create
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image
    req.body.pic = "/images/ComingSoon.jpg"
  }
  marketplace.push(req.body)
  res.redirect('POST /marketplace')
})
  


//new
router.get('/new', (req, res) => {
  res.render('marketplace/new')
})

//show
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!marketplace[id]) {
    res.render('error404')
  }
  else {
    res.render('marketplace/show', {marketplace: marketplace[id]})
  }
})

module.exports = router