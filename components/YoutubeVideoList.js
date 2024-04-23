import React, { useEffect, useState } from 'react';
import LinkModal from '../components/LinkModal';

const videoLinksMap = {
  'Lucas': [
    { title: 'Spotify', url: 'https://open.spotify.com/album/1IY6jkqTXjL1dUDw1scF3L', image: '/images/spotify.png' },
    { title: 'Soundcloud', url: 'https://soundcloud.com/teaze-band/sets/lucas', image: '/images/soundcloud.png'},
    { title: 'Youtube', url: 'https://www.youtube.com/watch?v=1Ft-BXKw7mk&list=OLAK5uy_lYoMEjn86rv_KV7ifHUAg2c18yOmyZ0ic', image: '/images/youtube.png' },
    { title: 'Bandcamp', url: 'https://teaze.bandcamp.com/album/lucas', image: '/images/bandcamp.png' },
    { title: 'Pandora', url: 'https://www.pandora.com/artist/teaze/lucas/ALt5PrlJXnn4wJZ', image: '/images/pandora.png' },
    { title: 'Apple', url: 'https://music.apple.com/us/album/lucas-ep/1742585272', image: '/images/apple.png' }
  ],
  'New Leaf': [
    { title: 'Spotify', url: 'https://open.spotify.com/track/6JS5Hs8QDJ5DIstkjs2bEN', image: '/images/spotify.png' },
    { title: 'Soundcloud', url: 'https://soundcloud.com/teaze-band/new-leaf', image: '/images/soundcloud.png'},
    { title: 'Youtube', url: 'https://www.youtube.com/watch?v=kDo-SQhQFkI', image: '/images/youtube.png' },
    { title: 'Bandcamp', url: 'https://teaze.bandcamp.com/track/new-leaf', image: '/images/bandcamp.png' },
    { title: 'Pandora', url: 'https://www.pandora.com/artist/teaze/new-leaf/new-leaf/TRcKt66zKrKgqj4', image: '/images/pandora.png' },
    { title: 'Apple', url: 'https://music.apple.com/us/album/new-leaf/1688949429?i=1688949430', image: '/images/apple.png' }
  ],
  'Copy Copy': [
    { title: 'Spotify', url: 'https://open.spotify.com/track/6svh3u88qilvZAxI2D1tPy', image: '/images/spotify.png' },
    { title: 'Soundcloud', url: 'https://soundcloud.com/teaze-band/copy-copy', image: '/images/soundcloud.png'},
    { title: 'Youtube', url: 'https://www.youtube.com/watch?v=YM7DNQ4oyfk', image: '/images/youtube.png' },
    { title: 'Bandcamp', url: 'https://teaze.bandcamp.com/track/copy-copy', image: '/images/bandcamp.png' },
    { title: 'Pandora', url: 'https://www.pandora.com/artist/teaze/copy-copy/copy-copy/TRx9td7zZXbpbXP', image: '/images/pandora.png' },
    { title: 'Apple', url: 'https://music.apple.com/us/album/copy-copy/1725708961?i=1725708962', image: '/images/apple.png' }
    // ... other links
  ]
};

const albums = [
  { id: 1, title: 'Lucas', imageUrl: '/images/lucas.jpg' },
  { id: 2, title: 'New Leaf', imageUrl: '/images/newleaf.jpg' },
  { id: 3, title: 'Copy Copy', imageUrl: '/images/copycopy.jpg' },
  // ... other albums
];


const AlbumComponent = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeAlbum, setActiveAlbum] = useState(null);

  const handleAlbumClick = (album) => {
    const albumWithLinks = {
      ...album,
      links: videoLinksMap[album.title] || [] 
    };
    setActiveAlbum(albumWithLinks);
    setModalOpen(true); 
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setActiveAlbum(null); 
  };

  return (
    <>
      <div className="album-list-container flex flex-wrap justify-center">
        {albums.map((album) => (
          <div key={album.id} className="album-container pt-8 mx-4" onClick={() => handleAlbumClick(album)}>
            <div
              className="image-crop-container cursor-pointer"
              style={{ backgroundImage: `url(${album.imageUrl})` }}
            ></div>
            <h3 className="album-title font-bold text-white p-3 text-center">
              {album.title}
            </h3>
          </div>
        ))}
      </div>
      {activeAlbum && (
        <LinkModal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          album={activeAlbum}
        />
      )}
    </>
  );
};

export default AlbumComponent;