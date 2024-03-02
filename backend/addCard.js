const fetch = require('node-fetch'); 

const addCard = async (code, prize, found) => {
  try {
    const response = await fetch('https://thebandteazebackend-production.up.railway.app/api/cards', {
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
addCard('91A2-7B26-E7D5-9A44', false, false);
addCard('0E2D-EE1F-7CBC-38B5', false, false);
addCard('6838-3150-A0E3-BBD9', false, false);
addCard('9499-DD19-FAB6-05E4', false, false);
addCard('7818-DF06-D1AD-D8CA', false, false);
addCard('1318-1077-B0BF-301E', false, false);
addCard('60E6-3381-BD9E-8FEA', false, false);
addCard('C152-CA92-2EC7-1DB9', false, false);
addCard('EB42-B606-B58D-A130', false, false);
addCard('BF66-9DEC-EC6A-6225', false, false);
addCard('F732-D67A-02CC-7172', false, false);
addCard('5E08-16D9-BDB6-7397', false, false);
addCard('68CF-38C1-2111-9BC8', false, false);
addCard('A26A-096F-E910-16DD', false, false);
addCard('A549-9474-7F08-0959', false, false);
addCard('09AD-C181-45AB-9602', false, false);
addCard('BCD3-14DC-4522-1C83', false, false);
addCard('961E-B519-E7BF-D3F0', false, false);
addCard('289B-0127-71CE-EF69', false, false);
addCard('985A-B126-D67F-667A', false, false);
addCard('E8D6-2212-11F4-3C30', false, false);
addCard('8DC2-B931-BE5A-3346', false, false);
addCard('4A39-51FA-F214-3C99', false, false);
addCard('0294-B2FA-E073-F0A0', false, false);
