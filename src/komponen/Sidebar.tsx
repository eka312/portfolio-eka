import {NavLink, useNavigate} from 'react-router-dom';
import {FaCode, FaRegArrowAltCircleLeft} from "react-icons/fa";
import { useState } from 'react';
import DataImage from "../data";
import axios from "axios";


function Sidebar() {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   navigate("/");
  // };

  const handleLogout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout", { withCredentials: true });
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.error("Logout gagal:", error);
    }
  };

  const confirmLogout = () => {
    setShowConfirm(true);
  };

  



  return (
    <>
      <div className="h-full fixed left-0 p-2 sm:p-3  space-y-2 bg-gradient-to-b from-gray-800 via-violet-800 to-violet-600
      dark:text-white w-[50px] sm:w-60 transition-all duration-300">
        <div className="flex items-center sm:p-2 sm:space-x-4">
          <img src={DataImage.HeroImage} alt="" className="w-8 h-8 sm:w-12 sm:h-12 rounded-full  " />
          <div className="sm:inline hidden">
            <h2 className="text-lg font-semibold">Silvia Eka W</h2>
          </div>
        </div>
        <div className="divide-y dark:divide-gray-300">
          <ul className="py-6 space-y-1 text-sm">
            <li className=" dark:text-white">
              <NavLink rel="noopener noreferrer" to="/dashboard" className={({isActive}) => `flex items-center justify-center sm:justify-start sm:p-2 p-1 sm:space-x-3 space-x-0 rounded-md  transition ${isActive ? "bg-white text-gray-900" : "hover:bg-white/80  hover:text-gray-900" }`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                  <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                </svg>
                <span className="sm:inline hidden">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink rel="noopener noreferrer" to="/proyek" className={({isActive}) => `flex items-center justify-center sm:justify-start sm:p-2 p-1 sm:space-x-3 space-x-0 rounded-md  transition ${isActive ? "bg-white text-gray-900" : "hover:bg-white/80  hover:text-gray-900" }`} >
                <FaCode className='w-5 h-5' />
                <span className="sm:inline hidden">Data Proyek</span>
              </NavLink>
            </li>
          </ul>
          <ul className="pt-4 pb-2 space-y-1 text-sm">
            <li onClick={confirmLogout} className="flex items-center justify-center sm:justify-start sm:p-2 p-1 sm:space-x-3 space-x-0 rounded-md hover:bg-white/80 hover:text-gray-900 transition" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current ">
                <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                <rect width="32" height="64" x="256" y="232"></rect>
              </svg>
              <span className="sm:inline hidden">Logout</span>
            </li>
            <li>
              <NavLink rel="noopener noreferrer" to="/" className="flex items-center justify-center sm:justify-start sm:p-2 p-1 sm:space-x-3 space-x-0 rounded-md hover:bg-white/80 hover:text-gray-900 transition" >
                <FaRegArrowAltCircleLeft className='w-5 h-5'/>
                <span className="sm:inline hidden">Kembali</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* modal konfir log out */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Background hitam blur */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>

          {/* Box Konfirmasi */}
          <div className="relative bg-gray-800 text-white rounded-xl p-6 shadow-2xl max-w-sm w-full animate__animated animate__zoomIn">
            <p className="text-lg font-semibold mb-4 text-center">Apa kamu yakin ingin logout?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleLogout}
                className="px-8 py-2 bg-violet-700 hover:bg-violet-600 text-white font-semibold rounded-lg transition"
              >
                Ya
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="px-8 py-2 bg-gray-600 hover:bg-gray-500 text-white font-semibold rounded-lg transition"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}



    </>
  )
}

export default Sidebar


