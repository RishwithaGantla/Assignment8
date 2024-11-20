import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LocationCard = ({ title, description, image }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        // Slide-in animation
        gsap.fromTo(
            cardRef.current,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1 }
        );
    }, []);

    return (
        <div
            ref={cardRef}
            style={{
                border: '2px solid #ff6347', // Tomato color
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
                margin: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                background: 'linear-gradient(135deg, #ffcc33, #ff6699)', // Bright gradient
                transition: 'transform 0.3s, box-shadow 0.3s',
                flex: '1 1 calc(33.333% - 32px)', // Flex properties for 3 cards per row
                boxSizing: 'border-box',
            }}
            onMouseEnter={() => {
                gsap.to(cardRef.current, {
                    scale: 1.05,
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                });
            }}
            onMouseLeave={() => {
                gsap.to(cardRef.current, {
                    scale: 1,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                });
            }}
        >
            <img
                src={image}
                alt={title}
                style={{ width: '100%', borderRadius: '8px' }}
            />
            <h2 style={{ color: '#333' }}>{title}</h2>
            <p style={{ color: '#555' }}>{description}</p>
        </div>
    );
};

const LocationCardGrid = ({ cards }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                margin: '-16px',
            }}
        >
            {cards.map((card, index) => (
                <LocationCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                />
            ))}
        </div>
    );
};

export default LocationCardGrid;