import React, { useEffect, useState } from 'react';
import Toast from './Toast'; 

const CardInput = ({ updateCardState, onPrizeWin, code: codeFromURL }) => {
  const [code, setCode] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (codeFromURL) {
      checkCode(codeFromURL);
    }
  }, [codeFromURL]);

  const checkCode = async (code) => {
    try {
      const response = await fetch(`https://thebandteazebackend-production.up.railway.app/api/check-code`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (data.match) {
        console.log(`Code matched. Prize: ${data.prize}`);
        updateCardState(true);
        setShowToast(true);
        setToastMessage(data.message);
        setTimeout(() => setShowToast(false), 3000);
        updateCardState();
  
        if (data.prize) {
          onPrizeWin(true); 
        }
      } else if (data.found) {
        setShowToast(true);
        setToastMessage('This code has already been used.');
        setTimeout(() => setShowToast(false), 3000);
      } else {
        setShowToast(true);
        console.log(data.message);
        setToastMessage(data.message);
        setTimeout(() => setShowToast(false), 3000);
      }
    } catch (error) {
      console.error('Error checking code:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    await checkCode(code);
  };

  const handleInputChange = (event) => {
    let { value } = event.target;
    value = value.replace(/[^a-zA-Z0-9]/g, '');
  
    let newValue = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        newValue += '-';
      }
      newValue += value[i];
    }
  
    setCode(newValue.toUpperCase());
  };

  return (
    <>
      <input
        type="text"
        id="cardCode"
        name="cardCode"
        placeholder="Enter unique code"
        value={code}
        onChange={handleInputChange}
        maxLength="19"
        className="text-black p-2 rounded-l w-full focus:outline-none flex-grow flex-shrink"
        />
        <button 
          type="submit" 
          onClick={handleSubmit} 
          className="bg-gray-700 hover:bg-pink-700 transition duration-300 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline sm:py-1 sm:px-3"
        >
        Submit
      </button>    
      <Toast show={showToast} message={toastMessage} />
      </>
  );
};

export default CardInput;