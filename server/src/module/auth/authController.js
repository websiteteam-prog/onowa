import { generateToken } from "../../utils/generateToken.js"
import { registerService, loginService } from "./authService.js"

export const registerController = async (req, res) => {
  try {

    const user = await registerService(req.body)

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      data: user
    })

  } catch (error) {

    console.error(error)

    return res.status(500).json({
      success: false,
      message: error.message || "Registration failed"
    })

  }
}

export const loginController = async (req, res) => {
  try {

    const user = await loginService(req.body)

    const token = generateToken(user)

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    return res.status(200).json({
      success: true,
      message: `Welcome back ${user.name}`,
      token,
      user
    })

  } catch (error) {

    console.error(error)

    return res.status(500).json({
      success: false,
      message: error.message || "Login failed"
    })

  }
}

export const logoutController = async (req, res) => {
  try {

    res.clearCookie("token")

    return res.status(200).json({
      success: true,
      message: "Logout successful"
    })

  } catch (error) {

    console.error(error)

    return res.status(500).json({
      success: false,
      message: error.message || "Logout failed"
    })

  }
}

