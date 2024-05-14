// import Logo from '../../src/assets/Logo.png'
import Logo2 from '../../src/assets/file.jpg'


import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('wait for usersss',)

    const [darkMode, setDarkMode] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1200) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleThemeToggle = () => {
        setDarkMode(prevMode => !prevMode);
        document.body.classList.toggle('dark', !darkMode);
    };


    const handleSigOut = () => {
        logOut()
            .then()
            .catch()
    }


    

    const navlinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to="/queries">Queries</NavLink></li>

        {
            user && <>
                <li><NavLink to="/recommendations-forme">Recommendations For Me</NavLink></li>
                <li><NavLink to="/my-queries">My Queries</NavLink></li>
                <li><NavLink to="/my-recommendations">My recommendations</NavLink></li>

            </>
        }

    </>

    return (

        <div className={`navbar text-white   text-neon-lime dark:bg-gray-800 dark:text-white  bg-gradient-to-r from-violet-500 to-fuchsia-500 py-1 font-bold font-playfair p-1 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 max-w-7xl mx-auto ' : ''}`}>

            <div className="navbar-start">
                <div className="  dropdown dark:text-white dark:bg-gray-600 ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm text-4xl dropdown-content mt-3 z-[1] p-2 shadow dark:text-white dark:bg-gray-600  bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <div className="flex">
                    <img className="lg:w-32 h-auto" src={Logo2} alt="" />
                    {/* <a className="btn btn-ghost lg:text-4xl font-jacquard  mr-2 lg:mr-0 lg:block"> Craftify Creations</a> */}
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal ml-3  px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end lg:mr-4">

                {
                    user ?
                        <div className="  flex">

                            <div className="  dropdown  dropdown-left  dropdown-hover z-50">
                                <div tabIndex={0} role="button" className="btn btn-ghost  btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="mt-9 z-[1] p-2 shadow menu menu-sm dropdown-content  bg-base-100 rounded-box w-52  ">
                                    <li>

                                    </li>
                                    <li><a className=" text-yellow-500">Name: {user.displayName}</a></li>
                                    <li><a className=" text-yellow-500"> Email: {user.email}</a></li>

                                    <button onClick={handleSigOut} className="btn btn-primary"> Sign Out</button>
                                </ul>

                            </div>

                        </div>

                        :
                        <div className="flex text-sm lg:text-xl gap-2"  >
                            <Link to="login"><button className="btn btn-primary">Login</button></Link>
                            <Link to="register">   <button className="btn btn-primary">Register</button></Link>

                        </div>

                }


            </div>
            <div className=" mr-2 lg:mr-1 ml-2 lg:ml-2 border-4 rounded-full p-2  border-[#916211] ">
                <label className="swap swap-rotate">

                    {/* this hidden checkbox controls the state */}
                    <input id="theme-toggle"
                        type="checkbox"
                        className="hidden toggle theme-controller  bg-amber-300 border-sky-400"
                        checked={darkMode}
                        onChange={handleThemeToggle} />

                    {/* sun icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                    {/* moon icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                </label>
            </div>
        </div>
    );
};

export default Header;
