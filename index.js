require("dotenv").config()

// Guard: fail fast if critical env vars are missing
if (!process.env.JWT_SECRET) {
  console.error("FATAL: JWT_SECRET is not set in .env")
  process.exit(1)
}
if (!process.env.MONGO_URL) {
  console.error("FATAL: MONGO_URL is not set in .env")
  process.exit(1)
}

const express = require("express")
const cors = require("cors")

const connectDB = require("./config/config")

const authRoutes = require("./routes/auth.routes")
const todoRoutes = require("./routes/todo.routes")
const userRoutes = require("./routes/user.routes")
const errorHandler = require("./middleware/error.middleware")

const app = express()

// CORS: allow the frontend origin (update CLIENT_URL in .env for production)
app.use(cors({
  origin: process.env.CLIENT_URL || "*",
  credentials: true
}))

app.use(express.json())

connectDB()

app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/todos", todoRoutes)

app.use(errorHandler)
// index.js — add this after app.use(express.json())
const path = require("path")
app.use(express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


// After app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))