import Sidebar from "../komponen/Sidebar";
import {useEffect, useState} from "react";
import axios from "axios";

function Dashboard() {
  const [totalProyek, setTotalProyek] = useState(0);
  const [tugasAktif, setTugasAktif] = useState(0);
  const [tugasSelesai, setTugasSelesai] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/proyeks",{
          withCredentials: true
        });

        const data = res.data as {status: string}[];
        setTotalProyek(data.length);
        const aktif = data.filter((item) => item.status === "aktif").length;
        const selesai = data.filter((item) => item.status === "selesai").length;
        setTugasAktif(aktif);
        setTugasSelesai(selesai);
      }catch (error) {
        console.error("Gagal mengambil data dashboard", error);
      }
    }

    fetchData();
  }, []);


  return (
    <>
      <div className="flex ">
        <div className="w-72">
          <Sidebar/>
        </div>
      
        <div className=" pt-5  relative"  >
          <header>
            <h3 className="font-bold text-2xl " >Selamat Datang, Pengguna!</h3>
            <p className="text-gray-400 " >Kelola dan pantau semua projek & tugasmu di sini</p>
          </header>

          <div className="grid mt-8 grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            <div className="bg-gray-700  p-5 flex-1 rounded-2xl shadow-lg relative  min-h-40 w-80 ">
              <h4 className="absolute top-4 left-5  font-bold text-xl  ">Total Projek</h4>
              <p className="absolute bottom-3 right-5 font-black text-6xl ">{totalProyek}</p>
            </div>
            <div className="bg-gray-700 p-5 flex-1 rounded-2xl shadow-lg relative min-h-40 w-80 ">
              <h4 className="absolute top-4 left-5  font-bold text-xl  ">Tugas Aktif</h4>
              <p className="absolute bottom-3 right-5 font-black text-6xl ">{tugasAktif}</p>
            </div>
            <div className="bg-gray-700 p-5 flex-1 rounded-2xl shadow-lg relative min-h-40 w-80 ">
              <h4 className="absolute top-4 left-5  font-bold text-xl  ">Selesai</h4>
              <p className="absolute bottom-3 right-5 font-black text-6xl ">{tugasSelesai}</p>
            </div>
          </div>
          




        </div>
      </div>
    </>
      
  )
}

export default Dashboard