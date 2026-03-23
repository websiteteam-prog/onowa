import dotenv from "dotenv"

dotenv.config()

const config = {
  port: process.env.PORT,

  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    dialect: process.env.DIALECT_NAME
  },

  jwt_secret: process.env.JWT_SECRET
}

export default config