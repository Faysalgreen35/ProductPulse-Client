import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import MyqueryCard from "./MyqueryCard";
// import axios from "axios";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const MyQueries = () => {

  const { user } = useContext(AuthContext);
  const [queries, setQueries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  // useEffect(() => {
  //   const fetchQueries = async () => {
  //     try {
  //       if (user) {
  //         const response = await axios.get(`${import.meta.env.VITE_API_URL}/query/email/${user?.email}`);
  //         setQueries(response.data);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching queries:', error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchQueries();
  // }, [user]);



  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        if (user) {
          const response = await axiosSecure.get(`/query/email/${user?.email}`);
          setQueries(response.data);
        }
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecommendations();
  }, [user, axiosSecure]);

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
              <h1 className='text-xl font-semibold text-white lg:text-5xl'>
              Unleash Your Potential,  <span className='text-green-400'>Forge</span>  Your Destiny
              </h1>
              <br />
              <Link to='/add-queries'>

                <button className="btn font-bold items-center justify-center text-2xl lg:text-5xl bg-gradient-to-r from-red-200 to-blue-500 border-none  text-white p-12 w-full h-full rounded-full ">Add Query</button>
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
            <div className="text-center mt-8 mx-auto">


              <div className="card bg-base-100 shadow-xl text-center  image-full">
                <figure><img src="https://blog.expertrec.com/wp-content/uploads/2021/01/no-result-found-1200x675.jpg" alt="Shoes" /></figure>
                <div className="card-body justify-center items-center ">

                  <h2 className="card-title lg:text-6xl">No queries found. Add a query to get started!</h2>

                  <div className="card-actions justify-center items-center mt-4 text-3xl">

                    <Link to='/add-queries'>
                    <button className="btn font-bold items-center justify-center text-2xl lg:text-5xl bg-gradient-to-r from-red-200 to-blue-500 border-none  text-white p-12 w-full h-full rounded-full ">Add Query</button>
                    </Link>
                  </div>
                </div>
              </div>






            </div>
          ) : (


            <div>
              <Tabs>
                <div className=' container px-6 py-10 mx-auto'>
                  <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
                    Browse My Queries: <span className="text-2xl text-red-500" >{sortedQueries.length}</span>
                  </h1>

                  <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
                    Explore recent queries and their details.
                  </p>
                  <div className='flex items-center justify-center   '>
                    <TabList className="font-inter font-bold text-2xl m-12 text-black    ">
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