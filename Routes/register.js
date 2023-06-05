const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const User = require('../models/user.model')

router.post('/register', async (req, res) => {
    const newItem = {
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 8),
      email: req.body.email,
      role: req.body.role
    }
    try {
      console.log(newItem)
      const newUser = await User.create(newItem)
      if (newUser) {
        res.status(201).send(newUser)
      }
    } catch (error) {
      res.status(500).send({ error: 'Error creating user' })
      console.log('Unable to create user', error)
    }
  });

  module.exports = router