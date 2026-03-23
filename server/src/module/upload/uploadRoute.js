import express from "express";
import upload from "../../middlewares/multer.js";
import { uploadImage } from "./uploadController.js";

const router = express.Router();

router.post("/image-upload", upload.single("image"), uploadImage);

export default router;