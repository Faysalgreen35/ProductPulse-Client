 
import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import AdminHome from './AdminHome';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AdminHome = () => {
    const { user } = useAuth();
    const [stats, setStats] = useState({
        users: 0,
        queries: 0,
        recommendations: 0,
    });

    useEffect(() => {
        const fetchStats = async () => {
            const response = await fetch(`http://localhost:5000/user-stats`);
            const data = await response.json();
            setStats(data);
        };

        fetchStats();
    }, []);
    
    console.log('all stats', stats);

    const data = {
        labels: ['Queries', 'Recommendations'],
        datasets: [
            {
                label: 'Count',
                data: [stats.query, stats.recommendation],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Queries and Recommendations',
            },
        },
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl mb-4">
                <span>Hi, Welcome </span>
                {user?.displayName ? user.displayName : 'Back'}
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2 text-white">Queries</h2>
                    <p className="text-white text-4xl">{stats.query}</p>
                </div>
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2 text-white">Recommendations</h2>
                    <p className="text-white text-4xl">{stats.recommendation}</p>
                </div>
            </div>
            <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
                <div className="relative h-96">
                    <Line data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default AdminHome;

 


 