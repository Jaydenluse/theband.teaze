import Header from "../components/Header";
import Footer from "../components/Footer";
import CardInput from "../components/CardInput";
import { useState, useEffect } from 'react';

export default function Extras() {
    const apiUrl = 'theband-teaze-backend.railway.internal';
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch(`${apiUrl}/api/cards`);
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
            const response = await fetch('http://localhost:5000/api/cards');
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
                        <span className="text-white ml-3"> Not Discovered</span>
                    </div>
                    <div className="key-item">
                        <div className="key-square bg-white brightness-50 border border-pink-500"></div>
                        <span className="text-white ml-3"> Discovered</span>
                    </div>
                </div>
                <div className="card-input-container flex">
                <CardInput updateCardState={updateCardState}/> 
                </div>
            </div>

                <div className="grid-container">
                {cards.map((card, index) => (
                    <img 
                        key={index} 
                        src={`images/cards/card_${index + 1}.JPG`} 
                        alt="Card" 
                        style={{
                            marginTop: '50px',
                            height: '200px',
                            width: '87%',
                            filter: card.found ? 'brightness(50%)' : '',
                            transition: 'filter 500ms ease',
                            borderStyle: 'solid',
                            borderWidth: '2px',
                            borderColor: card.found ? '#FF1493' : '#00FF00'
                        }} 
                    />
                ))}
                </div>
            <Footer videoLink='https://www.youtube.com/watch?v=FFlWJHOUhhs'/>
        </>
    );
}