import React from 'react';

const ChatBar = () => {
    const userName = "Susan P. Jarvis"; // Example user name
    const message = "This party is going to have a DJ, food, and drinks."; // Example message

    return (
        <div className="flex items-center justify-between bg-white p-3 shadow-md rounded-lg">
            <div className="flex items-center">
                <div className="bg-blue-200 rounded-full w-10 h-10 flex items-center justify-center">
                    {/* Placeholder for user avatar */}
                    <span className="font-bold text-blue-600">S</span> {/* Replace with an image if needed */}
                </div>
                <span className="ml-3 text-gray-800 font-semibold">{userName}</span>
            </div>
            <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-blue-500">Call</button>
                <button className="text-gray-600 hover:text-blue-500">Video</button>
                <button className="text-gray-600 hover:text-blue-500">Info</button>
                <button className="text-gray-600 hover:text-blue-500">...</button> {/* More options */}
            </div>
        </div>
    );
};

export default ChatBar;
