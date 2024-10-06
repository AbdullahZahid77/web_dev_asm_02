import React from 'react';

const WeatherCard = () => {
    const currentTime = "11:37 PM"; // Example time
    const location = "California, CA"; // Example location
    const temperature = 28; // Example temperature
    const humidity = 15; // Example humidity
    const windSpeed = 10; // Example wind speed

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 w-64 h-64 flex flex-col justify-between">
            <div className="flex justify-between items-center">
                <p className="text-xl font-bold">{currentTime}</p>
                <a href="#" className="text-blue-500">{location}</a>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-6xl font-bold">{temperature}<span className="text-2xl">&deg;</span></h1>
                <div className="text-sm text-gray-600">
                    <p>Humidity: <span className="font-semibold">{humidity}%</span></p>
                    <p>Wind Speed: <span className="font-semibold">{windSpeed} km/h</span></p>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
