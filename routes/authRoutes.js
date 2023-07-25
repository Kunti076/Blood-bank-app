const express = require('express');
const { registerController, loginController, currentUserController,  } = require('../controllers/authController');
const authMiddelware = require('../middlewares/authMiddelware');

const router = express.Router();

//routers
//register || post
router.post('/register',registerController);

//login || post
router.post('/login',loginController);

//get current user || get
router.post('/current-user', authMiddelware, currentUserController);

module.exports = router;