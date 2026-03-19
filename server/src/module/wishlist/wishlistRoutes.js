import express from "express";

import {
  addWishlistController,
  getWishlistController,
  removeWishlistController
} from "./wishlistController.js";

const router = express.Router();


router.post("/add", addWishlistController);

router.get("/:userId", getWishlistController);

router.delete("/remove/:id", removeWishlistController);


export default router;