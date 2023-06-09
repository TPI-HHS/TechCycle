const jwt = require('jsonwebtoken')
require('dotenv').config()

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.sendStatus(401)
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.sendStatus(403)
    }
    req.user = {
      id: decoded.id,
      username: decoded.username,
      role: decoded.role,
    }
    next()
  })
}

const authorizeRole = requiredRole => (req, res, next) => {
  const { role } = req.user

  if (role !== requiredRole) {
    return res.sendStatus(403)
  }

  next()
}

module.exports = { authenticateToken, authorizeRole }
