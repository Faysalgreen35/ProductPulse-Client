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
import MyRecommendations from "../pages/Home/MyRecommendations/MyRecommendations";
import RecommendationsForMe from "../pages/Home/RecommendationsForMe/RecommendationsForMe";
import UpdatedQuery from "../pages/Home/UpdatedQuery/UpdatedQuery";
import AllRecommendation from "../components/AllRecommendation";
import AdminRoute from "./AdminRoute";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../layouts/Dashboard";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import Contact from "../components/Contact/Contact";



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
                path:'/my-recommendations',
                element:<PrivateRoutes><MyRecommendations></MyRecommendations></PrivateRoutes>
            },
            {
                path:'/recommendations-forme',
                element:<PrivateRoutes><RecommendationsForMe></RecommendationsForMe></PrivateRoutes>
            },
            {
                path:'/my-queries',
                element:<PrivateRoutes><MyQueries></MyQueries></PrivateRoutes>
            },
            {
                path:'/my-queries/updateQueries/:id',
                element:<PrivateRoutes><UpdatedQuery></UpdatedQuery></PrivateRoutes>,
                loader: ({ params }) =>
                    fetch(`${import.meta.env.VITE_API_URL}/query/${params.id}`)
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
            {
                path: '/recommendation/:id',
                element: <AllRecommendation></AllRecommendation>,
                loader: ({ params }) =>
                  fetch(`${import.meta.env.VITE_API_URL}/recommendation/${params.id}`),
              },



        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children:[
  
          {
  
            path:'userHome',
            element:<UserHome></UserHome>
          },
          {
            path:'my-recommendations',
            element:<PrivateRoutes><MyRecommendations></MyRecommendations></PrivateRoutes>
        },
        {
            path:'recommendations-forme',
            element:<PrivateRoutes><RecommendationsForMe></RecommendationsForMe></PrivateRoutes>
        },
        {
            path:'my-queries',
            element:<PrivateRoutes><MyQueries></MyQueries></PrivateRoutes>
        },
        {
            path:'contact',
            element:<Contact></Contact>
        },
           
          
           
  
          //admin only routes
          {
  
            path:'adminHome',
            element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
          },
           
          {
            path:'add-queries',
            element:<AdminRoute><AddQueries></AddQueries></AdminRoute>
          },
        //   {
        //     path:'manageItems',
        //     element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        //   },
        //   {
        //     path:'updateItem/:id',
        //     // element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        //     // loader:({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        //   },
          {
            path:'users',
            element:<AdminRoute><AllUsers></AllUsers> </AdminRoute> 
          },
          {
            path:'queries',
            element:<Queries></Queries>,
            loader:() => fetch(`${import.meta.env.VITE_API_URL}/query`)

        },
        ]
      }
])

export default router;
