import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import config from "./config/config.js"
import authRoutes from "./module/auth/authRoutes.js"
import productRoutes from "./module/product/productRoutes.js"
import CartRoutes from "./module/cart/cartRoutes.js"
import WishlistRoutes from "./module/wishlist/wishlistRoutes.js"

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: config.frontend_url,
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    credentials: true
}))

// mount and define routes
app.use("/api/auth", authRoutes)
app.use("/api/product", productRoutes)
app.use("/api/cart", CartRoutes)
app.use("/api/wishlist", WishlistRoutes)

app.get('/', (req, res) => {
    res.send('onowa is live')
})

export default app