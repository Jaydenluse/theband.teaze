import Header from '../components/Header';
import YouTubeVideoList from '../components/YouTubeVideoList';
import BackgroundVideo from '../components/BackgroundVideo';

export default function Music() {
  const musicVideoId = 'FFlWJHOUhhs';

  return (
    <>
      <Header videoId={musicVideoId} />
      <div className="relative min-h-screen">
        <div className="bg-video-container z-10 ">
          <BackgroundVideo videoId={musicVideoId} start={140} end={280} />
        </div>
        <div className="video-list-container absolute top-0 left-0 w-full h-full z-20 pr-30 absolute flex flex-col items-start justify-center">
          <YouTubeVideoList />
        </div>
      </div>
    </>
  );
}