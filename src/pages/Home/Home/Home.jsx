 
import { Helmet } from "react-helmet-async";
import Slide from "../../../components/Slide";
import Banner from "../../../components/Banner"; 
import { useLoaderData } from "react-router-dom";
import RecentCards from "./RecentCards";

const Home = () => {
    const queries = useLoaderData();

    // Sort queries by posted_date in descending order
    const sortedQueries = queries.sort((a, b) => {
        const dateA = new Date(a.posted_date);
        const dateB = new Date(b.posted_date);
        return dateB - dateA;
    });

    return (
        <div className="dark:text-white">
            <Helmet>
                <title>ProductPulse | Home Page</title>
            </Helmet>
            <Banner />
            <Slide />
            <div>
                <h1 className="p-12 text-center text-5xl">Recent Queries:</h1>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3">
                {sortedQueries.slice(0, 6).map(query => (
                    <RecentCards key={query._id} query={query} />
                ))}
            </div>
        </div>
    );
};

export default Home;

 