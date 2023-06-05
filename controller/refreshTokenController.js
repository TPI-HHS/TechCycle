const User = require('../models/user.model')
const bcrypt = require('bcrypt')

const jwt = require('jsonwebtoken')
require('dotenv').config()

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.sendStatus(401);

  const refreshToken = cookies.jwt;

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    const foundUser = await User.findOne({ where: { username: decoded.username } });

    if (!foundUser || foundUser.refreshToken !== refreshToken) {
      return res.sendStatus(403);
    }

    const accessToken = jwt.sign({ username: decoded.username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' });

    res.json({ accessToken });
  } catch (err) {
    // Handle JWT verification error
    console.error('Error verifying refresh token:', err);
    res.sendStatus(403);
  }
};

module.exports = { handleRefreshToken }