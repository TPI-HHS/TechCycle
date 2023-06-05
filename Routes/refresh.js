const express = require('express')
const router = express.Router()

const refreshTokenController = require('../controller/refreshTokenController');

router.post('/refresh-token', refreshTokenController.handleRefreshToken);

module.exports = router;