// pages/index.js
import Header from '../components/Header.js';
import Footer from '../components/Footer.js'


export default function Home() {

  return (
    <>
      <Header/>
      <Footer videoLink='https://www.youtube.com/watch?v=0XcYmx57aD0'/>
      <img className="absolute top-0 left-0 w-full h-full object-cover brightness-75" src="images/homepage.gif" alt="Background" />
      <div className="absolute flex flex-col items-start justify-center p-4 min-h-screen z-20 pl-10">
        <header className="text-center">
          <h1 className="text-white text-8xl font-extrabold">
            <img src="images/teaze.gif" alt="Teaze" />
          </h1>
        </header>
      </div>
    </>
  );
}