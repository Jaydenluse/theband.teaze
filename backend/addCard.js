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

addCard('F1C5-8E3A-D9B2-4G7H', false, false);
addCard('2D8B-9C4E-1F60-7A5J', false, false);
addCard('K9H1-L3M7-N5P2-Q8R4', false, false);
addCard('S6T8-U0V2-W4X9-Y1Z3', false, false);
addCard('A7B5-C2D8-E9F1-G4H6', false, false);
addCard('J3K7-L1M9-N5P2-Q8R4', false, false);
addCard('T6U8-V0W2-X4Y9-Z1A3', false, false);
addCard('B5C7-D2E8-F9G1-H4J6', false, false);
addCard('K3L7-M1N9-P5Q2-R8S4', false, false);
addCard('V6W8-X0Y2-Z4A9-B1C3', false, false);
addCard('C5D7-E2F8-G9H1-J4K6', false, false);
addCard('L3M7-N1P9-Q5R2-S8T4', false, false);
addCard('U6V8-W0X2-Y4Z9-A1B3', false, false);
addCard('D5E7-F2G8-H9J1-K4L6', false, false);
addCard('M3N7-P1Q9-R5S2-T8U4', false, false);
addCard('V6W8-X0Y2-Z4A9-B1C3', false, false);
addCard('E5F7-G2H8-J9K1-L4M6', false, false);
addCard('N3P7-Q1R9-S5T2-U8V4', false, false);
addCard('W6X8-Y0Z2-A4B9-C1D3', false, false);
addCard('F5G7-H2J8-K9L1-M4N6', false, false);
addCard('P3Q7-R1S9-T5U2-V8W4', false, false);
addCard('G5H7-J2K8-L9M1-N4P6', false, false);
addCard('Q3R7-S1T9-U5V2-W8X4', false, false);
addCard('H5J7-K2L8-M9N1-P4Q6', false, false);
addCard('R3S7-T1U9-V5W2-X8Y4', false, false);
addCard('J5K7-L2M8-N9P1-Q4R6', false, false);
addCard('S3T7-U1V9-W5X2-Y8Z4', false, false);
addCard('K5L7-M2N8-P9Q1-R4S6', false, false);
addCard('T3U7-V1W9-X5Y2-Z8A4', false, false);
addCard('L5M7-N2P8-Q9R1-S4T6', false, false);
addCard('U3V7-W1X9-Y5Z2-A8B4', false, false);
addCard('M5N7-P2Q8-R9S1-T4U6', false, false);
addCard('V3W7-X1Y9-Z5A2-B8C4', false, false);
addCard('N5P7-Q2R8-S9T1-U4V6', false, false);
addCard('W3X7-Y1Z9-A5B2-C8D4', false, false);
addCard('P5Q7-R2S8-T9U1-V4W6', false, false);
addCard('X3Y7-Z1A9-B5C2-D8E4', false, false);
addCard('Q5R7-S2T8-U9V1-W4X6', false, false);
addCard('Y3Z7-A1B9-C5D2-E8F4', false, false);
addCard('R5S7-T2U8-V9W1-X4Y6', false, false);
addCard('Z3A7-B1C9-D5E2-F8G4', false, false);
addCard('S5T7-U2V8-W9X1-Y4Z6', false, false);
addCard('A3B7-C1D9-E5F2-G8H4', false, false);
addCard('T5U7-V2W8-X9Y1-Z4A6', false, false);
addCard('B3C7-D1E9-F5G2-H8J4', false, false);
addCard('U5V7-W2X8-Y9Z1-A4B6', false, false);
addCard('C3D7-E1F9-G5H2-J8K4', false, false);
addCard('V5W7-X2Y8-Z9A1-B4C6', false, false);
addCard('D3E7-F1G9-H5J2-K8L4', false, false);
addCard('W5X7-Y2Z8-A9B1-C4D6', false, false);

