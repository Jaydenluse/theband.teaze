import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Xtras() {

    // brightness-50 and red/pink border when the card is discovered

    return (
        <>
            <Header />
                <div className="grid-container">
                    <img src="images/cards/card_1.JPG" alt="Card" className="card" />
                    <img src="images/cards/card_2.JPG" alt="Card" className="card" />
                    <img src="images/cards/card_3.JPG" alt="Card" className="card" />
                    <img src="images/cards/card_4.JPG" alt="Card" className="card" />
                    <img src="images/cards/card_5.JPG" alt="Card" className="card" />
                </div>
            <Footer videoLink='https://www.youtube.com/watch?v=FFlWJHOUhhs'/>
        </>
    );
}