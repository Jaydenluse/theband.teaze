import React, { useEffect, useState } from 'react';
import LinkModal from '../components/LinkModal';

const videoLinksMap = {
  'Copy Copy': [
    { title: 'Soundcloud', url: 'https://soundcloud.com/teaze-band/copy-copy', image: '/images/soundcloud.png'},
    { title: 'Spotify', url: 'https://open.spotify.com/track/6svh3u88qilvZAxI2D1tPy', image: '/images/spotify.png' }
    // ... other links
  ],
  'New Leaf': [
    { title: 'Soundcloud', url: 'https://soundcloud.com/teaze-band/copy-copy' },
    { title: 'Spotify', url: 'https://open.spotify.com/track/6svh3u88qilvZAxI2D1tPy' }
  ],
  // ... more mappings
};


export default function YouTubeVideoList() {
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null); // State to hold the currently active video

  useEffect(() => {
    fetch('/api/youtube')
      .then(response => response.json())
      .then(data => setVideos(data))
      .catch(error => console.error('Error fetching videos:', error));
  }, []);

  const handleVideoClick = (video) => {
    setActiveVideo({
      ...video,
      links: videoLinksMap[video.snippet.title] || [] 
    });
    setModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveVideo(null); // Clear the active video
  };

  return (
    <>
      <div className="video-list-container pt-10">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-container" onClick={() => handleVideoClick(video)}>
            <div
              className="image-crop-container cursor-pointer"
              style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}
            ></div>
            <h3 className="video-title text-xl font-bold text-white p-4">
              {video.snippet.title}
            </h3>
          </div>
        ))}
      </div>
      {activeVideo && ( // Only render the LinkModal if there is an active video
        <LinkModal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          video={activeVideo} // Pass the active video to the modal
        />
      )}
    </>
  );
}