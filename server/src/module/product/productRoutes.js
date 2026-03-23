import express from "express";
import upload from "../../middlewares/multer.js"
import {
    authMiddleware,
    roleMiddleware
} from "../../middlewares/auth.middleware.js"
import {
    addProductController,
    getProductController,
    getAllProductController,
    updateProductController,
    deleteProductController
} from "./productController.js"

const router = express.Router();

router.post(
    "/",
    authMiddleware,
    roleMiddleware("admin"),
    upload.single("image"),
    addProductController
);

router.put(
    "/:id",
    authMiddleware,
    roleMiddleware("admin"),
    upload.single("image"),
    updateProductController
);

router.delete(
    "/:id",
    authMiddleware,
    roleMiddleware("admin"),
    deleteProductController
);

// public routes
router.get("/", getAllProductController);
router.get("/:id", getProductController);

export default router;