import React from 'react';
import { Button } from '@mui/material';

const LocationCardTwo = ({ title, description, image, onClick }) => {
    return (
        <div
            style={{
                border: '2px solid #ff6347', // Tomato color
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
                margin: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                background: 'linear-gradient(135deg, #ffcc33, #ff6699)', // Bright gradient
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
            }}
            onClick={onClick}
        >
            <img
                src={image}
                alt={title}
                style={{ width: '100%', borderRadius: '8px' }}
            />
            <h2 style={{ color: '#333' }}>{title}</h2>
            <p style={{ color: '#555' }}>{description}</p>
            <Button color="primary" onClick={() => alert(`Explore ${title}`)}>
                Explore
            </Button>
        </div>
    );
};

export default LocationCardTwo;