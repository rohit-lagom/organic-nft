'use client';

import Image from 'next/image';
import DottedBG from '@/assets/images/DottedBG.png';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Explore = () => {
    return (
        <section
            className="relative bg-[#242424] text-white overflow-hidden min-h-[75vh] flex items-center px-6 md:px-12 lg:px-20 bg-contain"
            style={{
                backgroundImage: `url(${DottedBG.src})`,
                backgroundRepeat: 'repeat',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
                {/* Left Side */}
                <div className="text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8">
                        Let’s dive in and<br /> learn the basics
                    </h2>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-lg md:text-xl font-medium">
                        <Image
                            src="/favicon.ico" // Replace with your logo/icon
                            alt="Logo"
                            width={28}
                            height={28}
                        />
                        <span>
                            Organic <span className="font-normal">school</span>
                        </span>
                    </div>
                </div>

                {/* Right Side Buttons */}
                <div className="flex flex-col gap-5 w-full md:w-auto">
                    <Link
                        href="#"
                        className="flex justify-between items-center px-8 py-5 rounded-xl bg-purple-600 hover:bg-purple-700 transition text-lg md:text-xl font-semibold shadow-md"
                    >
                        Watch tutorials
                        <ArrowRight className="w-6 h-6" />
                    </Link>

                    <Link
                        href="#"
                        className="flex justify-between items-center px-8 py-5 rounded-xl border border-gray-500/50 hover:border-gray-400 transition text-lg md:text-xl font-semibold"
                    >
                        View guides
                        <ArrowRight className="w-6 h-6" />
                    </Link>

                    <Link
                        href="#"
                        className="flex justify-between items-center px-8 py-5 rounded-xl border border-gray-500/50 hover:border-gray-400 transition text-lg md:text-xl font-semibold"
                    >
                        Read articles
                        <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Explore;
