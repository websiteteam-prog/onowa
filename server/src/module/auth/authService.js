import User from "../../models/userModel";
import argon2 from "argon2"

export const registerService = async ({ name, email, password }) => {
    const existUser = await User.findOne({ where: { email } })
    if (existUser) {
        throw new Error("User already exists")
    }

    const hashedPassword = await argon2.hash(password, 10)

    const user = await create({
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

export const logoutService = () => {

}