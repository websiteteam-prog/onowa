import express from "express";
import {
    addToCartController,
    updateCartController,
    getCartController,
    removeCartController
} from "./cartController.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", authMiddleware, addToCartController);
router.get("/", authMiddleware, getCartController);
router.put("/:id", authMiddleware, updateCartController);
router.delete("/:id", authMiddleware, removeCartController);

export default router;