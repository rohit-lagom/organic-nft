'use client';

import Image from 'next/image';
import HeroBg from '@/assets/images/HeroBg.png';

import left1 from '@/assets/images/left/left1.webp';
import left2 from '@/assets/images/left/left2.png';
import left3 from '@/assets/images/left/left3.png';
import left4 from '@/assets/images/left/left4.webp';
import left5 from '@/assets/images/left/left5.webp';
import left6 from '@/assets/images/left/left6.webp';
import left7 from '@/assets/images/left/left7.webp';

import right1 from '@/assets/images/right/right1.webp';
import right2 from '@/assets/images/right/right2.webp';
import right3 from '@/assets/images/right/right3.webp';
import right4 from '@/assets/images/right/right4.webp';
import right5 from '@/assets/images/right/right5.webp';
import right6 from '@/assets/images/right/right6.webp';
import right7 from '@/assets/images/right/right7.webp';

const leftImages = [left1, left2, left3, left4, left5, left6, left7];
const rightImages = [right1, right2, right3, right4, right5, right6, right7];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#242424] text-white overflow-hidden px-4 sm:px-6 md:px-8 py-16 sm:py-24 lg:py-32">
      <Image src={HeroBg} alt="Hero Background" fill className="object-cover z-0" priority />

      {/* Left Images */}
      {leftImages.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`Left ${idx + 1}`}
          className={`absolute hidden md:block z-10
            ${
              idx === 0
                ? 'top-8 left-4 w-20 h-20 lg:w-36 lg:h-36'
                : idx === 1
                ? 'top-44 left-2 w-24 h-24 lg:w-48 lg:h-48'
                : idx === 2
                ? 'top-44 left-40 w-24 h-24 lg:w-48 lg:h-48'
                : idx === 3
                ? 'top-[22rem] left-2 w-24 h-24 lg:w-48 lg:h-48'
                : idx === 4
                ? 'top-[22rem] left-40 w-24 h-24 lg:w-48 lg:h-48'
                : idx === 5
                ? 'top-[34rem] left-8 w-24 h-24 lg:w-48 lg:h-48'
                : 'top-[34rem] left-44 w-24 h-24 lg:w-48 lg:h-48'
            }`}
        />
      ))}

      {/* Right Images */}
      {rightImages.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`Right ${idx + 1}`}
          className={`absolute hidden md:block z-10
            ${
              idx === 0
                ? 'top-8 right-4 w-20 h-20 lg:w-36 lg:h-36'
                : idx === 1
                ? 'top-44 right-2 w-24 h-24 lg:w-48 lg:h-48'
                : idx === 2
                ? 'top-44 right-40 w-24 h-24 lg:w-48 lg:h-48'
                : idx === 3
                ? 'top-[22rem] right-2 w-24 h-24 lg:w-48 lg:h-48'
                : idx === 4
                ? 'top-[22rem] right-40 w-24 h-24 lg:w-48 lg:h-48'
                : idx === 5
                ? 'top-[34rem] right-8 w-24 h-24 lg:w-48 lg:h-48'
                : 'top-[34rem] right-44 w-24 h-24 lg:w-48 lg:h-48'
            }`}
        />
      ))}

      {/* Hero Text */}
      <div className="text-center z-20 relative max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight">
          From <span className="text-purple-500">imagination</span>
          <br className="hidden sm:block" />
          to reality
        </h1>

        <p className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Empowering creators to transform ideas into generative art, drops,
          and worlds with zero code.
        </p>

        <button className="mt-8 sm:mt-10 px-8 sm:px-10 py-3 sm:py-4 bg-purple-600 hover:bg-purple-700 text-white text-base sm:text-lg md:text-xl font-semibold rounded-full shadow-md transition">
          + Create now
        </button>
      </div>
    </section>
  );
}
