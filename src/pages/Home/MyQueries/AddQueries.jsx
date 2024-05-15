import axios from "axios";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";



const AddQueries = () => {

    const { user } = useContext(AuthContext);

    const handleFormSubmission = async e => {
        e.preventDefault()

        const form = e.target

        const querytitle = form.querytitle.value
        const productname = form.productname.value
        const productbrand = form.productbrand.value
        const productimageurl = form.productimageurl.value
        const boycottingreasondetails = form.boycottingreasondetails.value
        const useremail = user?.email
        const name = user?.displayName
        const image = user?.photoURL
        const recommendationcount = 0
        const posted_date = new Date().toISOString().split('T')[0];
        //    const  posted_date = new Date().toISOString();




        const recommendationData = {

            productname,
            productbrand,
            productimageurl,
            querytitle,
            boycottingreasondetails,
            useremail,
            name,
            image,
            recommendationcount,
            posted_date
        }
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_API_URL}/query`,
                recommendationData
            )
            console.log(data)

             // Show SweetAlert success message
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Your queries  has been added successfully.',
            showConfirmButton: false,
            timer: 2000 // Hide after 2 seconds
        });
        
        // Optional: Reset the form after submission
        form.reset();
        } catch (err) {
            console.log(err)
            console.log('Hi, i am error', err.message)
        }
    }




    return (
        <div>
            <div className="bg-[#F4F3F0] p-20  text-pruple-500   dark:bg-gray-800 dark:text-white    ">
                <Helmet>
                <title>ProductPulse || Add Query Page</title>
                </Helmet>
                <h1 className="lg:text-4xl font-extrabold text-center mb-10 ">Add Query</h1>

                <form onSubmit={handleFormSubmission} >
                    {/* form row Product Name */}
                    <div className="md:flex mb-8 ">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span>Product Name</span>
                            </label>
                            <div className="join">


                                <input className="input input-bordered join-item w-full" name="productname" type="text" placeholder="productname" />

                            </div>
                        </div>
                        <div className="form-control md:w-1/2 lg:ml-4">
                            <label className="label">
                                <span>Product Brand</span>
                            </label>
                            <div className="join">


                                <input className="input input-bordered join-item w-full" name="productbrand" type="text" placeholder="productbrand" />

                            </div>
                        </div>
                    </div>
                    {/* form short Query TItle & Boycotting Reason Details row  */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span> Query TItle </span>
                            </label>
                            <div className="join">


                                <input className="input input-bordered join-item w-full" name="querytitle" type="text" placeholder="querytitle" />

                            </div>
                        </div>
                        <div className="form-control md:w-1/2 lg:ml-4">
                            <label className="label">
                                <span>Boycotting Reason Details</span>
                            </label>
                            <div className="join">


                                <input className="input input-bordered join-item w-full " name="boycottingreasondetails" type="text" placeholder="boycottingreasondetails" />

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
                                <input className="input input-bordered join-item w-full" name="productimageurl" type="text" placeholder="Photo Url" />

                            </div>
                        </div>

                    </div>
                    <input className="btn btn-block btn-secondary font-bold text-3xl" type="submit" value="Add Query" />
                </form>
            </div>
        </div>
    );
};

export default AddQueries;