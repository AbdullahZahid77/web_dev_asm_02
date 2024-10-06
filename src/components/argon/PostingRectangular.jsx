import React from 'react';

const PostingRectangular = () => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md w-1/2 mx-auto"> {/* 50% width and centered */}
            <div className="mb-4">
                <textarea
                    className="form-control w-full h-20 p-2 border border-gray-300 rounded-md"
                    placeholder="What's on your mind, Arthur?"
                ></textarea>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                    <button type="button" className="text-blue-500 hover:underline">
                        Photo/Video
                    </button>
                    <button type="button" className="text-blue-500 hover:underline">
                        Tag Friends
                    </button>
                    <button type="button" className="text-blue-500 hover:underline">
                        Check In
                    </button>
                </div>
                <button type="button" className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded-md">
                    Publish
                </button>
            </div>
        </div>
    );
};

export default PostingRectangular;
