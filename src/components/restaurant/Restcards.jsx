import React from 'react';

const Restcards = () => {
    const cards = [
        {
            number: "01",
            title: "Lorem Ipsum",
            description: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat."
        },
        {
            number: "02",
            title: "Repellat Nihil",
            description: "Dolorem est fugiat occaecati voluptatibus. Dicta veritatis dolor quod et vel dire leno para dest."
        },
        {
            number: "03",
            title: "Ad ad velit qui",
            description: "Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis."
        },
    ];

    return (
        <div className="bg-black text-white p-10">
            <h2 className="text-4xl font-bold text-center mb-8">Why Choose Our Restaurant</h2>
            <div className="flex justify-around">
                {cards.map((card, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-6 w-64 shadow-lg">
                        <h3 className="text-2xl font-bold">{card.number}</h3>
                        <h4 className="text-xl font-semibold mt-2">{card.title}</h4>
                        <p className="mt-2">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Restcards;
