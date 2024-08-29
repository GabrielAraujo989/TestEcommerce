// components/Footer.js
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-500 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Links de navegação */}
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          <Link href="/" legacyBehavior>
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/store" legacyBehavior>
            <a className="hover:underline">Store</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className="hover:underline">About</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="hover:underline">Blog</a>
          </Link>
          <Link href="/PointofSale" legacyBehavior>
            <a className="hover:underline">Point of Sale</a>
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <FaFacebook className="hover:text-gray-300" />
          <FaTwitter className="hover:text-gray-300" />
          <FaInstagram className="hover:text-gray-300" />
        </div>

        {/* Copyright */}
        <div className="mt-4 md:mt-0">&copy; 2024 Your Company</div>
      </div>
    </footer>
  );
}
