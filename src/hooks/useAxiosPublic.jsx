import axios from "axios";

 
const axiosPublic = axios.create({
    // baseURL:'https://product-pulse-server-mauve.vercel.app'
    baseURL:'https://product-pulse-server-mauve.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
    
};

export default useAxiosPublic; 