import React from 'react';

const MonthlySales = () => {
    const salesData = [65, 59, 80, 81, 56, 55, 40, 60, 45, 70, 50, 65]; // Example data points for monthly sales
    const maxSale = Math.max(...salesData); // Find the maximum value for scaling the chart bars

    return (
        <div className="bg-white shadow-lg rounded-lg p-5">
            <h2 className="text-xl font-bold mb-4">Monthly Sales</h2>
            <div className="flex justify-between items-end px-4 h-64"> {/* Height of the chart container */}
                {salesData.map((sale, index) => (
                    <div key={index} className="w-6 flex flex-col items-center" title={`Sales for month ${index + 1}: ${sale}`}> {/* Tooltip for each bar */}
                        <div className="text-center mb-1">{sale}</div>
                        <div className="bg-blue-500" style={{ width: '100%', height: `${(sale / maxSale) * 100}%` }}></div> {/* Dynamic height based on sale value */}
                        <div className="text-xs mt-1">{index + 1}</div> {/* Month number below the bar */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MonthlySales;
