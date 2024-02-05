const fetch = require('node-fetch');

async function cleanupScores() {
  try {
    const response = await fetch('https://thebandteazebackend-production.up.railway.app/api/scores/cleanup', {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

cleanupScores();