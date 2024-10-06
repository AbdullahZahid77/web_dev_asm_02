import React from 'react';

const ListingCard = () => {
    const price = "$89.99"; // Example price
    const title = "Beauty Counter"; // Example title
    const location = "California, CA"; // Example location
    const imageUrl = "https://via.placeholder.com/150"; // Placeholder image, replace with your image URL

    return (
        <div className="bg-white shadow-lg rounded-lg w-48 h-64 overflow-hidden"> {/* Adjust width and height for rectangle */}
            <img src={imageUrl} className="w-full h-32 object-cover" alt="Group image" /> {/* Image with fixed height */}
            <div className="p-4 flex flex-col h-full">
                <h5 className="text-lg font-bold">{price}</h5>
                <h5 className="text-md font-semibold">
                    <a href="#" className="text-blue-500">{title}</a>
                </h5>
                <p className="text-gray-600">{location}</p>
                <a href="#" className="bg-blue-500 text-white py-2 rounded-md text-center mt-auto">Details</a> {/* Button at the bottom */}
            </div>
        </div>
    );
};

export default ListingCard;
