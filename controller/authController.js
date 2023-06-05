const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

require('dotenv').config()

const handleLogin = async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) return res.status(400).json({ message: 'Username and password are required' })
  // find user in database
  const foundUser = await User.findOne({ where: { username: username } })

  if (!foundUser) return res.sendStatus(401) //Unauthorized

  // Evaluate password
  const match = await bcrypt.compare(password, foundUser.password)

  if (match) {
    const accessToken = jwt.sign({ username: foundUser.username, role: foundUser.role }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' })
    const refreshToken = jwt.sign({ username: foundUser.username }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '1d',
    })

    // Saving refresh token to db
    try {
      foundUser.refreshToken = refreshToken
      await foundUser.save()
      console.log('RefreshToken saved to foundUser account')
    } catch (error) {
      console.error('Error saving the record:', error)
    }

    res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 }) // one day age
    res.json({ accessToken })
    // res.json({ success: `User ${username} is logged in` })
  } else {
    res.sendStatus(401)
  }
}

module.exports = { handleLogin }
