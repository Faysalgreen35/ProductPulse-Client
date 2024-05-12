import { useContext, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";



const MyqueryCard = ({ query }) => {

    const { user } = useContext(AuthContext);


    const [queries, setQueries] = useState([query]);
    const {_id, productname, productbrand, productimageurl, posted_date, querytitle, boycottingreasondetails, name, image } = query;

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/query/${user?._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = queries.filter(cof => cof._id !== _id);
                            setQueries(remaining);
                        }
                    });
            }
        });
    }

    // const handleDeleteRecommendation = async recommendationId => {
    //     try {
    //         await axios.delete(
    //             `${import.meta.env.VITE_API_URL}/recommendation/${recommendationId}`
    //         );

    //         // Update recommendation count locally if the request is successful
    //         setQuery({
    //             ...query,
    //             recommendationcount: query.recommendationcount - 1
    //         });

    //         console.log('Recommendation deleted successfully');
    //     } catch (err) {
    //         console.log(err);
    //         console.log('Error deleting recommendation:', err.message);
    //     }
    // };

    return (
        <div>
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover w-full h-64" src={productimageurl} alt="Article" />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link">{querytitle}</a>
                    </div>



                    {/* <!-- Additional Information --> */}
                    <div className="mt-4">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Product Name: {productname}</p>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Brand Name:{productbrand}</p>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Alternation Reason:{boycottingreasondetails}</p>
                        {/* <p className="text-sm font-medium text-gray-600 dark:text-gray-400"></p> */}
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img className="object-cover h-10 rounded-full" src={image} alt="Avatar" />
                                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" role="link">{name}</a>
                                </div>
                                <p className="mx-1 text-xs text-gray-600 dark:text-gray-300">Date Posted: {posted_date}</p>
                            </div>

                            <div className="flex justify-between mt-12">


                                <Link to={`/queries/${_id}`}>
                                <button className="bg-blue-500 text-white px-4 py-4 text-xl rounded hover:bg-blue-600">Veiw Details</button>
                        </Link>
                        <Link to={`queryUpdate/${_id}`}>
                            <button className="bg-green-500 text-white px-4 py-4 text-4xl rounded hover:bg-blue-600"><CiEdit /></button>
                        </Link>
                        <Link>
                            <button
                                onClick={() => handleDelete(_id)}
                                className="bg-red-500 text-white px-4 py-4 text-4xl rounded hover:bg-green-600"><MdDelete /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
            </div >
        </div >
    );
};

export default MyqueryCard;