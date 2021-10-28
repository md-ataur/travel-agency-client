import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.jpg';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
    const { user, logout } = useAuth();

    return (
        <div className="w-full lg:w-11/12 xl:w-10/12 m-auto py-4 px-4 md:flex justify-between items-center">
            <div className="m-auto w-60 md:m-0">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="nav-menu my-2 md:my-0">
                <ul className="text-center md:text-left">
                    <li className="hover:text-yellow-600 font-medium text-gray-700 mr-4 mb-2 md:mb-0 md:mr-8"><Link to="/">HOME</Link></li>
                    <li className="hover:text-yellow-600 font-medium text-gray-700 mr-4 mb-2 md:mb-0 md:mr-8"><Link to="/places">PLACES</Link></li>
                    <li className="hover:text-yellow-600 font-medium text-gray-700 mr-4 mb-2 md:mb-0 md:mr-10"><Link to="#">BLOG</Link></li>
                    <li className="bg-yellow-500 hover:bg-gray-600 text-white rounded py-2 px-6 mr-2">
                        {user?.email ?
                            <button onClick={logout}>LOGOUT</button>
                            :
                            <Link to="/login">LOGIN</Link>
                        }
                    </li>
                </ul>
            </div >
        </div >
    );
};

export default Header;