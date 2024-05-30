 

import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
// import useAuth from "./useAuth";
// import useAuth from './useAuth';

 
 const axiosSecureAdmin = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})
const useAxiosSecureAdmin = () => {

    const navigate = useNavigate();
    const {logOut} = useAuth();

    axiosSecureAdmin.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;

    },
        function(error){
            return Promise.reject(error);
        });

        // interceptts 401 and 403 status
        axiosSecureAdmin.interceptors.response.use(function(response){
            return response;

        },
           async (error)=>{
                const status = error.response.status;
                // console.log('status error in the interceptor', status);
                //for 401 or 403  logout the user and move the
                if(status === 401 || status === 403){
                    
                    await logOut();
                    navigate('/login')
                }
                return Promise.reject(error)
            }
    )

return  axiosSecureAdmin;
     
};

export default useAxiosSecureAdmin;