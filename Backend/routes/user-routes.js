const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const userController = require("../controllers/user-controller");
const authMiddleware = require("../middleware/auth-middleware");


router.post("/register",[
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("fullname.firstname").notEmpty().withMessage("First name is required"),
    body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters long")
],userController.registerUser)

router.post('/login',[
    body("email").isEmail().withMessage("Please enter a valid email address"),
    body("password").notEmpty().withMessage("Password is required")
], userController.loginUser)

router.get("/profile", authMiddleware.authUser, userController.getUserProfile)



module.exports = router;