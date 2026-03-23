import User from "../../models/userModel.js";
import argon2 from "argon2"
import { sendEmail } from "../../utils/sendEmail.js";
import crypto from "crypto"
import config from "../../config/config.js";

export const registerService = async ({ name, email, password }) => {
    const existUser = await User.findOne({ where: { email } })
    if (existUser) {
        throw new Error("User already exists")
    }

    const hashedPassword = await argon2.hash(password, 10)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    return user
}

export const loginService = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } })
    if (!user) {
        throw new Error("Invalid credentials")
    }

    const matchPassword = await argon2.verify(user.password, password)
    if (!matchPassword) {
        throw new Error("Invalid credentials")
    }

    return user
}

export const forgotPasswordService = async ({ email }) => {

    const user = await User.findOne({ where: { email } })

    if (!user) {
        throw new Error("User does not exist")
    }

    const resetToken = crypto.randomBytes(32).toString("hex")

    user.resetToken = resetToken
    user.resetTokenExpiry = Date.now() + 15 * 60 * 1000

    await user.save()

    const resetLink = `${config.frontend_url}/reset-password/${resetToken}`

    const html = `
        <h2>Password Reset Request</h2>
        <p>Click the link below to reset your password</p>

        <a href="${resetLink}" 
        style="display:inline-block;padding:10px 20px;background:#007bff;color:white;text-decoration:none;border-radius:5px">
        Reset Password
        </a>

        <p>This link will expire in 15 minutes</p>

        <p>If you did not request this, please ignore this email.</p>
        `

    await sendEmail(user.email, "Reset Password", html)

    return true
}

export const resetPasswordService = async ({ token, password }) => {

    const user = await User.findOne({
        where: { resetToken: token }
    })

    if (!user) {
        throw new Error("Invalid reset token")
    }

    if (user.resetTokenExpiry < Date.now()) {
        throw new Error("Reset token expired")
    }

    const hashedPassword = await argon2.hash(password)

    user.password = hashedPassword
    user.resetToken = null
    user.resetTokenExpiry = null

    await user.save()

    const html = `
        <h2>Password Changed Successfully</h2>

        <p>Your password has been successfully updated.</p>

        <p>If you did not perform this action, please contact support immediately.</p>
        `

    await sendEmail(user.email, "Password Changed Successfully", html)

    return true
}