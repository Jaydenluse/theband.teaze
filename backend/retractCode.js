// retractCodes.js
const fetch = require('node-fetch');

const retractCode = async (code) => {
  try {
    const response = await fetch('https://thebandteazebackend-production.up.railway.app/api/retract-code', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Network response was not ok: ${response.status} ${response.statusText}\nResponse: ${errorText}`);
    }

    const data = await response.json();
    console.log('Code retracted:', data.message);
  } catch (error) {
    console.error('Failed to retract code:', error);
  }
};

// Example usage
retractCode('F1C5-HNFB-HEI4-C7U4');