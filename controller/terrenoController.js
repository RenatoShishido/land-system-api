const express = require('express')

const Terreno = require('../models/terreno')


const router = express.Router()

router.post('/', async (req, res) => {
  try {
    
    console.log(req.body)

    const response =  await Terreno.create(req.body)

    res.send({ response })

  } catch (error) {
    res.status(400).send({error: "create"})
    console.log(error)
  }

})
router.get('/', async (req, res) => {
  try {
    
    const response = await Terreno.find()

    res.send({ response })

  } catch (error) {
    res.status(400).send({error: "find"})
    console.log(error)
  }

})
router.put('/atualizar/:id', async (req, res) => {
  try {

    const response = await Terreno.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.send({ response })

  } catch (error) {
    res.status(400).send({error: "update"})
    console.log(error)
  }

})
router.delete('/delete/:id', async (req, res) => {
  try {

    const response = await Terreno.findByIdAndDelete(req.params.id)

    res.send({ response })

  } catch (error) {
    res.status(400).send({error: "delete"})
    console.log(error)
  }

})

module.exports = app => app.use('/', router);