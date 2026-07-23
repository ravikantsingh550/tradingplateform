const { Signup, Login, Logout } = require('../controllers/AuthController')
const router = require('express').Router()
const {userVerification} = require("../middlewares/AuthMiddleware");

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/verify',userVerification);
router.post("/logout", Logout);

module.exports = router