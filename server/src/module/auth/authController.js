import { generateToken } from "../../utils/generateToken.js"
import { registerService, loginService, resetPasswordService, forgotPasswordService } from "./authService.js"
import { registerSchema, loginSchema, forgotPasswordSchema, resetPasswordSchema } from "./authValidation.js"

export const registerController = async (req, res) => {
    try {
        const validation = registerSchema.parse(req.body)
        const user = await registerService(validation)

        return res.status(201).json({
            success: true,
            message: `Registration successfull`,
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const loginController = async (req, res) => {
    try {
        const validation = loginSchema.parse(req.body)
        const user = await loginService(validation)

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
            message: error.message
        })
    }
}

export const logoutController = async (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({
            success: true,
            message: `Logout successful`
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const forgotPasswordController = async (req, res) => {
    try {

        const validation = forgotPasswordSchema.parse(req.body)

        await forgotPasswordService(validation)

        return res.status(200).json({
            success: true,
            message: "Reset password link sent to email"
        })

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message
        })

    }
}

export const resetPasswordController = async (req, res) => {
    try {

        const { password } = resetPasswordSchema.parse(req.body)

        const { token } = req.params

        await resetPasswordService({
            token,
            password
        })

        return res.status(200).json({
            success: true,
            message: "Password reset successful"
        })

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message
        })

    }
}