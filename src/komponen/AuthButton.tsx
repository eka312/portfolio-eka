import {Link} from 'react-router-dom';

const AuthButton = () => {
    const token = localStorage.getItem('token');
    const isLoggedIn = !!token;

    return (
        <div>
            {isLoggedIn ? (
                <Link to="/dashboard" className="text-white bg-violet-700 hover:bg-violet-600 
                    py-2 px-4 rounded-lg transition">
                    Dashboard
                </Link>
            ) : (
                <Link to="/login" className="text-white bg-violet-700 hover:bg-violet-600 
                    py-2 px-4 rounded-lg transition">
                    Login
                </Link>
            )}
        </div>
    )
}

export default AuthButton;