const fetch = require('node-fetch');

async function deleteAllCards() {
  try {
    const response = await fetch('https://thebandteazebackend-production.up.railway.app/api/cards/delete-all', {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

deleteAllCards();