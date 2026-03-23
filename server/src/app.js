import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

import authRoutes from "./module/auth/authRoutes.js"
import contactRoutes from "./module/contact/contactRoute.js"
import uploadRoute from "./module/upload/uploadRoute.js"
import productRoute from "./module/product/productRoute.js"

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    credentials: true
}))

app.use("/api/auth", authRoutes)
app.use("/api", contactRoutes)
app.use("/api/upload", uploadRoute)
app.use("/api", productRoute)

app.get('/', (req, res) => {
    res.send('lexeco is live')
})

export default app