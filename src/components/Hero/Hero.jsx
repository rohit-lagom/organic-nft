'use client';

import Image from 'next/image';
import HeroBg from '@/assets/images/HeroBg.png';

const stats = [
  { value: '+ $20 million', label: 'in creator earnings' },
  { value: '+ 2 million', label: 'tokens generated' },
  { value: '+ 21,000', label: 'happy creators' },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#242424] text-white overflow-hidden px-4 sm:px-6 md:px-8 py-16 sm:py-24 lg:py-32">
      <Image
        src={HeroBg}
        alt="Hero Background"
        fill
        className="object-cover z-10"
        priority
      />

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

        <div className="mt-16 sm:mt-20 flex flex-col md:flex-row justify-center gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="border border-white/10 backdrop-blur-lg rounded-xl px-5 sm:px-6 md:px-8 py-5 sm:py-6 md:py-8 shadow-md"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-bold">
                {stat.value}
              </p>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
