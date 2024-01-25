import Header from "../components/Header";
import Footer from "../components/Footer";
import CardInput from "../components/CardInput";

export default function Extras() {

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
                <CardInput/> 
               <button type="submit" className="bg-gray-700 hover:bg-pink-700 transition duration-300 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline">Submit</button>
                </div>
            </div>

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