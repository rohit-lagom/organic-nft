'use client';

import Image from 'next/image';
import HeroBg from '@/assets/images/HeroBg.png';

const stats = [
  { value: '+ $20 million', label: 'in creator earnings' },
  { value: '+ 2 million', label: 'tokens generated' },
  { value: '+ 21,000', label: 'happy creators' },
];

export function Hero ()  {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#242424] text-white overflow-hidden">

      <Image
        src={HeroBg}
        alt="Hero Background"
        fill
        className="object-cover z-10"
        priority
      />

      <div className="text-center px-6 z-20 relative">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          From <span className="text-purple-500">imagination</span><br />
          to reality
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Empowering creators to transform ideas into generative art, drops, and worlds with zero code.
        </p>

        <button className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-full shadow-md transition">
          + Create now
        </button>

        {/* Stats Section */}
        <div className="mt-16 flex flex-col md:flex-row justify-center gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-lg rounded-xl px-8 py-6 shadow-md"
            >
              <p className="text-xl font-bold">{stat.value}</p>
              <p className="text-gray-300 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


