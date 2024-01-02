
const express = require("express");
const router = express.Router()
const userCtrl = require('../ControllerUsers');



router.post('/signup', userCtrl.signup);



  module.exports = router;