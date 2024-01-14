import { useEffect, useRef } from 'react';

export default function BackgroundVideo({ videoId, start, end }) {
  // Use a ref to store the player instance
  const playerRef = useRef(null);

  useEffect(() => {
    // Function to create player
    const createPlayer = () => {
      if (playerRef.current) {
        // If player already exists, destroy it before creating a new one
        playerRef.current.destroy();
      }

      playerRef.current = new window.YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          loop: 1,
          playlist: videoId,
          fs: 0,
          cc_load_policy: 0,
          iv_load_policy: 3,
          autohide: 0,
          disablekb: 1,
          start: start,
          end: end,
          mute: 1 // Muting the video
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo(); // Play again
            }
          }
        }
      });
    };

    // Check if the YT script is already loaded
    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      // Load the IFrame Player API code asynchronously if not loaded
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // Set up the player once the script is loaded
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    // Cleanup function to destroy the player when the component unmounts
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId, start, end]);

  return <div id="player" className="absolute top-0 left-0 w-full h-full"></div>;
}