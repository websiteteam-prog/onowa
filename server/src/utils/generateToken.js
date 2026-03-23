import jwt from "jsonwebtoken"
import config from "../config/config.js"

export const generateToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
        role: user.role
    }
    return jwt.sign(payload, config.jwt_secret, { expiresIn: '7d' })
}