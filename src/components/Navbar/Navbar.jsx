'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/images/Logo.png'; // Your logo

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#242424] backdrop-blur-lg border-b border-white/10 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-8 py-5">
        {/* Logo on Left */}
        <Link href="/" className="flex items-center gap-3">
          <Image src={Logo} alt="Logo" width={36} height={36} className="rounded-lg" />
          <span className="text-white text-lg font-semibold tracking-wide">Organic NFTs</span>
        </Link>

        {/* Nav Links + CTA on Right */}
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
            <Link href="#" className="hover:text-purple-400 transition">Discover</Link>
            <Link href="#" className="hover:text-purple-400 transition">Pricing</Link>
            <button className="hover:text-purple-400 transition">Product</button>
            <button className="hover:text-purple-400 transition">Resources</button>
          </nav>

          <Link
            href="#"
            className="hidden md:inline-flex items-center px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold rounded-full transition"
          >
            + Create now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
