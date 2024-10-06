import React from 'react';

const Footer2 = () => {
    return (
        <footer className="bg-black text-white py-10 px-5">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                <div>
                    <h4 className="font-bold text-lg mb-4">Restaurantly</h4>
                    <p>A108 Adam Street</p>
                    <p>New York, NY 535022</p>
                    <p>Phone: +1 5589 55488 55</p>
                    <p>Email: info@example.com</p>
                </div>
                
                <div>
                    <h4 className="font-bold text-lg mb-4">Useful Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About us</a></li>
                        <li><a href="#" className="hover:underline">Services</a></li>
                        <li><a href="#" className="hover:underline">Terms of service</a></li>
                        <li><a href="#" className="hover:underline">Privacy policy</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold text-lg mb-4">Our Services</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Web Design</a></li>
                        <li><a href="#" className="hover:underline">Web Development</a></li>
                        <li><a href="#" className="hover:underline">Product Management</a></li>
                        <li><a href="#" className="hover:underline">Marketing</a></li>
                        <li><a href="#" className="hover:underline">Graphic Design</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-bold text-lg mb-4">Our Newsletter</h4>
                    <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                    <input 
                        type="email" 
                        placeholder="Your email" 
                        className="bg-gray-800 border border-gray-600 rounded-lg py-2 px-3 w-full mb-3"
                    />
                    <button className="bg-gold text-black py-2 px-4 rounded-lg">Subscribe</button>
                </div>
            </div>
            <div className="text-center mt-10">
                <p>&copy; Copyright Restaurantly | All Rights Reserved</p>
                <p className="text-gray-400">Designed by BootstrapMade</p>
            </div>
        </footer>
    );
};

export default Footer2;
