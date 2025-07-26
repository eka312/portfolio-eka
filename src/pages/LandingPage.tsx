import DataImage from "../data";
import { listTools} from "../data";
import Footer from "../komponen/Footer";
import Navbar from "../komponen/Navbar";
import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import slugify from "slugify";

interface Proyek {
    id: number;
    judul: string;
    deskripsi: string;
    gambar: string;
    tools: string[];
    url_demo: string;
}



function LandingPage() {
    const [proyekList, setProyekList] = useState<Proyek[]>([]);

    const getProyek = async () => {
    try {
        const res = await axios.get<Proyek[]>("http://localhost:5000/proyeks");
        setProyekList(res.data);
    } catch (error) {
        console.error("Gagal mengambil data proyek:", error);
    }
    };

   
    useEffect(() => {
    getProyek();
    }, []);


    return (
        <>
        <div className="container mx-auto px-4">
            <Navbar/>


            

            {/* Hero */}
            <div id="hero" className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6  grid-cols-1  ">
                <div className="animate__animated animate__fadeInUp animate__delay-3s" >
                    <div className="flex items-center gap-3 mb-6 bg-gray-800 w-fit p-4 rounded-2xl" >
                        <img src={DataImage.HeroImage} alt="hero image" className="w-10 rounded-md"   loading="lazy" />
                        <q>Logika mengarahkan, kreativitas menghidupkan.😁</q>
                    </div>
                    <h1 className="text-5xl/tight font-bold mb-6" >Hi, Saya Silvia Eka Widya</h1>
                    <p className="text-base/loose mb-6 opacity-50 " >
                        Saya mempunyai ketertarikan dalam bidang Programming dan GameDev, terutama pada pembuatan Website dan Game dari Construct. 
                        Saya senang mempelajari teknologi baru dan terus mengembangkan kemampuan saya di bidang front-end web development serta 
                        pengembangan game 2D berbasis event system.
                    </p>
                    <div className="flex items-center sm:gap-4 gap-2" >
                        <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600" >
                            Download CV <i className="ri-download-line ri-lg"></i>
                        </a>
                        <a href="#proyek" className="bg-gray-700 p-4 rounded-2xl hover:bg-gray-600" >
                            Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
                        </a>
                    </div>
                </div>
                <img src={DataImage.HeroImage} alt="hero image" className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s "/>
            </div>
            {/* Hero */}


            {/* Tentang */}
            <div id="tentang" className="tentang mt-32 py-10  " >
                <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-gray-800 rounded-lg " data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
                    <img src={DataImage.HeroImage} alt="image" className="w-12 rounded-md mb-10 sm:hidden " loading="lazy" />
                    <p className="text-base/loose mb-10">
                        Hi, perkenalkan saya Silvia Eka Widya, seorang pengembang web dan game 2D yang memiliki ketertarikan besar pada dunia 
                        teknologi, khususnya dalam bidang front-end development dan pengembangan game menggunakan Construct. 
                        Saya senang bereksperimen dengan ide-ide baru, memecahkan masalah melalui kode, dan terus belajar untuk 
                        meningkatkan keterampilan saya. Bagi saya, membuat sesuatu yang interaktif dan fungsional adalah kepuasan 
                        tersendiri, baik itu sebuah website modern maupun sebuah game sederhana yang menyenangkan.
                    
                    </p>
                    <div className="flex items-center justify-between">
                        <img src={DataImage.HeroImage} alt="image" className="w-12 rounded-md sm:block hidden  " loading="lazy"  />
                        <div className=" flex items-center gap-6 " >
                            <div  >
                                <h1 className=" text-4xl mb-1">
                                    15<span className="text-violet-500 ">+</span>
                                </h1>
                                <p>Proyek Selesai</p>
                            </div>
                            <div  >
                                <h1 className=" text-4xl mb-1">
                                    2<span className="text-violet-500 ">+</span>
                                </h1>
                                <p>Tahun Pengalaman</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tools mt-32">
                    <h1 className="text-4xl/snug font-bold mb-4 " data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
                    <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full  text-base/loose opacity-50 " 
                        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true" >
                        Berikut ini Beberapa Tools yang biasa saya pakai untuk pembuatan Website ataupun Game
                    </p>
                    <div className="tools-box mt-14 grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4"  >
                        {listTools.map((tool) => (
                            <div className=" flex items-center gap-2 p-3 border border-gray-600 rounded-md hover:bg-gray-800 group " key={tool.id} 
                                data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                                <img src={tool.gambar} alt="tools image" className="w-14 bg-gray-800 p-1 group-hover:bg-gray-900"  loading="lazy" />
                                <div>
                                    <h4 className=" font-bold">{tool.nama}</h4>
                                    <p className="opacity-50">{tool.ket}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Tentang */}


            {/* Proyek */}
            <div id="proyek" className="proyek mt-32 py-10">
                <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Proyek</h1>
                <p className="text-base/loose text-center  opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                    Berikut ini beberapa proyek yang telah saya buat
                </p>
                <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4">
                    {proyekList.map((proyek, index) => (
                        <div key={proyek.id} className="p-4 bg-gray-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" 
                            data-aos-delay={index * 100}  >
                            <img src={proyek.gambar} alt="proyek image" loading="lazy"  />
                            <div>
                                <h1 className="text-2xl font-bold my-4">{proyek.judul}</h1>
                                <p className="text-base/loose mb-4">
                                    {/* {proyek.deskripsi}  */}
                                    {proyek.deskripsi.split(" ").slice(0, 15).join(" ")}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {Array.isArray(proyek.tools) ? (
                                        proyek.tools?.map((tool: string, i: number) => (
                                            <p key={i} className="py-1 px-3 border border-gray-500 bg-gray-600 rounded-md font-semibold">{tool}</p>
                                        ))
                                    ):(
                                        <p className="text-red-400 text-sm">Data tools tidak valid</p>
                                    )}
                                   
                                </div>
                                <div className="mt-8 text-center">
                                    <Link to={`/detail/${slugify(proyek.judul, { lower: true, strict: true })}`}   className="bg-violet-700 p-3 rounded-lg block border border-gray-600 hover:bg-violet-600">Lihat Detail</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Proyek */}


                    

            {/* kontak */}
            <div id="kontak" className="kontak mt-32 sm:p-10 p-0 " >
                <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" 
                    data-aos-duration="1000" data-aos-once="true">
                    Kontak
                </h1>
                <p className="text-base/loose text-center  mb-10 opacity-50" data-aos="fade-up" 
                    data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
                    Mari terhubung dengan saya.
                </p>
                <form action="https://formsubmit.co/fue312@gmail.com" target="_blank" method="POST" className="bg-gray-800 p-10 sm:w-fit 
                    w-full  mx-auto rounded-md " autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true" >
                    <div className=" flex flex-col gap-6 " >
                        <div className=" flex flex-col gap-2 ">
                            <label className=" font-semibold ">Nama Lengkap</label>
                            <input className="border border-gray-500 bg-gray-700 text-white placeholder:text-gray-400 p-2 rounded-md" type="text" name="nama" placeholder="Masukan Nama..." required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className=" font-semibold">Email</label>
                            <input className="border border-gray-500 bg-gray-700 text-white placeholder:text-gray-400 p-2 rounded-md" type="email" name="email" placeholder="Masukan Email..." required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="pesan" className=" font-semibold">Pesan</label>
                            <textarea name="pesan" id="pesan" cols={45} rows={7} placeholder="Pesan..." className="border border-gray-500 bg-gray-700 text-white placeholder:text-gray-400 p-2 rounded-md"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-gray-600 hover:bg-violet-600  ">
                                Kirim Pesan
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {/* kontak */} 

            <Footer/>
        </div>
           
        </>
    )
}

export default LandingPage