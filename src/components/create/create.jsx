'use client';

import Image from 'next/image';
import { useState } from 'react';
import StackIcon from '@/assets/images/create/Stack.svg';
import DualPhotoIcon from '@/assets/images/create/DualPhoto.svg';
import SphereIcon from '@/assets/images/create/Sphere.svg';
import HeroBg from '@/assets/images/HeroBg.png';

const cards = [
  {
    title: 'Generate a collection',
    icon: StackIcon,
    hoverBg: 'from-purple-600 to-fuchsia-600',
  },
  {
    title: 'Drop your artwork',
    icon: DualPhotoIcon,
    hoverBg: 'from-pink-500 to-yellow-400',
  },
  {
    title: 'Build your world',
    icon: SphereIcon,
    hoverBg: 'from-cyan-400 to-blue-500',
  },
];

export default function CreateSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX / innerWidth - 0.5) * 30; // Adjust intensity
    const y = (e.clientY / innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#242424] text-white overflow-hidden px-4 sm:px-6 md:px-8 py-16 sm:py-24 lg:py-32"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <Image
        src={HeroBg}
        alt="Hero Background"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Background Icons */}
      <div
        className="absolute inset-0 z-0 flex flex-wrap justify-center items-center opacity-10"
        style={{
          transform: `translate(${mousePos.x / 4}px, ${mousePos.y / 4}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        {[StackIcon, DualPhotoIcon, SphereIcon, StackIcon].map((icon, idx) => (
          <div
            key={idx}
            className="m-8 p-6 border border-white/10 rounded-xl backdrop-blur-md bg-white/5"
          >
            <Image
              src={icon}
              alt={`Decorative ${idx}`}
              width={40}
              height={40}
              className="filter invert brightness-0"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div
        className="relative z-10 text-center max-w-2xl mx-auto"
        style={{
          transform: `translate(${mousePos.x / 8}px, ${mousePos.y / 8}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Start free and <br className="hidden sm:block" /> create your own story
        </h2>

        <button className="mt-4 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg transition transform hover:scale-105">
          + Create Now
        </button>
      </div>

      {/* Cards */}
      <div
        className="relative z-10 mt-16 flex flex-col sm:flex-row items-center gap-6"
        style={{
          transform: `translate(${mousePos.x / 6}px, ${mousePos.y / 6}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`group w-60 h-60 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center transition-all duration-500 ease-in-out hover:bg-gradient-to-br ${card.hoverBg} hover:shadow-2xl hover:scale-105 cursor-pointer`}
          >
            <div className="w-12 h-12 mb-4 transition-all duration-500 ease-in-out">
              <Image
                src={card.icon}
                alt={card.title}
                width={48}
                height={48}
                className="filter invert brightness-0"
              />
            </div>
            <h3 className="text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
