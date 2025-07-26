import express from "express";
import {
    getProyek,
    getProyekById,
    createProyek,
    updateProyek,
    deleteProyek,
    getProyekBySlug,
    
} from "../controllers/ProyekController.js";
import {upload} from "../middlewares/upload.js";

const router = express.Router();

router.get('/',getProyek);
router.get('/:id',getProyekById);
router.post('/', upload.single("gambar"), createProyek);
router.patch('/:id', upload.single("gambar"), updateProyek);
router.delete('/:id',deleteProyek);
router.get('/slug/:slug', getProyekBySlug);


export default router;