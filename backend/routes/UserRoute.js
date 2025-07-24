import express from "express";
import {getUsers, createUser, Login, Logout} from "../controllers/UserController.js";
import {veryfyToken} from "../middlewares/veryfyToken.js";
import {refreshToken} from "../controllers/RefreshToken.js";

const router = express.Router();

// Route untuk login
router.get("/users",veryfyToken, getUsers);
router.post("/users", createUser);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);


export default router;