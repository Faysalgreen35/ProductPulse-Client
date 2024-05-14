 
import { Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart.js

const TrendRadar = () => {
  // Dummy data for demonstration
  const data = {
    labels: ['Queries', 'Recommendations For Me', 'My Queries', 'My recommendations', 'Quality'],
    datasets: [
      {
        label: 'ProductPulse',
        data: [5, 4, 3, 2, 4],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Radar chart options
  const options = {
    scales: {
      r: {
        ticks: { beginAtZero: true, max: 5 },
      },
    },
  };

  return (
//     <div className="flex justify-center">
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:max-w-screen-7xl">
//       {/* Left column for radar chart */}
//       <div className="col-span-1 bg-white rounded-lg  overflow-hidden shadow-lg p-6">
//         <h2 className="text-lg font-semibold mb-4">ProductPulse</h2>
//         <div className="w-full h-auto lg:h-[600px]">
//           <Radar data={data} options={options} />
//         </div>
//       </div>
//       {/* Right column for additional content */}
//       <div className="col-span-1 bg-gray-100 rounded-lg overflow-hidden shadow-lg p-6">
//         <h2 className="text-lg font-semibold mb-4 dark:text-black ">ProductPulse</h2>
//         <p className="text-gray-700">
//           ProductPulse is dedicated to keeping you informed about the latest trends, innovations, and developments
//           in the product industry. From cutting-edge technology to sustainable design, we cover it all. Stay ahead
//           of the curve with ProductPulse.
//         </p>
//         {/* Add more content here as needed */}
//       </div>
//     </div>
//   </div>
<div className="flex justify-center">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:max-w-screen-7xl">
  {/* Left column for radar chart */}
  <div className="col-span-1 bg-white rounded-lg overflow-hidden shadow-lg p-6">
    <h2 className="text-lg font-semibold mb-4">ProductPulse</h2>
    <div className="w-full h-auto lg:h-[600px]">
      <Radar data={data} options={options} />
    </div>
  </div>
  {/* Right column for additional content */}
  <div className="col-span-1 bg-gray-100 rounded-lg overflow-hidden shadow-lg p-6">
    <h2 className="text-lg font-semibold mb-4 dark:text-black ">ProductPulse</h2>
    <p className="text-gray-700">
      ProductPulse is dedicated to keeping you informed about the latest trends, innovations, and developments
      in the product industry. From cutting-edge technology to sustainable design, we cover it all. Stay ahead
      of the curve with ProductPulse.
    </p>
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Labels Description:</h3>
      <ul className="list-disc pl-4">
        <li><strong>Queries:</strong> Discover what queries are trending in the product industry.</li>
        <li><strong>Recommendations For Me:</strong> Get personalized recommendations based on your interests.</li>
        <li><strong>My Queries:</strong> Keep track of your own queries and questions.</li>
        <li><strong>My Recommendations:</strong> Access recommendations tailored to your preferences.</li>
        <li><strong>Quality:</strong> Monitor the quality standards of products in the industry.</li>
      </ul>
    </div>
  </div>
</div>
</div>
 
     
  );
};

export default TrendRadar;
