const express = require('express')
const router = express.Router()
const logoutController =  require('../controller/logoutController');

router.post('/logout', logoutController.handleLogout);

module.exports = router;