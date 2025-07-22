import express from "express";
import {
    getProyek,
    getProyekById,
    createProyek,
    updateProyek,
    deleteProyek,
    
} from "../controllers/ProyekController.js";
import {upload} from "../middlewares/upload.js";

const router = express.Router();

router.get('/',getProyek);
router.get('/:id',getProyekById);
// router.post('/',createProyek);
// router.patch('/:id',updateProyek);
router.post('/', upload.single("gambar"), createProyek);
router.patch('/:id', upload.single("gambar"), updateProyek);
router.delete('/:id',deleteProyek);


export default router;