import { Link } from "react-router-dom";

 
const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center md:p-32 justify-center ">
            <h2 className="bg-black text-white font-jacquard text-5xl text-center mb-7 p-12">Ooops no page!!!!!</h2>
            <Link className="btn btn-secondary font-inter font-bold p-4" to="/">Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;