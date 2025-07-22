import Proyek from "../models/ProyekModel.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//ambil semua proyek
export const getProyek = async(req, res) => {
    try{
        const response = await Proyek.findAll();
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
        res.status(500).json({msg: "terjadi kesalahan saat mengambil data proyek"});
    }
};

// ambil proyek berdasarkan id
export const  getProyekById = async(req, res) => {
    try{
        const response = await Proyek.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
        res.status(500).json({msg: "Gagal mengambil proyek"});
    }
};


//tambah data
export const createProyek = async(req, res) => {
    try{
        const{judul, deskripsi, tools,url_demo} = req.body;
        const gambar = req.file ? req.file.filename : null;
        
        await Proyek.create({
            gambar, 
            judul, 
            deskripsi, 
            tools: JSON.parse(tools), 
            url_demo,
        });
        res.status(201).json({msg: "Proyek create"});
    }catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Gagal tambah proyek" });
    }
}


//update data
export const updateProyek = async(req, res) => {
    try{
        await Proyek.update(req.body,{
            where:{
                id:req.params.id
            }
        });
        res.status(200).json({msg: "Proyek updated"});
    }catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Gagal update proyek" });
    }
}

//delete data + gambar
export const deleteProyek = async(req, res) => {
    try{
        const proyek = await Proyek.findByPk(req.params.id);
        if(!proyek) {
            return res.status(404).json({msg: "Proyek tidak ditemukan"});
        }

        // Hapus gambar dari public/images
        const gambarPath = path.join(__dirname, '../../public/images', proyek.gambar);
        if (fs.existsSync(gambarPath)) {
            fs.unlinkSync(gambarPath);
        }
        
        await Proyek.destroy({
            where: {
                id:req.params.id
            }
        });
        res.status(200).json({msg: "Proyek dan gambar berhasil dihapus"});
    }catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Gagal menghapus proyek" });
    }
}