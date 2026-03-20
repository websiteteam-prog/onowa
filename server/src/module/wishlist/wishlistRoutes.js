import express from "express";
import {
  addWishlistController,
  getWishlistController,
  removeWishlistController
} from "./wishlistController.js";
import { authMiddleware } from "../../middlewares/auth.middleware.js"

const router = express.Router();

router.post("/", authMiddleware, addWishlistController);
router.get("/", authMiddleware, getWishlistController);
router.delete("/:id", authMiddleware, removeWishlistController);

export default router;