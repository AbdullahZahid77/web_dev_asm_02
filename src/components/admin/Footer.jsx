import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-center lg:text-left">
            <div className="text-gray-700 text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                AdminKit - Bootstrap Admin Template ©
            </div>
            <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
                <div className="mr-12 hidden lg:block">
                    <span>Get connected with us on social networks:</span>
                </div>
                <div className="flex justify-center">
                    <a href="#!" className="mr-6 text-gray-600">
                        Support
                    </a>
                    <a href="#!" className="mr-6 text-gray-600">
                        Help Center
                    </a>
                    <a href="#!" className="mr-6 text-gray-600">
                        Privacy
                    </a>
                    <a href="#!" className="text-gray-600">
                        Terms
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
