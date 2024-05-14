
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { useEffect } from 'react';

const RecentCards = ({ query }) => {
    
  
    //aos use
    useEffect(() => {
        AOS.init({
            duration: 1000, // Set the duration for the animation
            once: true, // Set to true if you want the animation to occur only once
        });
    }, []);
    const { productname, productbrand, productimageurl,posted_date, querytitle,boycottingreasondetails, name, image } = query;

    return (
        <div>
             <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img data-aos="zoom-out" className="object-cover w-full h-64" src={productimageurl} alt="Article" />

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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentCards;