// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
        <nav className="z-50 fixed flex p-10 text-white text-3xl font-bold">
            <Link href="/" passHref className="hover:text-pink-200 transition duration-300 pr-5">
            HOME
            </Link>
            <Link href="/music" passHref className="z-40 hover:text-pink-200 transition duration-300 pr-5">
            MUSIC
            </Link>
            <Link href="/snake" passHref className="z-40 hover:text-pink-200 transition duration-300 pr-5">
            SNAKE
            </Link>
        </nav>
  );
};

export default Header;