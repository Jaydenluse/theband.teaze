// pages/index.js
import Header from '../components/Header.js';
import Footer from '../components/Footer.js'
import BackgroundVideo from '../components/BackgroundVideo.js';


export default function Home() {
  const defaultVideoId = '0XcYmx57aD0';

  return (
    <>
      <Header/>
      <Footer videoLink='https://www.youtube.com/watch?v=0XcYmx57aD0'/>
      <div className="absolute flex flex-col items-start justify-center p-4 min-h-screen z-20 pl-10">
        <header className="text-center">
          <h1 className="text-white text-8xl font-extrabold">
            <img src="images/teaze.gif" alt="Teaze" />
          </h1>
        </header>
      </div>
      <div className="bg-video-container min-h-screen z-10">
        <BackgroundVideo videoId={defaultVideoId} start={120} end={240} />
        </div>
    </>
  );
}