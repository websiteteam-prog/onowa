import dotenv from "dotenv"

const config = {
    database:{
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        name: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        dialect: process.env.DIALECT_NAME
    },
    payment:{
        id: process.env.RAZORPAY_KEY_ID,
        secret: process.env.RAZORPAY_KEY_SECRET
    },
    jwt_secret: process.env.JWT_SECRET,
    port: process.env.PORT
}

export default config