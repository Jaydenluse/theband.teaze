// components/Footer.js
const Footer = ({videoLink}) => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="z-50 fixed bottom-0 w-full text-center text-white text-xs text-bold flex justify-between items-center p-2">
        <p>&copy; {currentYear} Raybone. All rights reserved.</p>
        <p>
          Video: <a href={videoLink} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">@WithTheBandMedia</a>
        </p>
      </footer>
    );
  };
  
  export default Footer;