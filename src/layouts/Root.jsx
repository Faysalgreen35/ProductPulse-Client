
import { Outlet } from "react-router-dom";
// import Header from "../shared/Navbar/Header";
// import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Footer from "../components/Footer";
// import Footer from "../shared/Footer";
// import Footer from "../shared/Footer";



const Root = () => {
    return (
        <div className="max-w-7xl mx-auto dark:bg-gray-800 dark:text-white ">
            <Header></Header>

            <div className=' lg:min-h-[calc(100vh-306px)]'>
                <Outlet />
            </div>
             <Footer></Footer>

        </div>
    );
};

export default Root;