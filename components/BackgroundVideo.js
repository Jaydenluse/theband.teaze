import { useEffect } from 'react';

export default function BackgroundVideo({ videoId, start, end }) {
  useEffect(() => {
    // This code loads the IFrame Player API code asynchronously.
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // This function creates an <iframe> (and YouTube player) after the API code downloads.
    let player;
    window.onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          loop: 1,
          playlist: videoId, // Required for looping, as per YouTube's API
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
              player.playVideo(); // Play again
            }
          }
        }
      });
    };

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, [videoId, start, end]);

  return (<div id="player" className="absolute top-0 left-0 w-full h-full">
    {/* The YouTube iframe will be inserted here by the YouTube API script */}
  </div>);
}