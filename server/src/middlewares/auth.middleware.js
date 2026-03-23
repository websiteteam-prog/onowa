import jwt from "jsonwebtoken"

export const authMiddleware = (req, res, next) => {
    try {

        const token = req.cookies.token

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: Token missing"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()

    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        })
    }
}

export const roleMiddleware = (...roles) => {
    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: "Access denied"
            })
        }

        next()
    }
}