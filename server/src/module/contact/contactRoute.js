import express from "express";
import { submitContact } from "./contactController.js";

const router = express.Router();

router.post("/contact", submitContact);

export default router;