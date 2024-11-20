import React, { useState } from 'react';
import LocationCardTwo from './LocationCardTwo';
const LocationCardLayout = ({ cards }) => {
    const [selectedCard, setSelectedCard] = useState(cards[0]);

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ width: '25%', display: 'flex', flexDirection: 'column' }}>
                {cards.map((card, index) => (
                    <LocationCardTwo
                        key={index}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        onClick={() => setSelectedCard(card)}
                    />
                ))}
            </div>
            <div style={{ width: '75%', padding: '16px' }}>
                <LocationCardTwo
                    title={selectedCard.title}
                    description={selectedCard.description}
                    image={selectedCard.image}
                />
            </div>
        </div>
    );
};

export default LocationCardLayout;