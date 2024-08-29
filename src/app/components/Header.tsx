"use client";

import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-primary-500 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Logo</div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="block md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Links de navegação (Desktop) */}
        <nav className="hidden md:flex space-x-6">
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
          <Link href="/pos" legacyBehavior>
            <a className="hover:underline">Point of Sale</a>
          </Link>
          <Link href="/cart" legacyBehavior>
            <a className="hover:underline flex items-center">
              <FaShoppingCart className="mr-2" />
            </a>
          </Link>
        </nav>

        {/* Links de navegação (Mobile) */}
        {menuOpen && (
          <nav className="md:hidden absolute top-16 left-0 w-full bg-primary-500 text-white p-4 space-y-4">
            <Link href="/" legacyBehavior>
              <a className="block">Home</a>
            </Link>
            <Link href="/store" legacyBehavior>
              <a className="block">Store</a>
            </Link>
            <Link href="/about" legacyBehavior>
              <a className="block">About</a>
            </Link>
            <Link href="/blog" legacyBehavior>
              <a className="block">Blog</a>
            </Link>
            <Link href="/pos" legacyBehavior>
              <a className="block">Point of Sale</a>
            </Link>
            <Link href="/cart" legacyBehavior>
              <a className="block"><FaShoppingCart className="mr-2" />Cart</a>
            </Link>

          </nav>
        )}
      </div>
    </header>
  );
}
