// import { MdRecommend } from "react-icons/md";
import axios from "axios";
// import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
// import { MdRecommend } from "react-icons/md";
// import { toast } from "react-toastify";



const QueryDetails = () => {

  const { user } = useContext(AuthContext);
  const initialQueryState = useLoaderData();
  const [query, setQuery] = useState(initialQueryState);
  const {_id, productname, productbrand, productimageurl, useremail, posted_date, querytitle, boycottingreasondetails, recommendationcount, name, image } = query;
  
  
  const handleFormSubmission = async e => {
    e.preventDefault();
    const form = e.target;
    const queries_id = _id;
    const recommendationTitle = form.recommendationTitle.value;
    const recommendedProductImage = form.recommendedProductImage.value;
    const recommendationReason = form.recommendationReason.value;
    const recommendedProductName = form.recommendedProductName.value;
    const recommenderEmail = user?.email;
    const recommenderName = user?.displayName;
    const currentTimeStamp = new Date().toISOString();

    const QueryEmail = useremail;
    const QueryUserName = name;

    const recommendationData = {
        queries_id,
        querytitle,
        productname,
        QueryEmail,
        QueryUserName,
        recommendationTitle,
        recommendedProductImage,
        recommendationReason,
        recommendedProductName,
        recommenderEmail,
        recommenderName,
        currentTimeStamp
    };

    try {
        const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/recommendation`,
            recommendationData
        );

        // Update recommendation count locally if the request is successful
        setQuery(prevQuery => ({
            ...prevQuery,
            recommendationcount: prevQuery.recommendationcount + 1
        }));

        console.log(data);
        
             // Show SweetAlert success message
             Swal.fire({
              icon: 'success',
              title: 'Success!',
              text: 'Your recommendation has been submitted successfully.',
              showConfirmButton: false,
              timer: 2000 // Hide after 2 seconds
          });
          
          // Optional: Reset the form after submission
          form.reset();
    } catch (err) {
        console.log('Error adding recommendation:', err);
    }
};
    
    return (
        
        <div className='flex flex-col   justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
            {/* Job Details */}
            <div className="lg:max-w-4xl overflow-hidden bg-white rounded-lg shadow-2xl m-12 dark:bg-gray-800">
                <img className="object-cover w-full h-64" src={productimageurl} alt="Article" />

                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link">{querytitle}</a>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Product Name: {productname}</p>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Brand Name:{productbrand}</p>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Alternation Reason:{boycottingreasondetails}</p>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Recommendation count  : {recommendationcount}</p>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Date Posted: {posted_date}</p>
                        
                        {/* <p className="text-sm font-medium text-gray-600 dark:text-gray-400"></p> */}
                        <div className="mt-4">
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    <img className="object-cover h-10 rounded-full" src={image} alt="Avatar" />
                                    <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" role="link">{name}</a>
                                </div>
                                
                              
                            </div>
                        </div>

                         
                        
                    </div>
                </div>
            </div>
            {/*  recommedation Form */}
            <section className='p-6 w-full lg:max-w-4xl shadow-2xl bg-white rounded-md  flex-1 md:min-h-[350px]'>
          <h2 className='text-lg font-semibold text-gray-700 capitalize text-center m-12 font-bold  '>
          Add A Recommendation
          </h2>


     {/* Recommendation Form */}


          <form onSubmit={handleFormSubmission}>
            <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
              <div>
                <label className='text-gray-700 ' htmlFor='recommendationTitle'>
                  Recommendation Title
                </label>
                <input
                  id='recommendationTitle'
                  type='text'
                  name='recommendationTitle'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='recommendedProductImage'>
                Recommended Product Image
                </label>
                <input
                  id='recommendedProductImage'
                  type='text'
                  name='recommendedProductImage'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              <div>
                <label className='text-gray-700 ' htmlFor='recommendedProductName
'>
                Recommended product Name

                </label>
                <input
                  id='recommendedProductName'
                  type='text'
                  name='recommendedProductName'
                 
                 
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
              <div>
                <label className='text-gray-700 ' htmlFor='recommendationReason
'>
              Recommendation reason

                </label>
                <input
                  id='recommendationReason'
                  type='text'
                  name='recommendationReason'
                  
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div>
  
              
            
            </div>
  
            <div className='flex justify-end mt-6'>
              <button
                type='submit'
                className='px-8 py-2.5 leading-5 w-full text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
              >
             Add Recommendation
              </button>
            </div>
          </form> 

         
           
        </section>
        </div>

    );
};

export default QueryDetails;


// // import { MdRecommend } from "react-icons/md";
// import axios from "axios";
// // import { useContext, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProvider";
// import { useContext, useState } from "react";
// // import { MdRecommend } from "react-icons/md";
// // import { toast } from "react-toastify";



// const QueryDetails = () => {


//     // State for recommendation form fields
//     const { user } = useContext(AuthContext)
//     const [query, setQuery] = useState(initialQueryState);
    
//     const initialQueryState = useLoaderData();
//     console.log(query)
//     const {_id, productname, productbrand, productimageurl, useremail, posted_date, querytitle, boycottingreasondetails, recommendationcount, name, image } = query;

//  // Function to handle form submission
  
// console.log
//     const handleFormSubmission = async e => {
//         e.preventDefault()
        
//         const form = e.target
//         const queries_id = _id
//         const recommendationTitle = form.recommendationTitle.value
//         const recommendedProductImage = form.recommendedProductImage.value
//         const recommendationReason = form.recommendationReason.value
//         const recommendedProductName = form.recommendedProductName.value
//         const recommenderEmail = user?.email
//         const recommenderName = user?.displayName
//        const  CurrentTimeStamp = new Date().toISOString();


//         const QueryEmail = useremail
//         const QueryUserName = name
        

//         const  recommendationData = {
//             queries_id,
//             querytitle,
//             productname,
//             QueryEmail,
//             QueryUserName,
//             recommendationTitle,
//             recommendedProductImage,
//             recommendationReason,
//             recommendedProductName,
//             recommenderEmail,
//             recommenderName,
//             CurrentTimeStamp
//         }
//         try {
//           const { data } = await axios.post(
//             `${import.meta.env.VITE_API_URL}/recommendation`,
//             recommendationData
//           )

//            // Update recommendation count locally if the request is successful
//         setQuery({
//           ...query,
//           recommendationcount: query.recommendationcount + 1
//       });

//           console.log(data)
//         } catch (err) {
//           console.log(err)
//           console.log('Hi, i am error', err.message)
//         }
//       }


    
//     return (
        
//         <div className='flex flex-col   justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
//             {/* Job Details */}
//             <div className="lg:max-w-4xl overflow-hidden bg-white rounded-lg shadow-2xl m-12 dark:bg-gray-800">
//                 <img className="object-cover w-full h-64" src={productimageurl} alt="Article" />

//                 <div className="p-6">
//                     <div>
//                         <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
//                         <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link">{querytitle}</a>
//                     </div>
//                     <div className="mt-4">
//                         <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Product Name: {productname}</p>
//                         <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Brand Name:{productbrand}</p>
//                         <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Alternation Reason:{boycottingreasondetails}</p>
//                         <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Recommendation count  : {recommendationcount}</p>
//                         <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Date Posted: {posted_date}</p>
                        
//                         {/* <p className="text-sm font-medium text-gray-600 dark:text-gray-400"></p> */}
//                         <div className="mt-4">
//                             <div className="flex items-center">
//                                 <div className="flex items-center">
//                                     <img className="object-cover h-10 rounded-full" src={image} alt="Avatar" />
//                                     <a href="#" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" role="link">{name}</a>
//                                 </div>
                                
                              
//                             </div>
//                         </div>

                         
                        
//                     </div>
//                 </div>
//             </div>
//             {/*  recommedation Form */}
//             <section className='p-6 w-full lg:max-w-4xl shadow-2xl bg-white rounded-md  flex-1 md:min-h-[350px]'>
//           <h2 className='text-lg font-semibold text-gray-700 capitalize text-center m-12 font-bold  '>
//           Add A Recommendation
//           </h2>


//      {/* Recommendation Form */}


//           <form onSubmit={handleFormSubmission}>
//             <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
//               <div>
//                 <label className='text-gray-700 ' htmlFor='recommendationTitle'>
//                   Recommendation Title
//                 </label>
//                 <input
//                   id='recommendationTitle'
//                   type='text'
//                   name='recommendationTitle'
//                   className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
//                 />
//               </div>
//               <div>
//                 <label className='text-gray-700 ' htmlFor='recommendedProductImage'>
//                 Recommended Product Image
//                 </label>
//                 <input
//                   id='recommendedProductImage'
//                   type='text'
//                   name='recommendedProductImage'
//                   className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
//                 />
//               </div>
  
//               <div>
//                 <label className='text-gray-700 ' htmlFor='recommendedProductName
// '>
//                 Recommended product Name

//                 </label>
//                 <input
//                   id='recommendedProductName'
//                   type='text'
//                   name='recommendedProductName'
                 
                 
//                   className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
//                 />
//               </div>
//               <div>
//                 <label className='text-gray-700 ' htmlFor='recommendationReason
// '>
//               Recommendation reason

//                 </label>
//                 <input
//                   id='recommendationReason'
//                   type='text'
//                   name='recommendationReason'
                  
//                   className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
//                 />
//               </div>
  
              
            
//             </div>
  
//             <div className='flex justify-end mt-6'>
//               <button
//                 type='submit'
//                 className='px-8 py-2.5 leading-5 w-full text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
//               >
//              Add Recommendation
//               </button>
//             </div>
//           </form> 

         
           
//         </section>
//         </div>

//     );
// };

// export default QueryDetails;