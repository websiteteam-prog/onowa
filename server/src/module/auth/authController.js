import { generateToken } from "../../utils/generateToken.js"
import { registerService, loginService } from "./authService.js"

export const registerController = async (req, res) => {
    try {
        const user = registerService(req.body)

        return res.status(201).json({
            success: true,
            message: `Registration successful`,
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

export const loginController = (req, res) => {
    try {
        const user = loginService(req.body)

        const token = generateToken(user)

        res.cookie("token", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        return res.status(200).json({
            success: true,
            message: `Welcome back to ${user.name}`
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}

export const logoutController = (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({
            success: true,
            message: `Logout successful`
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error
        })
    }
}