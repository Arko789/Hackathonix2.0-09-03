const express = require("express")
const router = express.Router()

const { register, login } = require("../controllers/auth.controller")
const { getProfile } = require("../controllers/user.controller")
const auth = require("../middleware/auth.middleware")

router.post("/register", register)
router.post("/login", login)
router.get("/profile", auth, getProfile)

module.exports = router