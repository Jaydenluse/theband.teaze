import React, { useState } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

export default function Contact() {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic here
        console.log('Submitted: ', contactInfo);
        // Reset form after submit
        setContactInfo({ name: '', email: '', message: '' });
    };

    return (
        <>
            <Header />
            <div className="contact-container p-10">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-white text-sm font-bold mb-2 mt-10">Name:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={contactInfo.name} 
                            onChange={handleInputChange} 
                            required 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
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
                        <button type="submit" className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}