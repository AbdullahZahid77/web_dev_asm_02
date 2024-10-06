import React from 'react';

const Navbar3 = () => {
    return (
        <nav className="bg-black text-white flex items-center justify-between p-4">
            <div className="text-2xl font-bold">Restaurantly</div> {/* Logo/Text */}

            <div className="flex space-x-6">
                <a href="#" className="hover:text-gold">Home</a>
                <a href="#" className="hover:text-gold">About</a>
                <a href="#" className="hover:text-gold">Menu</a>
                <a href="#" className="hover:text-gold">Specials</a>
                <a href="#" className="hover:text-gold">Events</a>
                <a href="#" className="hover:text-gold">Chefs</a>
                <a href="#" className="hover:text-gold">Gallery</a>
                <div className="relative group">
                    <button className="hover:text-gold">Dropdown</button>
                    <div className="absolute left-0 hidden mt-2 bg-white text-black rounded-md shadow-lg group-hover:block">
                        <a href="#" className="block px-4 py-2 hover:bg-gray-200">Action 1</a>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-200">Action 2</a>
                    </div>
                </div>
                <a href="#" className="hover:text-gold">Contact</a>
            </div>

            <button className="bg-gold text-black px-4 py-2 rounded-md hover:bg-yellow-600">Book a Table</button>
        </nav>
    );
};

export default Navbar3;
