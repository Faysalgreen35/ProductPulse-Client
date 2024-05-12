import { Link } from "react-router-dom";


const Slide = () => {
  return (
    <div className="dark:text-white">
      <div
        className='w-full bg-center bg-cover h-[18rem]'
        style={{
          backgroundImage: `url("https://www.bobvila.com/wp-content/uploads/2021/12/The_Best_Fertilizer_for_Indoor_Plants_Option.jpg?w=1200&h=800")`,
        }}
      >
        <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
          <div className='text-center'>
            <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
              Discover Better   <span className='text-green-400'>Choices</span> Today!
            </h1>
            <br />
            <Link to='/queries'>
            <button className="btn btn-outline btn-success text-red-400"> Visit  Queries </button>
            
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;