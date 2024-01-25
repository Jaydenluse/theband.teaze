import React, { useState } from 'react';

const CardInput = () => {
  const [cardCode, setCardCode] = useState('');

  const handleInputChange = (event) => {
    let { value } = event.target;
    // Remove all non-numeric and non-alphabetic characters
    value = value.replace(/[^a-zA-Z0-9]/g, '');
  
    // Insert dash after every 4 characters
    let newValue = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        newValue += '-';
      }
      newValue += value[i];
    }
  
    setCardCode(newValue.toUpperCase());
  };

  return (
    <input
      type="text"
      id="cardCode"
      name="cardCode"
      placeholder="Enter unique code"
      value={cardCode}
      onChange={handleInputChange}
      maxLength="19"
      className="text-black p-2 rounded-l w-full focus:outline-none flex-grow flex-shrink"
    />
  );
};

export default CardInput;