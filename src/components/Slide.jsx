import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Slide = () => {


  //aos use
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration for the animation
      once: true, // Set to true if you want the animation to occur only once
    });
  }, []);
  return (
    <div data-aos="zoom-in" className="dark:text-white">
      <div
        className='w-full bg-center bg-cover h-[18rem]'
        style={{
          backgroundImage: `url("https://www.bobvila.com/wp-content/uploads/2021/12/The_Best_Fertilizer_for_Indoor_Plants_Option.jpg?w=1200&h=800")`,
        }}
      >
        <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
          <div className='text-center'>
            <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
              Discover Better   <span className='text-green-400'>Choices</span> Today!
            </h1>
            <br />
            <Link to='/queries'>
              {/* <button className="btn btn-outline btn-success text-red-400"> Visit  Queries </button> */}
              {/* <button className="btn font-bold items-center justify-center  bg-gradient-to-r from-sky-200 to-blue-500 border-none  text-white p-12 mb-5 rounded-full">Visit  Queries</button> */}
              <button type="button" className="relative px-8 py-4 ml-4  bg-gradient-to-r text-gray-900 font-bold  from-sky-200 to-blue-500 overflow-hidden    dark:bg-gray-800 dark:text-gray-50 lg:w-[40%] lg:h-[90%] rounded-full">Visit All Queries
                <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-600">New</span>
              </button>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;