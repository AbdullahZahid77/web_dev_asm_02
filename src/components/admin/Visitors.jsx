import React from 'react';

const Visitors = () => {
    const visitorsCount = 14212; // Example visitors count
    const percentageChange = 5.25; // Example percentage change

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-64 h-64 flex flex-col justify-between">
            <div>
                <h5 className="text-gray-600 text-sm">Visitors</h5>
                <h1 className="text-3xl font-bold">{visitorsCount.toLocaleString()}</h1>
                <div className="text-green-500 font-semibold">
                    {percentageChange}% Since last week
                </div>
            </div>
            <div className="bg-blue-200 rounded-full p-3 w-12 h-12 flex items-center justify-center">
                <span className="material-icons text-blue-600">people</span> {/* Replace with any suitable icon */}
            </div>
        </div>
    );
};

export default Visitors;
