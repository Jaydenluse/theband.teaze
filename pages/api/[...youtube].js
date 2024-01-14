// pages/api/[...youtube].js
import axios from 'axios';

export default async function handler(req, res) {
  const YOUTUBE_API_KEY = 'AIzaSyDRxQHOLE54PsM_47dymXWH_dcCBWVJSV8'; 
  const CHANNEL_ID = 'UCveg4CC1ZBqGbAM452qauow';

  try {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        part: 'snippet',
        channelId: CHANNEL_ID,
        maxResults: 10,
        order: 'date',
        type: 'video',
        key: YOUTUBE_API_KEY
      }
    });
    res.status(200).json(response.data.items);
  } catch (error) {
    console.error('YouTube API Error:', error.message);
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Data:', error.response.data);
      console.error('Status:', error.response.status);
      console.error('Headers:', error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error:', error.message);
    }
    res.status(500).json({ message: 'Error fetching YouTube videos' });
  }
}