// pages/index.js
import Header from '../components/Header.js';
import BackgroundVideo from '../components/BackgroundVideo.js';


export default function Home() {
  const defaultVideoId = '0XcYmx57aD0';

  return (
    <>
      <Header/>
      {/* The z-index of the text container is higher than that of the video container */}
      <div className="absolute flex flex-col items-start justify-center p-4 min-h-screen z-20 pl-10">
        <header className="text-center">
          <h1 className="text-white text-8xl font-extrabold">
            teaze.
          </h1>
        </header>
      </div>
      <div className="bg-video-container min-h-screen z-10">
        <BackgroundVideo videoId={defaultVideoId} start={140} end={280} />
        </div>
    </>
  );
}