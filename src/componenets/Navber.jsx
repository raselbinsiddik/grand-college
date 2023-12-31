import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import {  FaBookOpen, FaBookReader } from "react-icons/fa";

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));

    }
    const navPage =
        <>
            <Link to="/"><li><a>Home</a></li></Link>
            <Link to="/colleges"> <li><a>Colleges</a></li></Link>
            <Link to="/mycollege"><li><a>My Colleges</a></li></Link>
            <Link to="/admission"><li><a>Admission</a></li></Link>

            {
                user ? <>
                    <li><button onClick={handleLogout} className="btn btn-ghost">Logout</button></li>
                    <img className='w-10 rounded-full' src={user?.photoURL} alt="" />
                    <Link to="/userinfo"><li><a>{user?.displayName}</a></li></Link>
                </>
                    : <Link to="/login"><li><a>Login</a></li></Link>
            }

        </>
    return (
        <div className="navbar fixed z-10 bg-green-600 bg-opacity-40 max-w-screen-xl mx-auto text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-black">
                        {navPage}
                    </ul>
                </div>
                <Link to="/"><a className="btn btn-ghost normal-case text-2xl font-bold text-yellow-600"><FaBookOpen className="text-white"></FaBookOpen> Grand College</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {navPage}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-2xl"><FaBookReader></FaBookReader></a>
            </div>
        </div>
    );
};

export default Navbar;