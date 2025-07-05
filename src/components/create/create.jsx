'use client';

import Image from 'next/image';
import HeroBg from '@/assets/images/HeroBg.png';

export default function Create() {
  return (
        <section
          className="relative min-h-screen flex items-center justify-center bg-[#242424] text-white overflow-hidden px-4 sm:px-6 md:px-8 py-16 sm:py-24 lg:py-32"
        >
          <Image src={HeroBg} alt="Hero Background" fill className="object-cover z-0" priority />
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
          Start free and <br className="hidden sm:block" /> create your own story
        </h2>


        <button className="mt-8 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-full shadow-md transition">
          + Create Now
        </button>
      </div>
    </section>
  );
}
