 
import AOS from 'aos';
import 'aos/dist/aos.css';  
import { useEffect } from 'react';

const Blog = () => {

     //aos use
     useEffect(() => {
        AOS.init({
            duration: 1000, // Set the duration for the animation
            once: true, // Set to true if you want the animation to occur only once
        });
    }, []);
    return (
        <section data-aos="fade" className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">ProductPulse Blog</h1>

                <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                    <img data-aos="zoom-out" className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://www.plytix.com/hubfs/pim-2.jpg" alt="Product Pulse Blog" />

                    <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                        <p className="text-sm text-blue-500 uppercase">Alternative Product Information Management</p>

                        <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                            How to Make the Most of the Alternative Product Information System
                        </a>

                        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                            Discover how to utilize the Alternative Product Information System to its full potential, from adding and updating queries to providing recommendations and interacting with other users.
                        </p>

                        <a href="#" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

                        <div className="flex items-center mt-6">
                            <img className="object-cover object-center w-10 h-10 rounded-full" src="https://t.ly/RzqOJ" alt="Author" />

                            <div className="mx-4">
                                <h1 className="text-sm text-gray-700 dark:text-gray-200">Musnud Faysal</h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400"> Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
