import express from "express";
import { createConsultation } from "../controllers/consultation.controller.js";

const router = express.Router();

// POST API
router.post("/create", createConsultation);

export default router;