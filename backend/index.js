import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import ProyekRoute from "./routes/ProyekRoute.js";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();
app.use(cors());
app.use(express.json());
app.use('/users', UserRoute);
app.use('/proyeks', ProyekRoute);
app.use('/images', express.static(path.join(__dirname, '../public/images')));

 
app.listen(5000, ()=> console.log('server berjalan...'));
