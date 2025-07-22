import express from "express";
import {
    getUsers, 
    getUserById,
    createUSer,
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/',getUsers);
router.get('/:id',getUserById);
router.post('/',createUSer);

export default router;