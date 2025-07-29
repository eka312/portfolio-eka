import express from "express";
import cors from "cors";
import ProyekRoute from "./routes/ProyekRoute.js";
import db from "./config/db.js";
import router from "./routes/UserRoute.js";
import path from "path";
import {fileURLToPath} from "url";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173',  'https://portfolio-eka.netlify.app']
}));
app.use(cookieParser());
app.use(express.json());
app.use('/proyeks', ProyekRoute);
app.use('/images', express.static(path.join(__dirname, '../public/images')));

try {
    await db.authenticate();
    console.log('Koneksi ke database berhasil!');
} catch (error) {
    console.error('Koneksi ke database gagal:', error);
}

app.use(router);


app.listen(5000, ()=> console.log('server berjalan...'));
