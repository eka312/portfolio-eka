import {NavLink, useNavigate} from 'react-router-dom';
import {FaCode} from "react-icons/fa";
import { useState } from 'react';
import DataImage from "../data";



function Sidebar() {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const confirmLogout = () => {
    setShowConfirm(true);
  };

  



  return (
    <>
      {/* bg-gradient-to-b from-gray-950 via-violet-950  to-violet-400 */}
      {/* bg-gray-700 text-white placeholder:text-gray-400 */}
      <div className="h-full fixed left-0 p-3 space-y-2 w-60 bg-gradient-to-b from-gray-800 via-violet-800  to-violet-600
      dark:text-white">
        <div className="flex items-center p-2 space-x-4">
          <img src={DataImage.HeroImage} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
          <div>
            <h2 className="text-lg font-semibold">Silvia Eka W</h2>
            
          </div>
        </div>
        <div className="divide-y dark:divide-gray-300">
          <ul className="py-6 space-y-1 text-sm">
            <li className=" dark:text-white">
              <NavLink rel="noopener noreferrer" to="/dashboard" className={({isActive}) => `flex items-center p-2 space-x-3 rounded-md  transition ${isActive ? "bg-white text-gray-900" : "hover:bg-white/80  hover:text-gray-900" }`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                  <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                </svg>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink rel="noopener noreferrer" to="/proyek" className={({isActive}) => `flex items-center p-2 space-x-3 rounded-md  transition ${isActive ? "bg-white text-gray-900" : "hover:bg-white/80  hover:text-gray-900" }`} >
                <FaCode className='w-5 h-5' />
                <span>Data Proyek</span>
              </NavLink>
            </li>
          </ul>
          <ul className="pt-4 pb-2 space-y-1 text-sm">
            <li onClick={confirmLogout} className="flex items-center p-2 space-x-3 rounded-md hover:bg-white/80 hover:text-gray-900 transition" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current ">
                <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                <rect width="32" height="64" x="256" y="232"></rect>
              </svg>
              <span>Logout</span>
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


