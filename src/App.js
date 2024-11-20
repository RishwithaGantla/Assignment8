import React from 'react';
import LocationCard from './Components/LocationCard';
import LocationCardGrid from './Components/LocationCardGrid';
import Header from './Components/Header';
import Button from './Components/Button';
import LocationCardLayout from './Components/LocationComponent';

function App() {
  const cards = [
    {
      title: "Cappadocia, Turkey",
      description: "A stunning location with breathtaking views.",
      image: "https://example.com/cappadocia.jpg"
    },
    {
      title: "Albuquerque, USA",
      description: "Home of the International Balloon Fiesta.",
      image: "https://example.com/albuquerque.jpg"
    },
    {
      title: "Bagan, Myanmar",
      description: "A historic city with thousands of temples.",
      image: "https://example.com/bagan.jpg"
    },
    {
      title: "Luxor, Egypt",
      description: "Fly over the Valley of the Kings.",
      image: "https://example.com/luxor.jpg"
    },
    {
      title: "Napa Valley, USA",
      description: "Beautiful vineyards and rolling hills.",
      image: "https://example.com/napa.jpg"
    },
    {
      title: "Queenstown, New Zealand",
      description: "Stunning landscapes and adventure activities.",
      image: "https://example.com/queenstown.jpg"
    },
    {
      title: "Tuscany, Italy",
      description: "Picturesque countryside and charming villages.",
      image: "https://example.com/tuscany.jpg"
    },
    {
      title: "Yarra Valley, Australia",
      description: "Renowned wine region with scenic views.",
      image: "https://example.com/yarra.jpg"
    }, {
      title: "Château-d'Oex, Switzerland",
      description: "Host of the International Balloon Festival.",
      image: "https://example.com/chateau.jpg"
    }
  ];
  const cardsT = [
    {
        title: "Cappadocia, Turkey",
        description: "A stunning location with breathtaking views.",
        image: "gg.jpg"
    },
    {
        title: "Albuquerque, USA",
        description: "Home of the International Balloon Fiesta.",
        image: "gg1.jpg"
    },
    {
        title: "Bagan, Myanmar",
        description: "A historic city with thousands of temples.",
        image: "gg2.jpg"
    }
];
  return (
    <div>
      <Header />

      <h1  style={{
                border: '2px solid #ff6347', 
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
                margin: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                background: 'linear-gradient(135deg, #ffcc33, #ff6699)', 
                transition: 'transform 0.3s, box-shadow 0.3s',
            }}>Famous Hot Air Balloon Locations</h1>
      <LocationCard
        title="Cappadocia, Turkey"
        description="A stunning location with breathtaking views."
        image="https://example.com/cappadocia.jpg"
      />
      <LocationCard
        title="Albuquerque, USA"
        description="Home of the International Balloon Fiesta."
        image="https://example.com/albuquerque.jpg"
      />
      <Button color="primary" onClick={() => console.log('Button clicked!')}>
        Click Me
      </Button>

      <Button color="secondary" onClick={() => alert('Secondary button clicked!')}>
        Learn More
      </Button>
      <h1  style={{
                border: '2px solid #ff6347', 
                borderRadius: '12px',
                padding: '16px',
                textAlign: 'center',
                margin: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                background: 'linear-gradient(135deg, #ffcc33, #ff6699)',
                transition: 'transform 0.3s, box-shadow 0.3s',
            }}>All Hot Air Balloon Locations</h1>
      <LocationCardGrid cards={cards} />
      <LocationCardLayout cards={cardsT} />
    </div>
  );
}

export default App;
