import { createBrowserRouter } from "react-router-dom";
 
import Root from "../layouts/Root";
// import ErrorPage from "../layouts/ErrorPage"; 
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login"; 
import ErrorPage from "../layouts/ErrorPage";
import Register from "../pages/Home/Register/Register";
import Queries from "../components/Queries";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader:() => fetch(`${import.meta.env.VITE_API_URL}/query`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path:'/my-recommendations'
            },

            {
                path:'/queries',
                element:<Queries></Queries>,
                loader:() => fetch(`${import.meta.env.VITE_API_URL}/query`)

            },


        ]
    }
])

export default router;
