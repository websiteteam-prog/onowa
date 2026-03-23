import express from "express"
import { registerController, loginController, logoutController, forgotPasswordController, resetPasswordController } from "./authController.js"

const router = express()

//  define routes
router.post('/register', registerController)
router.post('/login', loginController)
router.post('/logout', logoutController)
router.post("/forgot-password", forgotPasswordController)
router.post("/reset-password/:token", resetPasswordController)

export default router