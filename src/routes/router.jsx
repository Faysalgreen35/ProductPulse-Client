import { createBrowserRouter } from "react-router-dom";
 
import Root from "../layouts/Root";
// import ErrorPage from "../layouts/ErrorPage"; 
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login"; 
import ErrorPage from "../layouts/ErrorPage";
import Register from "../pages/Home/Register/Register";
import Queries from "../components/Queries";
import QueryDetails from "../components/QueryDetails";
import MyQueries from "../pages/Home/MyQueries/MyQueries";
import AddQueries from "../pages/Home/MyQueries/AddQueries";
import PrivateRoutes from "./PrivateRoutes";



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
                path:'/my-queries',
                element:<PrivateRoutes><MyQueries></MyQueries></PrivateRoutes>
            },
            {
                path:'/add-queries',
                element:<PrivateRoutes> <AddQueries></AddQueries></PrivateRoutes>
            },

            {
                path:'/queries',
                element:<Queries></Queries>,
                loader:() => fetch(`${import.meta.env.VITE_API_URL}/query`)

            },
           
            {
                path: '/queries/:id',
                element: <PrivateRoutes><QueryDetails /></PrivateRoutes>,
                loader: ({ params }) =>
                  fetch(`${import.meta.env.VITE_API_URL}/query/${params.id}`),
              },


        ]
    }
])

export default router;
