import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import cors from "cors"
import connectDB from "./config/db.js"

import userRoutes from "./routes/userRoute.js"

dotenv.config()
connectDB()
const app = express()

app.use(express.json({ limit: "50mb" }))
app.use(cors())
app.use(express.urlencoded({ limit: "50mb", extended: true }))

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:PORT"],
  })
)

app.get("/", (req, res) => {
  res.send("It is running")
})

app.use("/user", userRoutes)
const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `server is running in on ${process.env.NODE_ENV} in ${PORT} port`.yellow
      .bold
  )
)
