import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
// import axios from "axios";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const MyRecommendations = () => {
    const { user } = useContext(AuthContext);
    const useaxiosSecure = useAxiosSecure()

    const [recommendation, setRecommendation] = useState([]);


    // const [query, setQuery] = useState([]);

    useEffect(() => {
        const fetchQueries = async () => {
            try {
                if (user) {
                    const response = await axios.get(`${import.meta.env.VITE_API_URL}/recommendation/email/${user?.email}`, { withCredentials: true });
                    setRecommendation(response.data);

                }
            } catch (error) {
                console.error('Error fetching queries:', error);
            }
        };

        fetchQueries();
    }, [user]);

    console.log(recommendation)
    console.log(user.email)


    // useEffect(() => {
    //     getData()
    //   }, [user])


    // const getData = async () => {
    //     try {
    //       const response = await axiosSecure(`/recommendation/email/${user?.email}`);
    //       if (response && response.data) {
    //         setRecommendation(response.data);
    //       } else {
    //         console.error('Error retrieving data:', response);
    //         // Handle the error appropriately, e.g., show an error message to the user
    //       }
    //     } catch (error) {
    //       console.error('Error retrieving data:', error);
    //       // Handle the error appropriately, e.g., show an error message to the user
    //     }
    //   };




    const handleDelete = async (recommendationId) => {
        // Show confirmation dialog
        const confirmation = await Swal.fire({
            title: 'Are you sure?',
            text: 'You are about to delete this query. This action cannot be undone.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (confirmation.isConfirmed) {
            try {
                const response = await useaxiosSecure.delete(`/recommendation/${recommendationId}`);
                if (response.data.success) {
                    setRecommendation(recommendation.filter((quer) => quer._id !== recommendationId)); // Update state here
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your query has been deleted.",
                        icon: "success"
                    }).then(() => {
                        // Reload the page after successful deletion
                        window.location.reload();
                    });
                } else {
                    Swal.fire({
                        title: "Failed to delete!",
                        text: "Failed to delete the query.",
                        icon: "error"
                    });
                }
            } catch (error) {
                console.error("Error deleting query:", error);
                Swal.fire({
                    title: "Error!",
                    text: "Failed to delete the query.",
                    icon: "error"
                });
            }
        }
    };


    return (
        <div>
            <Helmet>
                <title>ProductPulse |MyRecommendations</title>
            </Helmet>
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
                                    <thead className="bg-gray-50  dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm  font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                <div className="flex items-center gap-x-3">
                                                    <input type="checkbox" className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700" />
                                                    <span>Name&Email</span>
                                                </div>
                                            </th>

                                            <th scope="col" className="   px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 hidden sm:table-cell">
                                                <button className="flex items-center gap-x-2   ">
                                                    <span>Product Name</span>


                                                </button>
                                            </th>



                                            <th scope="col" className="  px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 hidden sm:table-cell">Recommendation Reason</th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Status</th>

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
                                                                <h2 className="font-medium text-gray-800 dark:text-white ">{recomend.QueryUserName}</h2>
                                                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{recomend.QueryEmail}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap hidden sm:table-cell">
                                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                                        <h2 className="text-sm font-normal text-emerald-500">{recomend.productname}</h2>
                                                    </div>
                                                </td>

                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap hidden sm:table-cell">{recomend.recommendationReason}</td>
                                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                    <div className="flex items-center gap-x-2">
                                                        <Link>
                                                            <button
                                                                onClick={() => handleDelete(recomend._id)}
                                                                className="bg-red-500 text-white px-4 py-4 text-4xl rounded hover:bg-green-600"><MdDelete /></button>
                                                        </Link>
                                                    </div>
                                                </td>

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

export default MyRecommendations;











