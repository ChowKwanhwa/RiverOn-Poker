'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/context/LanguageContext';

const PokerScene = dynamic(() => import('@/components/3d/PokerScene'), { ssr: false });

export default function Hero() {
    const { t } = useLanguage();
    return (
        <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
                {/* 3D Scene Layer */}
                <div className="absolute inset-0 z-10">
                    <PokerScene />
                </div>
                {/* Custom Hero Background */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/hero-bg.jpeg"
                    alt="RiverOn Poker Atmosphere"
                    className="w-full h-full object-cover object-center"
                />
            </div>

            <div className="relative z-20 text-center max-w-4xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/50 text-sm font-semibold tracking-wider mb-6 uppercase backdrop-blur-md">
                        {t.hero.premier}
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
                        RiverOn <br />
                        <span className="text-primary">Poker Bangkok</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                        {t.hero.subtitle} <br />
                        {t.hero.subtitle2}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="#reservation"
                            className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-bold text-lg rounded-full hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg shadow-primary/25"
                        >
                            {t.hero.book}
                        </Link>
                        <Link
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white font-medium text-lg rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            {t.hero.contactUs}
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-3 bg-primary rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
