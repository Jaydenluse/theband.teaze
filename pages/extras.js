import Header from "../components/Header";
import Footer from "../components/Footer";
import CardInput from "../components/CardInput";
import SnakeModal from "../components/SnakeModal";
import CardModal from "../components/CardModal";
import { useState, useEffect } from 'react';

export default function Extras() {
    const [cards, setCards] = useState([]);
    const [email, setEmail] = useState('');
    const [showPrizeModal, setShowPrizeModal] = useState(false);
    const [selectedCardIndex, setSelectedCardIndex] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        console.log("Sending email:", email);
        setShowPrizeModal(false); // Close modal after email is sent
        try {
            const response = await fetch('https://thebandteazebackend-production.up.railway.app/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: 'T-Shirt Winner', email, message: 'I won a prize in the game!' })
            });
            if (!response.ok) throw new Error('Email submission failed');
            console.log("Email sent successfully");
        } catch (error) {
            console.error('Error:', error);
        }
        setEmail(''); // Reset email state
    };

    const handleShowPrizeModal = (show) => {
    setShowPrizeModal(show);
    };

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch(`https://thebandteazebackend-production.up.railway.app/api/getcards`);
                const data = await response.json();
                setCards(data.map((card, index) => ({ ...card, index })));;
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
            setCards(data.map((card, index) => ({ ...card, index })));;
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
                        onClick={() => setSelectedCardIndex(index)}
                        style={{ cursor: 'pointer' }}
                    />
                    {card.found && (
                        <img src='images/found.PNG' alt="Found" className='found-image' />
                    )}
                        <div className="remaining-codes">{card.remainingCodes}/50</div>
                    </div>
                ))}
            </div>
            <CardModal
                card={selectedCardIndex !== null ? cards[selectedCardIndex] : null}
                onClose={() => setSelectedCardIndex(null)}
            />
            <SnakeModal 
                isOpen={showPrizeModal} 
                onClose={() => setShowPrizeModal(false)}
            >
                <form onSubmit={handleEmailSubmit}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter Email"
                        style={{
                            backgroundColor: 'black',
                            color: 'lime',
                            border: '2px solid lime',
                            borderTopLeftRadius: '5px',
                            borderBottomLeftRadius: '5px',
                            outline: 'none',
                            padding: '10px',
                            width: '200px',
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
                    <button 
                        type="submit" 
                        style={{ 
                            backgroundColor: 'black',
                            color: 'lime',
                            border: '2px solid lime',
                            borderTopRightRadius: '5px',
                            borderBottomRightRadius: '5px',
                            padding: '10px',
                            fontSize: '16px',
                            transition: 'background-color 0.3s ease',
                            cursor: 'pointer',
                            height: '100%', // Match the height of the input
                            marginLeft: '-2px' // Align border with input
                        }}>
                        Submit
                    </button>
                </div>
                </form>
            </SnakeModal>
            <Footer videoLink='https://www.youtube.com/watch?v=FFlWJHOUhhs'/>
        </>
    );
}