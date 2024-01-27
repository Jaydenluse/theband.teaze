const fetch = require('node-fetch'); // Only needed if running in Node.js

const addCard = async (code, prize, found) => {
  try {
    const response = await fetch('http://localhost:5000/api/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code, prize, found }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Card added:', data);
  } catch (error) {
    console.error('Failed to add card:', error);
  }
};

// Example usage
addCard('IX1R-39D7-T4LM-MX9U', false, false); 
addCard('YVAD-U2DK-RBD2-OJ5W', false, false);
addCard('PYOO-IGPK-IHYR-HXW3', false, false);
addCard('OX3L-7YFR-CDZA-D8P5', false, false);
addCard('IEEI-6V0J-748O-QOZ0', false, false);
