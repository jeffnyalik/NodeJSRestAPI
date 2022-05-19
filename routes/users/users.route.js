const express = require('express');
const router = express.Router();
const userController = require('../../controllers/users/users.controller');


router.post('/register', userController.register);
router.post('/login', userController.signin);


module.exports = router;