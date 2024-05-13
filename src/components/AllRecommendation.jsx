import { useLoaderData } from "react-router-dom";
import AllRecommendationCard from "./AllRecommendationCard";



const AllRecommendation = () => {
    const recommends = useLoaderData();

    return (
        <div>
            <h1 className="text-center text text-6xl font-bold font-playfair m-4 ">AllRecommendation:   {recommends.length}</h1>

           <div className="m-12 py-1">


            {
                recommends.map(recom => <AllRecommendationCard
                key={recom._id}
                recom={recom}
                ></AllRecommendationCard>)
            }
           </div>


        </div>
    );
};

export default AllRecommendation;