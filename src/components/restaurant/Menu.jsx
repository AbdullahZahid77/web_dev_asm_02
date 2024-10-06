import React from 'react';

const Menu = () => {
    const menuItems = [
        {
            title: "Lobster Bisque",
            description: "Lorem, deren, trataro, filede, nerada",
            price: "$5.95",
            imageUrl: "https://via.placeholder.com/50" // Placeholder image, replace with actual image URL
        },
        {
            title: "Crab Cake",
            description: "A delicate crab cake served on a toasted roll with lettuce and tartar sauce",
            price: "$7.95",
            imageUrl: "https://via.placeholder.com/50" // Placeholder image, replace with actual image URL
        },
        {
            title: "Tuscan Grilled",
            description: "Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
            price: "$9.95",
            imageUrl: "https://via.placeholder.com/50" // Placeholder image, replace with actual image URL
        },
        {
            title: "Bread Barrel",
            description: "Lorem, deren, trataro, filede, nerada",
            price: "$6.95",
            imageUrl: "https://via.placeholder.com/50" // Placeholder image, replace with actual image URL
        },
        {
            title: "Caesar Selections",
            description: "Lorem, deren, trataro, filede, nerada",
            price: "$8.95",
            imageUrl: "https://via.placeholder.com/50" // Placeholder image, replace with actual image URL
        },
        {
            title: "Mozzarella Stick",
            description: "Lorem, deren, trataro, filede, nerada",
            price: "$4.95",
            imageUrl: "https://via.placeholder.com/50" // Placeholder image, replace with actual image URL
        },
    ];

    return (
        <div className="bg-black text-white p-10">
            <h2 className="text-4xl font-bold text-center mb-8">Check Our Tasty Menu</h2>
            <div className="flex flex-col space-y-6">
                {menuItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-800 rounded-lg p-4">
                        <div className="flex items-center">
                            <img src={item.imageUrl} alt={item.title} className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <h3 className="text-lg font-bold">{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                        <span className="font-bold">{item.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
