import { MdRecommend } from "react-icons/md";
import { Link } from "react-router-dom";
// import { toast } from 'react-toastify';


const QueryCard = ({ query }) => {
    const {_id, productname, productbrand, productimageurl, posted_date, querytitle, boycottingreasondetails, recommendationcount, name, image } = query;

    return (
        <div>
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
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

                        {/* Recommendation Count */}
                        <div className="flex items-center mt-2 text-5xl justify-between  ">

                            <div className="avatar indicator mt-12 translate-y-8">
                                <span className="indicator-item badge badge-secondary text-3xl p-5">{recommendationcount}</span>
                                <div className="w-20 h-40 rounded-lg text-6xl">
                                <MdRecommend />    </div>
                            </div>
                            
                            <div>

                                <Link    to={`/queries/${_id}`}>
                                <button className="btn btn-warning"> Recommend</button>
                                
                                </Link>

                                
                            </div>
                        </div>
                        {/* Recommend Button */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default QueryCard;