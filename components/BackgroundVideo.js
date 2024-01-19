export default function BackgroundVideo({ videoId, start, end }) {
  const videoUrl = `https://www.youtube.com/embed/${videoId}?start=${start}&end=${end}&autoplay=1&mute=1&loop=100000`;

  return (
    <iframe 
      width="560" 
      height="315" 
      src={videoUrl}
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  );
}