// components/Header.js
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname === pathname ? 'text-pink-700 mr-5' : 'hover:text-pink-700 transition duration-300 text-white mr-5';
  };

  return (
    <nav className="phone-header z-50 fixed flex p-10 text-white text-2xl font-bold">
      <Link href="/" passHref>
        <span className={isActive("/")}>HOME</span>
      </Link>
      <Link href="/music" passHref>
        <span className={isActive("/music")}>MUSIC</span>
      </Link>
      <Link href="/contact" passHref>
        <span className={isActive("/contact")}>CONTACT</span>
      </Link>
      <Link href="/shop" passHref>
        <span className={isActive("/shop")}>SHOP</span>
      </Link>
      <Link href="/extras" passHref>
        <span className={isActive("/extras")}>EXTRAS</span>
      </Link>
      <Link href="/snake" passHref>
        <span className={isActive("/snake")}>SNAKE</span>
      </Link>
    </nav>
  );
};

export default Header;