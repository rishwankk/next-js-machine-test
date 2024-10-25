import React from 'react';
import Card from './CardComponent';

const cards = [
    {
        number: 1,
        title: "Lorem ipsum dolor sit amet, consectetur",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Puru luctus molestie viverra vitae mattis. Pellentesque sociis elit lorem et varius ipsum dictum."
    },
    {
        number: 2,
        title: "Lorem ipsum dolor sit amet, consectetur",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Puru luctus molestie viverra vitae mattis. Pellentesque sociis elit lorem et varius ipsum dictum."
    },
    {
        number: 3,
        title: "Lorem ipsum dolor sit amet, consectetur",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Puru luctus molestie viverra vitae mattis. Pellentesque sociis elit lorem et varius ipsum dictum."
    }
];

const TextCard = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16">
            {/* Section Title */}
            <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-4">Lorem Ipsum</h2>
                <p className="text-gray-600 max-w-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac
                    habitasse platea dictumst. Fusce non venenatis velit. Puru luctus molestie.
                </p>
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card, index) => (
                    <Card
                        key={card.number}
                        number={card.number}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default TextCard;
