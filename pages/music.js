import YouTubeVideoList from '../components/YoutubeVideoList';
import bgImage from '../images/teaze-bg.png';

export default function Music() {
  return (
    <div className="relative min-h-screen flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${bgImage.src})` }}>
      <div className="absolute inset-0 m-auto h-full w-1/2 bg-black"></div> {/* Black vertical line */}
        <div className="z-10"> {/* Ensures content is above the line */}
            <YouTubeVideoList />
        </div>
      </div>
  );
}