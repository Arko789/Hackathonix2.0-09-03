const jwt = require("jsonwebtoken")
const AppError = require("../utils/AppError")

const auth = (req, res, next) => {
    const token = req.headers.token

    if (!token) {
        return next(new AppError("No token", 401))
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userid = decoded.userid
        next()
    } catch (err) {
        return next(new AppError("Invalid or expired token", 401))
    }
}

module.exports = auth