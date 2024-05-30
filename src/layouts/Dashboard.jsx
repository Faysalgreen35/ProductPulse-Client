import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
// import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaBars } from "react-icons/fa";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaUsers, FaUtensils } from "react-icons/fa";
import useAdmin from "../hooks/useAdmin";
import { FaBars } from "react-icons/fa6";

// import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    // const { user } = useAuth();
    const [isAdmin] = useAdmin();

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <div className={`fixed inset-0 z-40 lg:static lg:flex lg:w-64 ${sidebarOpen ? "flex" : "hidden"}`}>
                <div className="min-h-full w-full bg-orange-400 lg:block">
                    <ul className="menu p-6" >
                        {
                            isAdmin ? <>
                                <li>
                                    <NavLink to='/dashboard/adminHome'>
                                        <FaHome></FaHome>

                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/add-queries'>
                                        <FaUtensils></FaUtensils>

                                        Add Items</NavLink>
                                </li>
                                 
                                <li>
                                    <NavLink to='/dashboard/queries'>
                                        <FaBook />

                                        Manage Queries</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/users'>
                                        <FaUsers />

                                        All Users</NavLink>
                                </li>
                            </>
                                :


                                <>
                                    <li>
                                        <NavLink to="/dashboard/userHome">
                                            <FaHome />
                                            User Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/my-queries">
                                            <FaCalendar />
                                            My Queries
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/recommendations-forme">
                                            <FaAd />
                                            RecommendationsForMe
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/my-recommendations">
                                            <FaList />
                                            My Recommendations
                                        </NavLink>
                                    </li>
                                </>

                        }
                        <div className="divider"></div>
                        <li>
                            <NavLink to='/'>
                                <FaHome></FaHome>

                                Home</NavLink>
                        </li>
                         
                        <li>
                            <NavLink to='contact'>
                                <FaEnvelope />

                                Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="fixed inset-0 bg-black opacity-50 lg:hidden" onClick={toggleSidebar}></div>
            </div>

            <div className="flex-1 ">
                <div className="p-4">
                    <button
                        className="text-2xl lg:hidden"
                        onClick={toggleSidebar}
                    >
                        <FaBars />
                    </button>
                </div>
                <div className="p-8  ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;


// import { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaBars } from "react-icons/fa";
// import useAuth from "../hooks/useAuth";

// const Dashboard = () => {
//     const { user } = useAuth();
//     const [sidebarOpen, setSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setSidebarOpen(!sidebarOpen);
//     };

//     return (
//         <div className="flex h-screen overflow-hidden">
//             <div className={`fixed inset-0 z-40 lg:static lg:flex lg:w-64 ${sidebarOpen ? "flex" : "hidden"}`}>
//                 <div className="min-h-full w-full bg-orange-400 lg:block">
//                     <ul className="menu p-6">
//                         {user ? (
//                             <>
//                                 <li>
//                                     <NavLink to="/dashboard/userHome">
//                                         <FaHome />
//                                         User Home
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/dashboard/my-queries">
//                                         <FaCalendar />
//                                         My Queries
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/dashboard/recommendations-forme">
//                                         <FaAd />
//                                         RecommendationsForMe
//                                     </NavLink>
//                                 </li>
//                                 <li>
//                                     <NavLink to="/dashboard/my-recommendations">
//                                         <FaList />
//                                         My Recommendations
//                                     </NavLink>
//                                 </li>
//                             </>
//                         ) : null}
//                         <div className="divider"></div>
//                         <li>
//                             <NavLink to="/">
//                                 <FaHome />
//                                 Home
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/queries">
//                                 <FaSearch />
//                                 Queries
//                             </NavLink>
//                         </li>
//                         <li>
//                             <NavLink to="/order/contact">
//                                 <FaEnvelope />
//                                 Contact
//                             </NavLink>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="fixed inset-0 bg-black opacity-50 lg:hidden" onClick={toggleSidebar}></div>
//             </div>

//             <div className="flex-1 ">
//                 <div className="p-4">
//                     <button
//                         className="text-2xl lg:hidden"
//                         onClick={toggleSidebar}
//                     >
//                         <FaBars />
//                     </button>
//                 </div>
//                 <div className="p-8  ">
//                     <Outlet />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;

