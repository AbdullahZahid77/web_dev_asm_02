import React from 'react';

const Profile = () => {
    const userName = "Arthur Minasyan";
    const userHandle = "@arthur_minasyan";
    const jobTitle = "Web Developer at Company Name";
    const location = "Lives in City, Country";
    const lastLogin = "Last Login Online";

    return (
        <div className="bg-white shadow-lg rounded-lg w-80 p-5">
            <div className="flex flex-col items-center">
                <img 
                    src="https://via.placeholder.com/150" 
                    alt="User Avatar" 
                    className="rounded-full w-24 h-24 mb-4"
                />
                <h2 className="text-xl font-semibold">{userName}</h2>
                <p className="text-gray-600">{userHandle}</p>
                <div className="flex space-x-2 mt-4">
                    <button className="border border-gray-300 rounded-md px-4 py-1 hover:bg-gray-200">+ Follow</button>
                    <button className="bg-blue-500 text-white rounded-md px-4 py-1">Message</button>
                </div>
            </div>
            <div className="mt-5">
                <h3 className="text-md font-semibold">Intro</h3>
                <p className="text-gray-600">{jobTitle}</p>
                <p className="text-gray-600">{location}</p>
                <p className="text-gray-600">{lastLogin}</p>
            </div>
            <button className="bg-gray-300 text-gray-800 rounded-md px-4 py-2 mt-4 w-full">
                Edit Details
            </button>
        </div>
    );
};

export default Profile;
