const fetch = require('node-fetch');

const addCard = async (basecode, prize, found) => {
  try {
    const response = await fetch('https://thebandteazebackend-production.up.railway.app/api/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ basecode, prize, found }),
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
addCard('F1C5-8E3A-D9B2-4G7H', false, false);
addCard('2D8B-9C4E-1F60-7A5J', false, false);
// ... Add the remaining cards
