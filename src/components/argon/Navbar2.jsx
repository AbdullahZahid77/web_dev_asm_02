import React from 'react';

const Navbar2 = () => {
    return (
        <nav className="bg-white shadow flex items-center justify-between p-4">
            <div className="text-xl font-bold">MyApp</div> {/* Logo as text */}

            <form className="w-1/2">
                <div className="flex items-center">
                    <input
                        type="text"
                        className="form-control search-input w-full border rounded-l-md p-2"
                        placeholder="Search for people, companies, events and more..."
                        aria-label="Search"
                    />
                    <button className="btn search-button bg-blue-500 text-white rounded-r-md px-4" type="button">
                        Search
                    </button>
                </div>
            </form>

            <div className="flex space-x-4">
                <button className="text-gray-600 hover:text-blue-500">Create Post</button>
                <button className="text-gray-600 hover:text-blue-500">Messages</button>
                <button className="text-gray-600 hover:text-blue-500">Notifications</button>
                <button className="text-gray-600 hover:text-blue-500">Profile</button>
                <button className="text-gray-600 hover:text-blue-500">Settings</button>
            </div>
        </nav>
    );
};

export default Navbar2;
