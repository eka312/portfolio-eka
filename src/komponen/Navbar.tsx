import { useState, useEffect } from "react"
import AuthButton from "./AuthButton";
import { Link } from "react-router-dom";




const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);

            }else {
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])

    return (
        
        <div className="navbar py-7  flex items-center justify-between">
            <div className="logo">
                <h1 className="text-3xl font-bold bg-white text-black 
                p-1 md:bg-transparent md:text-white ">
                    Portfolio
                </h1>
            </div>
            <ul className={`menu flex items-center md:gap-10 gap-4 md:static fixed 
            left-1/2 -translate-x-1/2  md:-translate-x-0 md:opacity-100 
            bg-white/30 backdrop-blur-md p-4 rounded-br-2xl  rounded-bl-2xl
            md:bg-transparent transition-all md:transition-none z-40
            ${active ? "top-0 opacity-100" : "-top-10 opacity-0"} `}>
                <li>
                    <Link to="/#hero" className="sm:text-lg text-base font-medium" >
                        Beranda
                    </Link>
                </li>
                <li>
                    <Link to="/#tentang" className="sm:text-lg text-base font-medium">
                        Tentang
                    </Link>
                </li>
                <li>
                    <Link to="/#proyek" className="sm:text-lg text-base font-medium" >
                        Proyek
                    </Link>
                </li>
                <li>
                    <Link to="/#kontak" className="sm:text-lg text-base font-medium" >
                        Kontak
                    </Link>
                </li>
            </ul>

            <div>
                <AuthButton/>
            </div>

        </div>
    )
}

export default Navbar