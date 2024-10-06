import React from 'react';

const Special = () => {
    const specialsList = [
        "Unde praesentium sed",
        "Pariatur explicabo vel",
        "Nostrum qui quasi",
        "Iusto ut expedita aut",
    ];

    return (
        <div className="bg-black text-white p-10">
            <h2 className="text-4xl font-bold mb-5">Check Our Specials</h2>
            <div className="flex">
                <div className="w-1/3 pr-5">
                    <h3 className="bg-gold text-black p-2 mb-4">Modi sit est</h3>
                    <ul className="list-disc pl-5">
                        {specialsList.map((special, index) => (
                            <li key={index} className="mb-2">{special}</li>
                        ))}
                    </ul>
                </div>
                <div className="w-2/3">
                    <h3 className="text-2xl font-bold mb-2">Architecto ut aperiam autem id</h3>
                    <p className="mb-4">
                        Qui laudantium consequuntur laborum sit qui ad sapiente dila parde sonata raquer a videna mareta paulona marka.
                    </p>
                    <p className="mb-4">
                        Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero.
                    </p>
                    <img 
                        src="https://via.placeholder.com/300" // Replace with actual image URL
                        alt="Special Dish" 
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Special;
