import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import MyqueryCard from "./MyqueryCard";
import axios from "axios";



const MyQueries = () => {

    const { user } = useContext(AuthContext);
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        const fetchQueries = async () => {
            try {
                if (user) {
                    const response = await axios.get(`${import.meta.env.VITE_API_URL}/query/email/${user?.email}`);
                    setQueries(response.data);
                }
            } catch (error) {
                console.error('Error fetching queries:', error);
            }
        };

        fetchQueries();
    }, [user]);

    console.log('is query ', queries);


 
    return (
        <div>
            <div className="dark:text-white">
                <div
                    className='w-full bg-center bg-cover h-[38rem]'
                    style={{
                        backgroundImage: `url("https://www.homeinwa.com.au/wp-content/uploads/2018/11/P1170131.jpg")`,
                    }}
                >
                    <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                        <div className='text-center'>
                            <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                                Discover Better   <span className='text-green-400'>Choices</span> Today!
                            </h1>
                            <br />
                            <Link to='/add-queries'>
                                {/* <button className="btn btn-outline btn-success text-red-400"> Add Queries</button> */}

                                <button className="btn btn-active btn-secondary   hover:btn-succes ">Add Queries</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                {
                    queries.map(query => <MyqueryCard
                        key={query._id}
                        query={query}
                    >

                    </MyqueryCard>)
                }
            </div>

        </div>
    );
};

export default MyQueries;