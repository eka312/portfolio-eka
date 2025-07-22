import { useState } from "react";
import {FiMail,FiLock, FiEye, FiEyeOff} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import axios from "axios";


interface LoginResponse {
    token: string;
    msg: string;
}

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [errorMsg, setErrorMsg] = useState<{username?: string; password?: string }>({});
    const navigate = useNavigate();
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const errors: typeof errorMsg = {};

        if (!username.trim()) {
            errors.username = "Email tidak boleh kosong.";
        }

        if (password.length < 8) {
            errors.password = "Password minimal 8 karakter.";
        }

        setErrorMsg(errors);

        if (Object.keys(errors).length > 0) return;

        try {
            const res = await axios.post<LoginResponse>("http://localhost:5000/users", {
                email: username,
                password,
            });

            const token = res.data.token;
            localStorage.setItem("token", token);
            navigate("/dashboard");
        } catch (error){
        
            console.error("Login gagal  terjadi error:", error);
        }

        // Simulasi login dan set token di localStorage
        // const dummyToken = "dummy_token_123456"; // Token dummy
        // localStorage.setItem("token", dummyToken); // Simpan ke localStorage
        // navigate("/dashboard"); // Arahkan ke dashboard
    };

    return(
        <div className="min-h-screen bg-gray-900  flex items-center justify-center px-4 ">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-2xl w-full max-w-md shadow-lg anime__animated animate__fadeInDown">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">
                    Welcome Back
                </h2>
                <label htmlFor="username"  className="text-white font-semibold mb-1 block">Email</label>
                <div className="relative mb-6">
                    <input 
                        id="username"
                        type="text"
                        placeholder="Masukkan Email " 
                        autoComplete="email"
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        className={`p-4 pl-12 w-full rounded bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none
                            ${errorMsg.username ? "border border-red-500" : ""}`}
                    />
                    <FiMail className="absolute top-4 left-4 text-gray-400 text-xl" />
                </div>

                <label htmlFor="password"  className="text-white font-semibold mb-1 block">Password</label>
                <div className="relative mb-12">
                    <input 
                        id="password"
                        type={showPass ? "text" : "password"}
                        placeholder="Minimal 8 karakter" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className={`p-4 pl-12 pr-10 w-full rounded bg-gray-700 text-white placeholder:text-gray-400 focus:outline-none " 
                            ${errorMsg.password ? "border border-red-500" : "" }`}
                    />
                    <FiLock className="absolute top-4 left-4 text-gray-400 text-xl" />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl" >
                        {showPass ? <FiEyeOff/> : <FiEye/>}
                    </button>
                </div>
                {errorMsg.password && (
                    <p className="text-sm text-red-500 mb-4 animate__animated animate__fadeInDown">
                        {errorMsg.password}
                    </p>
                )}
                <button type="submit" className=" w-full bg-violet-700 hover:bg-violet-600 py-4 text-white rounded transition ">Masuk</button>
            </form>

        </div>
    )

}

export default Login;