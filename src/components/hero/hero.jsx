'use client';

import Image from 'next/image';
import HeroBg from '@/assets/images/HeroBg.png';
import { leftImages, rightImages } from '@/assets/images/images';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#242424] text-white overflow-hidden px-4 sm:px-6 md:px-8 py-16 sm:py-24 lg:py-32">
      <Image src={HeroBg} alt="Hero Background" fill className="object-cover z-0" priority />

      {/* Floating Images */}
      <div className="absolute inset-0 flex justify-between items-center z-10 px-6">
        {/* Left Images Layout */}
        <div className="flex flex-col gap-6">
          {/* Row 1: 1 image */}
          <div className="flex justify-center">
            <Image src={leftImages[0]} alt="Left 1" className="w-24 rounded-lg shadow-lg" />
          </div>

          {/* Row 2: 2 images */}
          <div className="flex justify-between gap-4">
            <Image src={leftImages[1]} alt="Left 2" className="w-20 rounded-lg shadow-lg" />
            <Image src={leftImages[2]} alt="Left 3" className="w-20 rounded-lg shadow-lg" />
          </div>

          {/* Row 3: 2 images */}
          <div className="flex justify-between gap-4">
            <Image src={leftImages[3]} alt="Left 4" className="w-20 rounded-lg shadow-lg" />
            <Image src={leftImages[4]} alt="Left 5" className="w-20 rounded-lg shadow-lg" />
          </div>

          {/* Row 4: 1 image */}
          <div className="flex justify-center">
            <Image src={leftImages[5]} alt="Left 6" className="w-24 rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Right Images Layout */}
        <div className="flex flex-col gap-6">
          {/* Row 1: 1 image */}
          <div className="flex justify-center">
            <Image src={rightImages[0]} alt="Right 1" className="w-24 rounded-lg shadow-lg" />
          </div>

          {/* Row 2: 2 images */}
          <div className="flex justify-between gap-4">
            <Image src={rightImages[1]} alt="Right 2" className="w-20 rounded-lg shadow-lg" />
            <Image src={rightImages[2]} alt="Right 3" className="w-20 rounded-lg shadow-lg" />
          </div>

          {/* Row 3: 2 images */}
          <div className="flex justify-between gap-4">
            <Image src={rightImages[3]} alt="Right 4" className="w-20 rounded-lg shadow-lg" />
            <Image src={rightImages[4]} alt="Right 5" className="w-20 rounded-lg shadow-lg" />
          </div>

          {/* Row 4: 1 image */}
          <div className="flex justify-center">
            <Image src={rightImages[5]} alt="Right 6" className="w-24 rounded-lg shadow-lg" />
          </div>
        </div>
      </div>

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
