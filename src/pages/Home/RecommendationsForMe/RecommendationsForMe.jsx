import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
// import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { MdDelete } from "react-icons/md";

 

const RecommendationsForMe = () => {

    const { user } = useContext(AuthContext);
    const  axiosSecure= useAxiosSecure();

    const [recommendation, setRecommendation] = useState([]);

    // useEffect(() => {
    //     const fetchQueries = async () => {
    //         try {
    //             if (user) {
    //                 const response = await axios.get(`${import.meta.env.VITE_API_URL}/recommendations/email/${user?.email}`);
    //                 setRecommendation(response.data);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching queries:', error);
    //         }
    //     };

    //     fetchQueries();
    // }, [user]);


    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                if (user) {
                    const response = await axiosSecure.get(`/recommendations/email/${user?.email}`);
                    setRecommendation(response.data);
                }
            } catch (error) {
                console.error('Error fetching recommendations:', error);
            }
        };
        fetchRecommendations();
    }, [user, axiosSecure]);


    console.log(recommendation)


    return (
        <div>
        <section className="container px-4 mx-auto">
            <div className="flex items-center gap-x-3">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">Recommendation count </h2>

                <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">{recommendation.length}</span>
            </div>

            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <div className="flex items-center gap-x-3">
                                                <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />
                                                <span>Name</span>
                                            </div>
                                        </th>

                                        <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <button className="flex items-center gap-x-2">
                                                <span>Product Name</span>


                                            </button>
                                        </th>



                                        <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 hidden sm:table-cell">Recommendation Reason</th>

                                    
                                        {/* <th scope="col" className="relative py-3.5 px-4">
                                            <span className="sr-only">Edit</span>
                                        </th> */}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    {
                                        recommendation.map(recomend => <tr key={recomend._id}>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center gap-x-3">
                                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />

                                                    <div className="flex items-center gap-x-2">
                                                        <img className="object-cover w-10 h-10 rounded-full" src={recomend.recommendedProductImage} alt="" />
                                                        <div>
                                                            <h2 className="font-medium text-gray-800 dark:text-white ">{recomend.recommenderName}</h2>
                                                            <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{recomend.recommenderEmail}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                                    <h2 className="text-sm font-normal text-emerald-500">{recomend.productname}</h2>
                                                </div>
                                            </td>

                                            <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap hidden sm:table-cell">{recomend.recommendationReason}</td>
                                            
                                            
                                        </tr>)
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    </div>
    );
};

export default RecommendationsForMe;