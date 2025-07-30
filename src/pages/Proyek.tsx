import Sidebar from "../komponen/Sidebar";
import { FaEdit, FaFolderOpen, FaPlus, FaTrash } from "react-icons/fa";
import { useState,useEffect } from "react";
import Tambah from "../komponen/Tambah";
import Edit from "../komponen/Edit";
import axios from "axios";
import { StatusProyek } from "../types/statusProyek";

type ProyekType = {
  id: number;
  gambar: string;
  judul: string;
  deskripsi: string;
  tools: string[]; 
  status: StatusProyek;
  url_demo: string;
};



function Proyek() {
  const [showForm, setShowForm] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showHapus, setShowHapus] = useState(false);
  const [proyek, setProyek] = useState<ProyekType[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedProyek, setSelectedProyek] = useState<ProyekType | null>(null);
  
 



  const getProyek = async () => {
    try {
      const response = await axios.get<ProyekType[]>('http://localhost:5000/proyeks');
      setProyek(response.data);
    } catch (error) {
      console.error("gagal mengambil data:", error);
    }
  };
  
  useEffect(() => {
    getProyek();
  }, []);
  

  // fungsi untuk menghapus proyek
  const handleDelete = async () => {
    if (selectedId === null) return; // pastikan ada ID yang dipilih

    try {
      await axios.delete(`http://localhost:5000/proyeks/${selectedId}`);
      setShowHapus(false); // menutup modal konfirmasi
      setSelectedId(null); // reset ID yang dipilih
      getProyek(); // memuat ulang data setelah penghapusan
     
    } catch (error) {
      console.error("Gagal menghapus proyek:", error);
    }
  };
  

  return (
    <>
    <div className=" flex ">
      <div className=" w-20 sm:w-72">
        <Sidebar/>
      </div>
      

      <div  className="overflow-y-auto overflow-hidden  flex-1 relative">
        <div  className=" sm:mt-3.5 mr-7 sm:mr-14 flex-1  " >
          <div className="flex justify-between items-center  sm:mb-5 p-2.5 w-full">
            <h3 className="flex gap-2 sm:gap-3 " >
              <FaFolderOpen className="text-3xl sm:text-5xl " /> 
              <span className="text-[14px]  sm:text-4xl">Data Projek</span>
              
            </h3>
            <button onClick={() => setShowForm(true)}   className="flex items-center sm:gap-2 gap-1 bg-violet-600 hover:bg-violet-500 text-white 
              font-bold  px-2 text-xs sm:px-4 py-2 sm:text-sm rounded transition" data-modal-target="crud-modal" data-modal-toggle="crud-modal"  > 
              <FaPlus/> Tambah 
            </button>
          </div>

          <div className="border-2 my-5 sm:mt-8 border-gray-700 rounded-lg  relative overflow-x-auto flex-1 ">
            <table className="w-full table-auto bg-gray-800 dark:text-white  
              text-xs  sm:text-sm text-left " >
              <thead className="bg-gray-700 text-left text-xs uppercase">
                <tr>
                  <th scope="col" className="px-2 py-2 text-[11px] sm:px-4 sm:py-3" >No</th>
                  <th scope="col" className="px-2 py-2 text-[11px] sm:px-4 sm:py-3" >Gambar</th>
                  <th scope="col" className="px-2 py-2 text-[11px] sm:px-4 sm:py-3" >Judul</th>
                  <th scope="col" className="px-2 py-2 text-[11px] sm:px-4 sm:py-3" >Deskripsi</th>
                  <th scope="col"  className="px-2 py-2 text-[11px] sm:px-4 sm:py-3" >Tools</th>
                  <th scope="col"  className="px-2 py-2 text-[11px] sm:px-4 sm:py-3" >Status</th>
                  <th scope="col"  className="px-2 py-2 text-[11px] sm:px-4 sm:py-3" >URL Demo</th>
                  <th scope="col"  className="px-2 py-2 text-[11px] sm:px-4 sm:py-3" >Aksi</th>
                </tr>
              </thead>
              <tbody>
                {proyek.map((item, index) => (
                  <tr key={item.id} className="border-t border-gray-600 " >
                    <td className=" px-2 sm:px-4 py-2">{index + 1}</td>
                    <td className=" px-2 sm:px-4 py-2">
                      <img src={item.gambar} alt={item.judul} className="w-auto" />
                    </td>
                    <td className=" px-2 sm:px-4 py-2">{item.judul}</td>
                    <td className=" px-2 sm:px-4 py-2">{item.deskripsi}</td>
                    <td className=" px-2 sm:px-4 py-2">
                      {Array.isArray(item.tools)
                        ? item.tools.join(', ')
                        : (() => {
                          try {
                            const parsedTools = JSON.parse(item.tools);
                            return Array.isArray(parsedTools) ? parsedTools.join(', ') : item.tools;
                          } catch (error) {
                            console.error("Error parsing tools:", error);
                            return item.tools;
                          }
                        })()};
                    </td>
                    <td className=" px-2 sm:px-4 py-2">{item.status}</td>
                    <td className=" px-2 sm:px-4 py-2  text-blue-400 underline cursor-pointer">{item.url_demo}</td>
                    
                    {/* aksi */}
                    <td className=" px-2 sm:px-4 py-2 " >
                      <div className="flex items-center justify-center h-full gap-2">
                        <button  
                          onClick={() => {setSelectedProyek(item); 
                            setShowEdit(true);
                          }} 
                          className="  px-2 py-2 sm:px-3 sm:py-3  bg-yellow-500 hover:bg-yellow-400 rounded" >
                          <FaEdit className="text-xl" />
                        </button>
                        <button 
                          onClick={() => {setSelectedId(item.id);
                          setShowHapus(true);
                          }} 
                          className=" px-2 py-2 sm:px-3 sm:py-3  bg-red-600 hover:bg-red-500 rounded"  >
                          <FaTrash className="text-xl" />
                        </button>
                      </div>
                    </td>
                                            
                  </tr>
                ))}      
                  
                            
              </tbody>
            </table>
          </div>
          
                


      


        </div>
      </div>





    </div>


    {/* modal tambah */}
    {showForm && (
      <Tambah setShowForm={setShowForm} getProyek={getProyek}/>
    )}

        

    {/* modal edit */}
    {showEdit && selectedProyek && (
      <Edit setShowEdit={setShowEdit} getProyek={getProyek} proyekData={selectedProyek} />
    )}
    
    {/* modal hapus */}
    {showHapus && (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {/* Background hitam blur */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>

        {/* Box Konfirmasi */}
        <div className="relative bg-gray-800 text-white rounded-xl p-6 shadow-2xl max-w-sm w-full animate__animated animate__zoomIn">
          <p className="text-lg font-semibold mb-4 text-center">Apa kamu yakin ingin menghapus data ini?</p>
          <div className="flex justify-center gap-4">
            <button onClick={handleDelete} className="px-8 py-2 bg-violet-700 hover:bg-violet-600 text-white font-semibold rounded-lg transition"
            >
              Ya
            </button>
            <button onClick={() => {
                setShowHapus(false);
                setSelectedId(null);
              }} className="px-8 py-2 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-lg transition">
              Batal
            </button>
          </div>
        </div>
      </div>
    )}


    </>
  )
}

export default Proyek