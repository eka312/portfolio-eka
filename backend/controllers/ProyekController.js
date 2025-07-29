import Proyek from "../models/ProyekModel.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const generateSlug = (text) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '') // hilangkan karakter aneh
      .replace(/\s+/g, '-')     // ganti spasi jadi dash
      .replace(/-+/g, '-');     // hilangkan dash ganda
};

//ambil semua proyek
export const getProyek = async(req, res) => {
    try{
        const response = await Proyek.findAll();
        const proyekWithFullImagePath = response.map((proyek) => {
            const data = proyek.toJSON(); // agar getter (seperti tools) ikut diproses
            return {
                ...data,
                gambar: data.gambar ? `http://localhost:5000/images/${data.gambar}` : null
            };
        });

        res.status(200).json(proyekWithFullImagePath);
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
        const{judul, deskripsi, tools,status,url_demo} = req.body;
        const gambar = req.file ? req.file.filename : null;
        const slug = generateSlug(judul);
        
        await Proyek.create({
            gambar, 
            judul, 
            slug,
            deskripsi, 
            tools: JSON.parse(tools),
            url_demo,
            status,
        });
        res.status(201).json({msg: "Proyek create"});
    }catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Gagal tambah proyek" });
    }
}

// ambil berdasarkan slug
export const getProyekBySlug = async (req, res) => {
    try {
      const proyek = await Proyek.findOne({
        where: { slug: req.params.slug }
      });
      if (!proyek) return res.status(404).json({ message: "Proyek tidak ditemukan" });
      res.json(proyek);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

  
//update data
export const updateProyek = async(req, res) => {
    try{
        const proyek = await Proyek.findByPk(req.params.id);


        if (!proyek) {
            return res.status(404).json({ msg: "Proyek tidak ditemukan" });
        }

        const {judul, deskripsi, tools,status, url_demo} = req.body;
        const slug = generateSlug(judul);
        let gambar = proyek.gambar; 

        if (req.file) {
            const gambarLamaPath = path.join(__dirname, '../../public/images', proyek.gambar);
            if (fs.existsSync(gambarLamaPath)) {
                fs.unlinkSync(gambarLamaPath);
            }
            gambar = req.file.filename;
        }
        await Proyek.update({
            judul,
            slug,
            deskripsi,
            tools: JSON.parse(tools),
            url_demo,
            gambar,
            status,
        }, {
            where: {
                id: req.params.id
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