import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { FreeMode, Navigation, Autoplay, Pagination } from 'swiper/modules';
import { useEffect } from 'react';
// import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';  

const Banner = () => {

      
    //aos use
    useEffect(() => {
        AOS.init({
            duration: 1000, // Set the duration for the animation
            once: true, // Set to true if you want the animation to occur only once
        });
    }, []);
    return (
        <div data-aos="zoom-out" className='lg:max-w-7xl mx-auto dark:bg-black '>

            <div   className='md:max-w-7xl    '>
                <Swiper
                    style={{
                        '--swiper-navigation-color': 'red',
                        '--swiper-pagination-color': 'white',
                    }}
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    pagination={{ clickable: true }}
                    modules={[FreeMode, Navigation, Autoplay, Pagination]}
                    loop={true}
                    autoplay={{ delay: 4000 }}
                    className="mySwiper3"
                >
                    <SwiperSlide>

                    <div className="carousel  w-full h-[600px]">
                    <div id="slide1" className="carousel-item relative w-full ">
                            <img src='https://timeular.com/wp-content/uploads/2023/02/work-smarter.jpg' className="w-full rounded-lg" />
                            <div className='absolute flex items-center h-full right-0 top-0 bg-gradient-to-r from-[#15151500] to-[#131316] lg:flex-row-reverse  '>
                                <div className=' top-1/3  text-white space-y-7 w-full lg:w-[50%] ml-36 lg:ml-1  '>
                                    <h2 className=' text-4xl lg:text-7xl font-bold lg:mr-44 '>
                                        Empower Your Choices
                                    </h2>
                                    <p>  Explore Alternative Products and Insights
                                    </p>



                                </div>


                            </div>

                            
                        </div>
                    </div>
                       
                    </SwiperSlide>


                    <SwiperSlide>
                    <div className="carousel  w-full h-[600px]">

                    <div id="slide2" className="carousel-item relative w-full">
                            <img src='https://media.licdn.com/dms/image/D5612AQEK9of2Sf7JWg/article-cover_image-shrink_600_2000/0/1686714307005?e=2147483647&v=beta&t=NvZfuCVCKv6hRoSglKpF-wweCuME-h4CuqoJNbvEq6g' className="w-full rounded-lg" />
                            <div className='absolute flex items-center h-full right-0 top-0 bg-gradient-to-r from-[#15151500] to-[#131316] lg:flex-row-reverse  '>
                            <div className=' top-1/3  text-white space-y-7  lg:w-[60%] ml-36 lg:ml-1  '>
                                    <h2 className=' text-4xl lg:text-7xl font-bold lg:mr-44 '>
                                        Unlocking Options </h2>
                                    <p>
                                        Share Discover, and Decide Smarter
                                    </p>



                                </div>


                            </div>

                             
                        </div>
                    </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="carousel  w-full h-[600px]">
                    <div id="slide3" className="carousel-item relative w-full">
                            <img src='https://hbr.org/resources/images/article_assets/2023/03/Mar23_20_127516135.jpg' className="w-full rounded-lg" />
                            <div className='absolute flex items-center h-full right-0 top-0 bg-gradient-to-r from-[#15151500] to-[#131316] lg:flex-row-reverse  '>
                            <div className=' top-1/3  text-white space-y-7 w-full lg:w-[60%] ml-36 lg:ml-1  '>
                                    <h2 className=' text-4xl lg:text-7xl font-bold lg:mr-44 '>
                                        Join the Conversation</h2>
                                    <p>
                                        Your Queries, Our Recommendations
                                    </p>



                                </div>


                            </div>

                             
                        </div>

                    </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="carousel  w-full h-[600px]">

                    <div id="slide4" className="carousel-item relative w-full">
                            <img src='https://ckl-website-static.s3.amazonaws.com/wp-content/uploads/2023/08/decision-making-in-business-1536x688.jpg.webp' className="w-full rounded-lg" />
                            <div className='absolute flex items-center h-full right-0 top-0 bg-gradient-to-r from-[#15151500] to-[#131316] lg:flex-row-reverse  '>
                            <div className=' top-1/3  text-white space-y-7 w-full lg:w-[60%] ml-36 lg:ml-1  '>
                                    <h2 className=' text-4xl lg:text-7xl font-bold lg:mr-44 '>
                                        Community Insights</h2>
                                    <p>
                                        Dive Deep into Product Alternatives
                                    </p>



                                </div>


                            </div>

                            
                        </div>
                    
                    </div>
                        
                    </SwiperSlide>


                </Swiper>
            </div>

        </div>
    );
};

export default Banner;