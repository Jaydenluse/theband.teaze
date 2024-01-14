// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-around p-10 text-white text-3xl font-bold">
      <Link href="/" passHref>
        <a className="hover:text-pink-200 transition duration-300">HOME</a>
      </Link>
      <Link href="/music" passHref>
        <a className="hover:text-pink-200 transition duration-300">MUSIC</a>
      </Link>
      {/* Uncomment and add additional links as needed */}
      {/* <Link href="/shop" passHref>
        <a className="hover:text-pink-200 transition duration-300">SHOP</a>
      </Link>
      <Link href="/video" passHref>
        <a className="hover:text-pink-200 transition duration-300">VIDEO</a>
      </Link>
      <Link href="/shows" passHref>
        <a className="hover:text-pink-200 transition duration-300">TOUR</a>
      </Link> */}
    </nav>
  );
};

export default Header;