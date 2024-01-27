import React, { useState } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Toast from '../components/Toast.js';

export default function Contact() {
    const [showToast, setShowToast] = useState(false);
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        message: ''
    });

    const musicVideoId = '0XcYmx57aD0';

    const handleInputChange = (e) => {
        setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sending contact info:", contactInfo);
    
        fetch('https://thebandteazebackend-production.up.railway.app/api/send-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(contactInfo)
        })
        .then(response => {
            console.log("Response status:", response.status);
            return response.json();
        })
        .then(data => {
            console.log("Response data:", data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
        setShowToast(true); // Show toast on success
        setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
        setContactInfo({ name: '', email: '', message: '' });
    };

    return (
        <>
            <Toast show={showToast} message="Message sent!" />
            <Header />

            <div className="absolute w-full h-full z-0" style={{ height: '100vh', width: '100vw' }}>
                <img src="images/contact.gif" alt="Background" className="h-full w-full object-cover" />
            </div>

            <div className="relative z-10 min-h-screen" style={{ width: '100vw' }}>
            <div className="contact-container absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <div className="absolute bg-black bg-opacity-75 mt-10 border-2 border-pink-700 max-w-full p-5 rounded-md custom-size"></div>
                <div className="relative z-20" style={{width: '100%'}}>
                        <h2 className="contact-text">Connect with Teaze</h2>
                        <p className="contact-text-large">We love hearing from our fans and collaborators. Whether it's about booking us for a gig, inquiring about our latest tracks, or just saying hi, drop us a message!</p>
                        <p className="contact-text-small">...snake game improvements/suggestions also welcome.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="z-20" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-white text-sm font-bold mb-2 name ">Name:</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={contactInfo.name} 
                                onChange={handleInputChange} 
                                required 
                                className="flex flex-col items-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-white text-sm font-bold mb-2">Email:</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={contactInfo.email} 
                                onChange={handleInputChange} 
                                required 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-white text-sm font-bold mb-2">Message:</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                value={contactInfo.message} 
                                onChange={handleInputChange} 
                                required 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="submit" className="bg-gray-700 hover:bg-pink-700 transition duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer videoLink='https://www.youtube.com/watch?v=FFlWJHOUhhs'/>
        </>
    );
}