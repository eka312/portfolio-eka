import express from "express";
import {UserLogin} from "../controllers/UserController.js";

const router = express.Router();

// Route untuk login
router.post("/login", UserLogin);

export default router;