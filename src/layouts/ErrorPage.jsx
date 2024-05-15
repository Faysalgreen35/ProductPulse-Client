import { Link } from "react-router-dom";

 
const ErrorPage = () => {
    return (
        // <div className="flex flex-col items-center md:p-32 justify-center ">
        //     <img src="https://indexsy.com/wp-content/uploads/2023/05/What-is-404-error.jpg" alt="" />
        //     <h2 className="bg-black text-white font-jacquard text-5xl text-center mb-7 p-12">Ooops no page!!!!!</h2>
        //     <Link className="btn btn-secondary font-inter font-bold p-4" to="/">Go Back to Home</Link>
        // </div>

<div className="text-center mt-8 mx-auto">


<div className="card bg-base-100 shadow-xl text-center  image-full">
  <figure><img src="https://indexsy.com/wp-content/uploads/2023/05/What-is-404-error.jpg" alt="Shoes" /></figure>
  <div className="card-body justify-center items-center ">

    <h2 className="card-title lg:text-6xl">No Page found</h2>

    <div className="card-actions justify-center items-center mt-4 text-3xl">

      <Link to='/'>
      <button className="btn font-bold items-center justify-center text-2xl lg:text-5xl bg-gradient-to-r from-red-200 to-blue-500 border-none  text-white p-12 w-full h-full rounded-full ">Go Back to Home</button>
      </Link>
    </div>
  </div>
</div>

</div>
    );
};

export default ErrorPage;