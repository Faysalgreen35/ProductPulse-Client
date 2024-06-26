


import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import QueryCard from "./QueryCard";
import 'react-tabs/style/react-tabs.css'
import { useEffect, useState } from "react";


const Queries = () => {
  // const { productname, productbrand, productimageurl,posted_date, querytitle,boycottingreasondetails, name, image } = query;



  const queriesData = useLoaderData();
    // const [searchText, setSearchText] = useState("");
    // const [filteredQueries, setFilteredQueries] = useState([]);

    // Filter queries based on product name
    // const filteredQueries = queriesData.filter(query => 
    //     query.productname.toLowerCase().includes(searchText.toLowerCase())
    // );

    // Sort queries by posted_date in descending order
    
    // const handleSearch = () => {
    //   const trimmedSearchText = searchText.trim();
    //   if (trimmedSearchText === '') {
    //     // If search text is empty, reset filtered queries to show all queries
    //     setFilteredQueries(queriesData);
    //   } else {
    //     // Filter queries based on product name
    //     const matchingQueries = queriesData.filter((query) =>
    //       query.productname.toLowerCase().includes(trimmedSearchText.toLowerCase())
    //     );
    //     setFilteredQueries(matchingQueries);
    //   }
    // };


    const [searchText, setSearchText] = useState('');
    const [filteredQueries, setFilteredQueries] = useState([]);
  
    useEffect(() => {
      // Initialize filteredQueries with all queriesData when component mounts
      setFilteredQueries(queriesData);
    }, [queriesData]);
  
    const handleSearch = () => {
      const trimmedSearchText = searchText.trim();
      if (trimmedSearchText === '') {
        // If search text is empty, reset filtered queries to show all queries
        setFilteredQueries(queriesData);
      } else {
        // Filter queries based on product name
        const matchingQueries = queriesData.filter((query) =>
          query.productname.toLowerCase().includes(trimmedSearchText.toLowerCase())
        );
        setFilteredQueries(matchingQueries);
      }
    };

  //  Sort queries by posted_date in descending order
    const sortedQueries = filteredQueries.sort((a, b) => {
        const dateA = new Date(a.posted_date);
        const dateB = new Date(b.posted_date);
        return dateB - dateA;
    });

  
  return (
    <div>
      <Helmet>
        <title>ProductPulse  | Queries Page</title>
      </Helmet>
            {/* <div className="flex justify-center items-center my-6">
                <input
                    type="text"
                    placeholder="Search by product name..."
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div> */}
             <div className="flex justify-center items-center my-6">
        <input
          type="text"
          placeholder="Searchs by product name..."
          className="px-4 py-5 border border-gray-300 w-full ml-12 lg:ml-0  lg:w-[40%]  focus:outline-none focus:border-blue-500 rounded-full"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {/* <button
          className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button> */}
         <button type="button"   onClick={handleSearch} className="relative -translate-x-[120px] lg:-translate-x-[150px] px-8 py-4 ml-4  bg-gradient-to-r text-gray-900 font-bold  from-sky-200 to-blue-500 overflow-hidden    dark:bg-gray-800 dark:text-gray-50 lg:w-[10%] lg:h-[30%] rounded-full">Search
                <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-600">New</span>
              </button>
      </div>


      <Tabs>
        <div className=' container px-6 py-10 mx-auto dark:text-white'>
          <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl  dark:text-white '>
            Browse All Queries
          </h1>

          <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
            Explore recent queries and their details.
          </p>
          <div className='flex items-center justify-center'>
            <TabList className="font-inter font-bold text-2xl m-12 text-black hidden lg:block  ">
              <Tab>Products with 1 Layer Grid</Tab>
              <Tab>Products with 2 Layer Grid</Tab>
              <Tab>Products with 3 Layer Grid</Tab>
            </TabList>
          </div>
          <TabPanel>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1   '>
              {sortedQueries.map(query => (
                <QueryCard key={query._id} query={query} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
              {sortedQueries.map(query => (
                <QueryCard key={query._id} query={query} />
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
              {sortedQueries.map(query => (
                <QueryCard key={query._id} query={query} />
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>


    </div>
  );
};

export default Queries;



// import { Helmet } from "react-helmet-async";
// import { useLoaderData } from "react-router-dom";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import QueryCard from "./QueryCard";
// import 'react-tabs/style/react-tabs.css'
// import { useState } from "react";


// const Queries = () => {
//   // const { productname, productbrand, productimageurl,posted_date, querytitle,boycottingreasondetails, name, image } = query;



//   const queriesData = useLoaderData();
//     const [searchText, setSearchText] = useState("");
    
//     // Filter queries based on product name
//     const filteredQueries = queriesData.filter(query => 
//         query.productname.toLowerCase().includes(searchText.toLowerCase())
//     );

//     // Sort queries by posted_date in descending order
//     const sortedQueries = filteredQueries.sort((a, b) => {
//         const dateA = new Date(a.posted_date);
//         const dateB = new Date(b.posted_date);
//         return dateB - dateA;
//     });

//   return (
//     <div>
//       <Helmet>
//         <title>ProductPulse  | Queries Page</title>
//       </Helmet>
//       <div className="flex justify-center items-center my-6">
//                 <input
//                     type="text"
//                     placeholder="Search by product name..."
//                     className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                     value={searchText}
//                     onChange={(e) => setSearchText(e.target.value)}
//                 />
//             </div>


//       <Tabs>
//         <div className=' container px-6 py-10 mx-auto'>
//           <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
//             Browse All Queries
//           </h1>

//           <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
//             Explore recent queries and their details.
//           </p>
//           <div className='flex items-center justify-center'>
//             <TabList className="font-inter font-bold text-2xl m-12 text-black hidden lg:block  ">
//               <Tab>Products with 1 Layer Grid</Tab>
//               <Tab>Products with 2 Layer Grid</Tab>
//               <Tab>Products with 3 Layer Grid</Tab>
//             </TabList>
//           </div>
//           <TabPanel>
//             <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1   '>
//               {sortedQueries.map(query => (
//                 <QueryCard key={query._id} query={query} />
//               ))}
//             </div>
//           </TabPanel>

//           <TabPanel>
//             <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
//               {sortedQueries.map(query => (
//                 <QueryCard key={query._id} query={query} />
//               ))}
//             </div>
//           </TabPanel>

//           <TabPanel>
//             <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
//               {sortedQueries.map(query => (
//                 <QueryCard key={query._id} query={query} />
//               ))}
//             </div>
//           </TabPanel>
//         </div>
//       </Tabs>


//     </div>
//   );
// };

// export default Queries;