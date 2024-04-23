import Header from '../components/Header.js';
import Footer from '../components/Footer.js'
import YoutubeVideoList from '../components/YoutubeVideoList.js';

export default function Music() {

  return (
    <>
      <Header/>
      <Footer videoLink='https://www.youtube.com/watch?v=0XcYmx57aD0'/>
      <div className="relative min-h-screen">
      <img className="bg-video-container min-h-screen z-10 brightness-75" src="images/music.gif"/>
        <div className="singles absolute top-0 left-0 w-full h-full z-20 absolute flex flex-col items-start justify-center">
          <YoutubeVideoList />
        </div>
      </div>
    </>
  );
}
