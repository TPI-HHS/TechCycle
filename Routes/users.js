const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const verifyJWT = require('../middleware/verifyJWT')
const {authenticateToken, authorizeRole} = require('../middleware/verifyAdmin')

router.get('/users', verifyJWT, authenticateToken, authorizeRole('employee'), async (req, res) => {
  try {
    const users = await User.findAll()
    if (users.length === 0) {
      res.status(200).json({ message: 'No users found' })
    } else {
      res.status(200).json(users)
    }
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving users' })
    console.log('Unable to retrieve users', error)
  }
})

router.get('/users/:id', verifyJWT, authenticateToken, authorizeRole('employee'), async (req, res) => {
  try {
    const userId = req.params.id
    const user = await User.findOne({ where: { id: userId } })
    if (!user) {
      res.status(404).send({ error: 'User not found' })
    } else {
      res.status(200).json(user)
    }
  } catch (error) {
    res.status(500).send({ error: 'Error retrieving user' })
    console.log('Unable to retrieve user', error)
  }
})

router.put('/users/:id', verifyJWT, authenticateToken, authorizeRole('employee'), async (req, res) => {
  const userId = req.params.id
  try {
    const checkId = await User.findByPk(userId)

    if (!checkId) {
      res.status(404).send({ message: 'User not found' })
    } else {
      const updateItem = await User.update(req.body, {
        where: { id: req.params.id },
      })
      res.status(200).send({ message: 'User updated' })
    }
  } catch (error) {
    res.status(500).send({ error: 'Server error' })
    console.error('Unable to update User', error)
  }
})

router.delete('/users/:id', verifyJWT, authenticateToken, authorizeRole('employee'), async (req, res) => {
  try {
    const userId = Number(req.params.id)
    const user = await User.destroy({ where: { id: userId } })
    if (user === 1) {
      res.status(200).send({ message: 'User deleted' })
    } else {
      res.status(404).send({ error: `User not found with id ${userId}` })
    }
  } catch (error) {
    res.status(500).send({ error: 'Error deleting user' })
    console.log('Unable to delete user', error)
  }
})

module.exports = router
