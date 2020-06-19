const express = require('express')

const Terreno = require('../models/terreno')


const router = express.Router()

router.get('/vendido', async (req, res) => {
  try {
    
    const response = await Terreno.find()
    .where('status').equals('Vendido')


    res.send({ response })

  } catch (error) {
    res.status(400).send({error: "find"})
    console.log(error)
  }

})
router.get('/venda', async (req, res) => {
  try {
    
    const response = await Terreno.find()
    .where('status').equals('Venda')


    res.send({ response })

  } catch (error) {
    res.status(400).send({error: "find"})
    console.log(error)
  }

})
router.get('/cliente', async (req, res) => {
  try {
    
    const response = await Terreno.find()
    .where('cliente').exists()


    res.send({ response })

  } catch (error) {
    res.status(400).send({error: "find"})
    console.log(error)
  }

})


module.exports = app => app.use('/filter', router);