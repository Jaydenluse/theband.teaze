import React, { useEffect, useState } from 'react';

function YouTubeVideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('/api/youtube')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  return (
    <div className="video-list-container pt-10">
      {videos.map(video => (
        <div key={video.id.videoId} className="video-container">
          <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`} target="_blank" rel="noopener noreferrer">
            <div
              className="image-crop-container"
              style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}
            ></div>
          </a>
          <h3 className="text-xl font-bold text-white p-4">
            {video.snippet.title}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default YouTubeVideoList;