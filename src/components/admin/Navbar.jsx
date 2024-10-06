import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <button className="text-gray-800 hover:text-gray-600 font-medium" onClick={() => setIsOpen(!isOpen)}>
                        Menu
                    </button>

                    <div className="flex items-center space-x-4">
                        <button className="text-gray-800 hover:text-gray-600 font-medium">
                            Notifications (4)
                        </button>

                        <div className="relative">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-gray-600 font-medium focus:outline-none">
                                Charles Hall
                            </button>
                            {isOpen && (
                                <div className="absolute right-0 w-48 mt-2 py-2 bg-white shadow-lg rounded-md z-50">
                                    <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                                    <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                                    <a href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Log out</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
