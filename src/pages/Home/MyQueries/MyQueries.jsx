import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import MyqueryCard from "./MyqueryCard";
import axios from "axios";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";



const MyQueries = () => {

    const { user } = useContext(AuthContext);
    const [queries, setQueries] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchQueries = async () => {
            try {
                if (user) {
                    const response = await axios.get(`${import.meta.env.VITE_API_URL}/query/email/${user?.email}`);
                    setQueries(response.data);
                }
            } catch (error) {
                console.error('Error fetching queries:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchQueries();
    }, [user]);

    console.log('is query ', queries);

 // Sort queries by posted_date in descending order
 const sortedQueries = queries.sort((a, b) => {
    const dateA = new Date(a.posted_date);
    const dateB = new Date(b.posted_date);
    return dateB - dateA;
});

 
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
                            <button className="btn btn-active btn-secondary hover:btn-succes ">Add Queries</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="">
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                queries.length === 0 ? (
                    <div className="text-center mt-8">
                        <p>No queries found. Add a query to get started!</p>
                        <Link to='/add-queries'>
                            <button className="btn btn-active btn-secondary hover:btn-succes mt-4">Add Query</button>
                        </Link>
                    </div>
                ) : (
                    

                    <div>
                           <Tabs>
        <div className=' container px-6 py-10 mx-auto'>
          <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
            Browse My Queries: <h2>{sortedQueries.length}</h2>
          </h1>

          <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
            Explore recent queries and their details.
          </p>
          <div className='flex items-center justify-center'>
            <TabList className="font-inter font-bold text-2xl m-12 text-black ">
              <Tab>Products with 1 Layer Grid</Tab>
              <Tab>Products with 2 Layer Grid</Tab>
              <Tab>Products with 3 Layer Grid</Tab>
            </TabList>
          </div>
          <TabPanel>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1'>
              {sortedQueries.map(query => (
               <MyqueryCard key={query._id} query={query} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
              {sortedQueries.map(query => (
                <MyqueryCard key={query._id} query={query} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
              {sortedQueries.map(query => (
               <MyqueryCard key={query._id} query={query} />
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
                    </div>
                )
            )}
        </div>
    </div>
    );
};

export default MyQueries;