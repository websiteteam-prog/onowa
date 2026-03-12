import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRoutes from "./module/auth/authRoutes.js"

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    credentials: true
}))

// mount and define routes
app.use("/api/auth", authRoutes)

app.get('/', (req, res) => {
    res.send('lexeco is live')
})

export default app