'use client';

import Image from 'next/image';
import DottedBG from '@/assets/images/DottedBG.png';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Explore = () => {
  return (
    <section
      className="relative bg-[#242424] text-white overflow-hidden min-h-[75vh] flex items-center px-4 md:px-8 bg-contain"
      style={{
        backgroundImage: `url(${DottedBG.src})`,
        backgroundRepeat: 'repeat',
        // backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Let’s dive in and<br /> learn the basics
          </h2>
          <div className="flex items-center justify-center md:justify-start gap-2 text-lg font-medium">
            <Image
              src="/favicon.ico" // Replace this icon with your logo/icon
              alt="Logo"
              width={24}
              height={24}
            />
            <span>
              bueno <span className="font-normal">school</span>
            </span>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          <Link
            href="#"
            className="flex justify-between items-center px-6 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-base md:text-lg font-semibold shadow-md"
          >
            Watch tutorials
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="#"
            className="flex justify-between items-center px-6 py-4 rounded-xl border border-gray-500/50 hover:border-gray-400 transition text-base md:text-lg font-semibold"
          >
            View guides
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="#"
            className="flex justify-between items-center px-6 py-4 rounded-xl border border-gray-500/50 hover:border-gray-400 transition text-base md:text-lg font-semibold"
          >
            Read articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explore;
