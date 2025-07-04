'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/images/Logo.png'; 
import { Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

export function Footer () {
  return (
    <footer className="bg-[#242424] text-gray-300 px-8 pt-16 pb-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image src={Logo} alt="Logo" width={32} height={32} className="rounded-md" />
            <span className="text-white text-2xl font-semibold">Organic NFTs</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm">
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#">Buenoverse</Link></li>
              <li><Link href="#">Drops</Link></li>
              <li><Link href="#">NFT generator</Link></li>
              <li><Link href="#">Smart contract</Link></li>
              <li><Link href="#">Forms</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#">Help docs</Link></li>
              <li><Link href="#">Bueno School</Link></li>
              <li><Link href="#">Discover</Link></li>
              <li><Link href="#">Blog</Link></li>
              <li><Link href="#">Made with Bueno</Link></li>
              <li><Link href="#">Newsletter</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#">About us</Link></li>
              <li><Link href="#">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Twitter className="w-4 h-4" />
                <Link href="#">Twitter</Link>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <Link href="#">Instagram</Link>
              </li>
              <li className="flex items-center gap-2">
                <Youtube className="w-4 h-4" />
                <Link href="#">YouTube</Link>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <Link href="#">LinkedIn</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 mt-12 pt-6 text-xs text-gray-400">
        <span>© {new Date().getFullYear()} Bueno</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-white">Privacy Policy</Link>
          <Link href="#" className="hover:text-white">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};


