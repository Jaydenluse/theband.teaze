import Header from "../components/Header";
import Footer from "../components/Footer";
import CardInput from "../components/CardInput";
import { useState, useEffect } from 'react';

export default function Extras() {
    const [cards, setCards] = useState([]);

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
    const updateCardState = async () => {s
        try {
            const response = await fetch('http://localhost:5000/api/getcards');
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
                <div className="flex mb-4">
                    <div className="key-item ml-10">
                        <div className="discovered-key-square bg-white border border-green-"></div>
                        <span className="text-white ml-3"> Not Found</span>
                    </div>
                    <div className="key-item">
                        <div className="key-square bg-white brightness-50 border border-pink-500"></div>
                        <span className="text-white ml-3"> Found</span>
                    </div>
                </div>
                <div className="card-input-container flex">
                <CardInput updateCardState={updateCardState}/> 
                </div>
            </div>

            <div className="grid-container">
                {cards.map((card, index) => (
                    <div key={index} className="card-container" style={{ position: 'relative', display: 'inline-block', margin: '25px' }}>
                        <img 
                            src={`images/cards/card_${index + 1}.JPG`} 
                            alt={`Card ${index + 1}`}
                            style={{
                                height: '200px',
                                width: '87%',
                                filter: card.found ? 'brightness(50%)' : '',
                                transition: 'filter 500ms ease',
                                borderStyle: 'solid',
                                borderWidth: '2px',
                                borderColor: card.found ? '#FF1493' : '#00FF00'
                            }} 
                        />
                        {card.found && (
                            <span style={{
                                position: 'absolute',
                                top: '52%',
                                left: '43%',
                                transform: 'translate(-50%, -50%)',
                                color: '#d6007c',
                                fontWeight: 'bold',
                                fontSize: '65px',
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
                            }}>
                                FOUND
                            </span>
                        )}
                    </div>
                ))}
            </div>

            <Footer videoLink='https://www.youtube.com/watch?v=FFlWJHOUhhs'/>
        </>
    );
}