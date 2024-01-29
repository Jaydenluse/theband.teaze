import Header from "../components/Header";
import Footer from "../components/Footer";
import CardInput from "../components/CardInput";
import SnakeModal from "../components/SnakeModal";
import { useState, useEffect } from 'react';

export default function Extras() {
    const [cards, setCards] = useState([]);
    const [showPrizeModal, setShowPrizeModal] = useState(false);

    const handleShowPrizeModal = (show) => {
    setShowPrizeModal(show);
    };

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch(`https://thebandteazebackend-production.up.railway.app/api/getcards`);
                const data = await response.json();
                setCards(data);
            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        };

        fetchCards();
    }, []);

    // Function to update card state
    const updateCardState = async () => {
        try {
            const response = await fetch('https://thebandteazebackend-production.up.railway.app/api/getcards');
            const data = await response.json();
            setCards(data);
        } catch (error) {
            console.error('Error fetching updated cards:', error);
        }
    };

    // brightness-50 and red/pink border when the card is discovered

    return (
        <>
            <Header />

            <div className="key-container flex flex-col items-start">
                <div className="card-input-container flex">
                <CardInput updateCardState={updateCardState} onPrizeWin={handleShowPrizeModal} />
                </div>
            </div>

            <div className="grid-container">
                {cards.map((card, index) => (
                    <div key={index} className="card-container" style={{ position: 'relative', display: 'inline-block', margin: '25px' }}>
                        <img 
                        key={index} 
                        src={`images/cards/card_${index + 1}.JPG`} 
                        alt={`Card ${index + 1}`} 
                        className={`card-style ${card.found ? 'card-found' : 'card-not-found'}`} 
                        />
                        {card.found && (
                            <img src='images/found.PNG' alt="Found" className='found-image'/>
                        )}
                    </div>
                ))}
            </div>
            <SnakeModal 
              isOpen={showPrizeModal} 
              onClose={() => setShowPrizeModal(false)}
            >
                <input
                    type="text"
                    placeholder="Enter Email"
                    style={{
                        backgroundColor: 'black',
                        color: 'lime',
                        border: '2px solid lime',
                        outline: 'none',
                        padding: '10px',
                        width: '200px',
                        borderRadius: '5px',
                        fontSize: '16px',
                        textAlign: 'center',
                        transition: 'background-color 0.3s ease',
                        '::placeholder': {
                            color: 'rgba(255, 255, 255, 0.5)'
                        },
                        ':focus': {
                            backgroundColor: '#32CD32'  
                        }
                    }}
                />
                    <p style={{ color: 'lime', fontSize: '12px', marginTop: '10px' }}>
                        Press 'Enter' to submit
                    </p>
            </SnakeModal>
            <Footer videoLink='https://www.youtube.com/watch?v=FFlWJHOUhhs'/>
        </>
    );
}