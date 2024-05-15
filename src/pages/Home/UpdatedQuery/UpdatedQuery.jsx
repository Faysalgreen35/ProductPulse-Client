 
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const UpdatedQuery = () => {
    const query = useLoaderData();


    const [formData, setFormData] = useState({
        productname: query.productname,
        productbrand: query.productbrand,
        productimageurl: query.productimageurl,
        querytitle: query.querytitle,
        boycottingreasondetails: query.boycottingreasondetails
    });

    const handleUpdateQuery = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`${import.meta.env.VITE_API_URL}/updateQuery/${query._id}`, formData);
            if (response.data.success) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Craftify updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                }).then(() => {
                    // Redirect or handle success action
                });
            } else {
                Swal.fire({
                    title: "Failed to update!",
                    text: "Failed to update the query.",
                    icon: "error"
                });
            }
        } catch (error) {
            console.error("Error updating query:", error);
            Swal.fire({
                title: "Error!",
                text: "Failed to update the query.",
                icon: "error"
            });
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div>
            <div className="bg-[#F4F3F0] p-20  text-pruple-500   dark:bg-gray-800 dark:text-white    ">
                <Helmet>
                    <title>ProductPulse || Updated Query Page</title>
                </Helmet>
                <h1 className="lg:text-4xl font-extrabold text-center mb-10 ">Updated Query</h1>

                <form onSubmit={handleUpdateQuery} >
                    {/* form row Product Name */}
                    <div className="md:flex mb-8 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span>Product Name</span>
                            </label>
                            <div className="join">
                                <input className="input input-bordered join-item w-full" value={formData.productname} name="productname" type="text" placeholder="Product Name" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-control md:w-1/2 lg:ml-4">
                            <label className="label">
                                <span>Product Brand</span>
                            </label>
                            <div className="join">
                                <input className="input input-bordered join-item w-full" value={formData.productbrand} name="productbrand" type="text" placeholder="Product Brand" onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    {/* form short Query TItle & Boycotting Reason Details row  */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span> Query Title </span>
                            </label>
                            <div className="join">
                                <input className="input input-bordered join-item w-full" value={formData.querytitle} name="querytitle" type="text" placeholder="Query Title" onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-control md:w-1/2 lg:ml-4">
                            <label className="label">
                                <span>Boycotting Reason Details</span>
                            </label>
                            <div className="join">
                                <input className="input input-bordered join-item w-full " value={formData.boycottingreasondetails} name="boycottingreasondetails" type="text" placeholder="Boycotting Reason Details" onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    {/* form photo url row  */}
                    <div className="md:flex mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span>Product Image-URL</span>
                            </label>
                            <div className="join">
                                <input className="input input-bordered join-item w-full" value={formData.productimageurl} name="productimageurl" type="text" placeholder="Photo Url" onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <input className="btn btn-block btn-secondary font-bold text-3xl" type="submit" value="Update Your Query" />
                </form>
            </div>
        </div>
    );
};

export default UpdatedQuery;




  
// import { Helmet } from "react-helmet-async";
// import { useLoaderData } from "react-router-dom";
// // import { AuthContext } from "../../../providers/AuthProvider";
// // import { useContext } from "react";
// import Swal from "sweetalert2";

 

// const UpdatedQuery = () => {

//     const query = useLoaderData();
//     // const { user } = useContext(AuthContext);



//     const { _id,productname, productbrand, productimageurl, querytitle,boycottingreasondetails } = query;

//     const handleUpdateQuery = event => {
//         event.preventDefault();
//         const form = event.target;
//         const productname = form.productname.value;
//         const productbrand = form.productbrand.value;
//         const boycottingreasondetails = form.boycottingreasondetails.value;
       
//         const productimageurl = form.productimageurl.value;
        

//         const updatedQuery = { productname, productbrand, productimageurl, querytitle,boycottingreasondetails};
//         console.log(updatedQuery);

//         // send data to the server 
//         fetch(`${import.meta.env.VITE_API_URL}/updateQuery/${_id}`, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },

//             body: JSON.stringify(updatedQuery)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 if (data.modifiedCount > 0) {
//                     Swal.fire({
//                         title: 'Success!',
//                         text: 'craftify updated successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Cool'
//                     })
//                 }
//             })


//     }

//     return (
//         <div>
//             <div className="bg-[#F4F3F0] p-20  text-pruple-500   dark:bg-gray-800 dark:text-white    ">
//                 <Helmet>
//                     <title>ProductPulse || Updated Query Page</title>
//                 </Helmet>
//                 <h1 className="lg:text-4xl font-extrabold text-center mb-10 ">Updated Query</h1>

//                 <form onSubmit={handleUpdateQuery} >
//                     {/* form row Product Name */}
//                     <div className="md:flex mb-8 ">
//                         <div className="form-control md:w-1/2">
//                             <label className="label">
//                                 <span>Product Name</span>
//                             </label>
//                             <div className="join">


//                                 <input className="input input-bordered join-item w-full" defaultValue={productname} name="productname" type="text" placeholder="productname" />

//                             </div>
//                         </div>
//                         <div className="form-control md:w-1/2 lg:ml-4">
//                             <label className="label">
//                                 <span>Product Brand</span>
//                             </label>
//                             <div className="join">


//                                 <input className="input input-bordered join-item w-full" defaultValue={productbrand} name="productbrand" type="text" placeholder="productbrand" />

//                             </div>
//                         </div>
//                     </div>
//                     {/* form short Query TItle & Boycotting Reason Details row  */}
//                     <div className="md:flex mb-8">
//                         <div className="form-control md:w-1/2">
//                             <label className="label">
//                                 <span> Query TItle </span>
//                             </label>
//                             <div className="join">


//                                 <input className="input input-bordered join-item w-full" defaultValue={querytitle} name="querytitle" type="text" placeholder="querytitle" />

//                             </div>
//                         </div>
//                         <div className="form-control md:w-1/2 lg:ml-4">
//                             <label className="label">
//                                 <span>Boycotting Reason Details</span>
//                             </label>
//                             <div className="join">


//                                 <input className="input input-bordered join-item w-full " defaultValue={boycottingreasondetails} name="boycottingreasondetails" type="text" placeholder="boycottingreasondetails" />

//                             </div>
//                         </div>
//                     </div>


//                     {/* form photo url row  */}
//                     <div className="md:flex mb-8">
//                         <div className="form-control w-full">
//                             <label className="label">
//                                 <span>Product Image-URL</span>
//                             </label>

//                             <div className="join">
//                                 <input className="input input-bordered join-item w-full" defaultValue={productimageurl} name="productimageurl" type="text" placeholder="Photo Url" />

//                             </div>
//                         </div>

//                     </div>
//                     <input className="btn btn-block btn-secondary font-bold text-3xl" type="submit" value="Update Your Query" />
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UpdatedQuery;