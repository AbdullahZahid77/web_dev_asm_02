import React from 'react';

const Contact = () => {
    return (
        <div className="bg-black text-white p-10">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                    <div className="flex items-center">
                        <div className="bg-gold rounded-full p-2 mr-3">
                            <span className="material-icons">place</span>
                        </div>
                        <div>
                            <h4 className="font-bold">Location</h4>
                            <p>A108 Adam Street, New York, NY 535022</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center">
                        <div className="bg-gold rounded-full p-2 mr-3">
                            <span className="material-icons">access_time</span>
                        </div>
                        <div>
                            <h4 className="font-bold">Open Hours</h4>
                            <p>Monday-Saturday: 11:00 AM - 2300 PM</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="bg-gold rounded-full p-2 mr-3">
                            <span className="material-icons">phone</span>
                        </div>
                        <div>
                            <h4 className="font-bold">Call Us</h4>
                            <p>+1 5589 55488 55</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div className="bg-gold rounded-full p-2 mr-3">
                            <span className="material-icons">email</span>
                        </div>
                        <div>
                            <h4 className="font-bold">Email Us</h4>
                            <p>info@example.com</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-lg mb-4">Send Us a Message</h4>
                    <form>
                        <div className="mb-4">
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full bg-gray-800 border border-gray-600 rounded-lg p-2" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                className="w-full bg-gray-800 border border-gray-600 rounded-lg p-2" 
                                required 
                            />
                        </div>
                        <div className="mb-4">
                            <input 
                                type="text" 
                                placeholder="Subject" 
                                className="w-full bg-gray-800 border border-gray-600 rounded-lg p-2" 
                            />
                        </div>
                        <div className="mb-4">
                            <textarea 
                                placeholder="Message" 
                                className="w-full bg-gray-800 border border-gray-600 rounded-lg p-2" 
                                rows="4" 
                                required 
                            />
                        </div>
                        <button type="submit" className="bg-gold text-black rounded-lg px-4 py-2">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
