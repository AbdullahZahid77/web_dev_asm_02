import React from 'react';

const SocialPost = () => {
    const userName = "John Michael"; // Example user name
    const postTime = "3 hours ago"; // Example time
    const postContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis voluptatem veritatis harum, tenetur, quibusdam voluptatum, incidunt saepe minus maiores ea atque sequi illo veniam sint quaerat corporis totam et. Culpa?"; // Example content

    return (
        <div className="bg-white shadow-lg rounded-lg p-4 max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2">
                <a href="#" className="text-gray-800 font-semibold text-lg">{userName}</a>
                <span className="text-gray-600 text-sm">{postTime}</span>
            </div>
            <p className="text-gray-700 mb-4">{postContent}</p>
            <div className="mb-4">
                <img 
                    src="https://via.placeholder.com/400x200" 
                    alt="Post placeholder" 
                    className="w-full h-auto rounded-md"
                />
            </div>
            <div className="flex justify-between mt-4">
                <button className="text-blue-500 font-semibold">Like</button>
                <button className="text-blue-500 font-semibold">Comment</button>
                <button className="text-blue-500 font-semibold">Share</button>
            </div>
        </div>
    );
};

export default SocialPost;
