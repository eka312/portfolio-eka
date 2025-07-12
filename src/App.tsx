import DataImage from "./data";
import { listTools,listProyek } from "./data";


function App() {

  return (
    <>
      {/* Hero */}
      <div id="hero" className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6  grid-cols-1  ">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl" >
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
            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600" >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="hero image" className="w-[500px] md:ml-auto"/>
      </div>
      {/* Hero */}


      {/* Tentang */}
      <div id="tentang" className="tentang mt-32 py-10 ">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg " >
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
          <h1 className="text-4xl/snug font-bold mb-4 " >Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full  text-base/loose opacity-50 " >Berikut ini Beberapa Tools yang biasa saya pakai untuk pembuatan Website ataupun Game</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div className=" flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group " key={tool.id} >
                <img src={tool.gambar} alt="tools image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"  loading="lazy" />
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
        <h1 className="text-center text-4xl font-bold mb-2">Proyek</h1>
        <p className="text-base/loose text-center  opacity-50">Berikut ini beberapa proyek yang telah saya buat</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" >
              <img src={proyek.gambar} alt="proyek image" loading="lazy"  />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool,index) => (
                    <p key={index} className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold">{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href="#" className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">Lihat Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Proyek */}
      

      {/* kontak */}
      <div className="kontak mt-32 p-10 ">
        <h1 className="text-4xl mb-2 font-bold text-center">Kontak</h1>
        <p className="text-base/loose text-center  mb-10 opacity-50">Mari terhubung dengan saya.</p>
      
      
      
      
      </div>
      {/* kontak */}




    </>
  )
}

export default App
