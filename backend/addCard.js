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
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${response.status} ${response.statusText}\nResponse: ${errorText}`);
    }

    const data = await response.json();
    console.log('Card added:', data);
  } catch (error) {
    console.error('Failed to add card:', error);
  }
};

addCard('F1C5', false, false);
addCard('2D8B', false, false);
addCard('K9H1', false, false);
addCard('S6T8', false, false);
addCard('A7B5', false, false);
addCard('J3K7', false, false);
addCard('T6U8', false, false);
addCard('B5C7', false, false);
addCard('K3L7', false, false);
addCard('V6W8', false, false);
addCard('C5D7', false, false);
addCard('L3M7', false, false);
addCard('U6V8', false, false);
addCard('D5E7', false, false);
addCard('M3N7', false, false);
addCard('V6W8', false, false);
addCard('E5F7', false, false);
addCard('N3P7', false, false);
addCard('W6X8', false, false);
addCard('F5G7', false, false);
addCard('P3Q7', false, false);
addCard('G5H7', false, false);
addCard('Q3R7', false, false);
addCard('H5J7', false, false);
addCard('R3S7', false, false);
addCard('J5K7', false, false);
addCard('S3T7', false, false);
addCard('K5L7', false, false);
addCard('T3U7', false, false);
addCard('L5M7', false, false);
addCard('U3V7', false, false);
addCard('M5N7', false, false);
addCard('V3W7', false, false);
addCard('N5P7', false, false);
addCard('W3X7', false, false);
addCard('P5Q7', false, false);
addCard('X3Y7', false, false);
addCard('Q5R7', false, false);
addCard('Y3Z7', false, false);
addCard('R5S7', false, false);
addCard('Z3A7', false, false);
addCard('S5T7', false, false);
addCard('A3B7', false, false);
addCard('T5U7', false, false);
addCard('B3C7', false, false);
addCard('U5V7', false, false);
addCard('C3D7', false, false);
addCard('V5W7', false, false);
addCard('D3E7', false, false);
addCard('W5X7', false, false);

