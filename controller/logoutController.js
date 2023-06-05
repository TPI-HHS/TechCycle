const User = require('../models/user.model')

// remove refresh access token from database to logout

const handleLogout = async (req, res) => {
  // On client, also delete the in memory accessToken
  const cookies = req.cookies

  try {
    if (!cookies?.jwt) return res.sendStatus(204) // no content already

    const refreshToken = cookies.jwt
    // Is refreshToken in DB
    const foundUser = await User.findOne({ where: { refreshToken } })

    if (!foundUser) {
      res.clearCookie('jwt', { httpOnly: true })
      return res.sendStatus(204)
    }
    //Delete refreshToken from db
    foundUser.refreshToken = null
    res.json({message: 'Logged out'})
    await foundUser.save()

    res.clearCookie('jwt', { httpOnly: true })
    res.sendStatus(204)
  } catch (error) {
    console.error('Error deleting refresh token:', error)
    res.sendStatus(500)
  }
}

module.exports = { handleLogout }
