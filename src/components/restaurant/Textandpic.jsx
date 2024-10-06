import React from 'react';

const Textandpic = () => {
    return (
        <div className="flex bg-gray-900 text-white p-8 rounded-lg">
            <div className="flex-1 pr-4">
                <h2 className="text-3xl font-bold mb-4">Voluptatem dignissimos provident</h2>
                <p className="mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalperda.</li>
                </ul>
                <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
            </div>
            <div className="flex-none w-1/2">
                <img 
                    src="https://via.placeholder.com/400" // Replace with your actual image URL
                    alt="Restaurant Interior" 
                    className="w-full h-auto rounded-lg"
                />
            </div>
        </div>
    );
};

export default Textandpic;
