import {  Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage.tsx';
import Login from "./pages/Login.tsx";
import { PreLoader } from './komponen/PreLoader.tsx';
import Dashboard from "./pages/Dashboard.tsx";
import Proyek from './pages/Proyek.tsx';
import HalDetail from "./pages/HalDetail.tsx";


function App() {
  const showPreloader = location.pathname === "/";


  return (
    <>
      {showPreloader && <PreLoader/>}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/proyek" element={<Proyek/>} />
        <Route path="/detail/:slug" element={<HalDetail />} />
      </Routes>
    </>
  )
}

export default App
