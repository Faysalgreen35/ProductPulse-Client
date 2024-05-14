import axios from "axios";
import {  useContext, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const axiosSecure = axios.create({
    // baseURL: `${import.meta.env.VITE_API_URL}`,
    baseURL: import.meta.env.VITE_API_URL,
    withCredentals: true
})

const useAxiosSecure = () => {

    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error occured in interceptor response', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
               
                console.log('logOut the user')

                logOut()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(error => console.log(error))
            }
        })
    })

    return axiosSecure;


};

export default useAxiosSecure;