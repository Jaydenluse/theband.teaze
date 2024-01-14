// pages/index.js
import Header from '../components/Header';
import BackgroundVideo from '../components/BackgroundVideo';

export default function Home() {
  return (
    <div className="bg-video-container min-h-screen">
      <BackgroundVideo videoId="0XcYmx57aD0" start={120} end={240} />

      <Header />

      <div className="relative z-20 flex flex-col items-center justify-center p-4 min-h-screen">
        {/* Page-specific content */}
        <header className="text-center">
          <h1 className="text-white text-6xl font-extrabold">
            teaze
          </h1>
        </header>
      </div>
    </div>
  );
}