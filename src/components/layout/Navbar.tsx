'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/lib/translations';

const getNavItems = (t: any) => [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.schedule, href: '#schedule' },
    { name: t.nav.rules, href: '#rules' },
    { name: t.nav.contact, href: '#contact' },
];

export default function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={clsx(
                'fixed top-0 w-full z-50 transition-all duration-300',
                scrolled ? 'bg-black/90 backdrop-blur-md border-b border-primary/20 py-2' : 'bg-transparent py-4'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 cursor-pointer">
                        <Link href="#home" className="flex items-center gap-2">
                            {/* Logo Image */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/logo.jpeg" alt="RiverOn Logo" className="h-12 w-auto object-contain rounded-full" />
                            <div className="flex flex-col">
                                <span className="font-serif text-xl font-bold bg-gradient-to-r from-primary via-yellow-200 to-primary bg-clip-text text-transparent leading-none">
                                    RiverOn
                                </span>
                                <span className="text-white/80 text-[10px] tracking-widest hidden sm:block">POKER BANGKOK</span>
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {getNavItems(t).map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-gray-300 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider"
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Language Switcher */}
                            <div className="flex items-center gap-2 bg-zinc-900/50 p-1 rounded-full border border-white/10">
                                {(['en', 'kr', 'cn'] as Language[]).map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => setLanguage(lang)}
                                        className={clsx(
                                            "px-2 py-1 rounded-full text-[10px] font-bold transition-all",
                                            language === lang
                                                ? "bg-primary text-black"
                                                : "text-zinc-500 hover:text-white"
                                        )}
                                    >
                                        {lang.toUpperCase()}
                                    </button>
                                ))}
                            </div>

                            <Link
                                href="#reservation"
                                className="bg-primary hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105"
                            >
                                {t.nav.reserve}
                            </Link>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/50 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-b border-primary/20"
                    >
                        <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
                            <div className="flex justify-center gap-4 mb-6 pt-2">
                                {(['en', 'kr', 'cn'] as Language[]).map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => setLanguage(lang)}
                                        className={clsx(
                                            "px-4 py-2 rounded-full text-xs font-bold transition-all",
                                            language === lang
                                                ? "bg-primary text-black"
                                                : "text-zinc-500 bg-zinc-900/50"
                                        )}
                                    >
                                        {lang === 'en' ? 'English' : lang === 'kr' ? '한국어' : '中文'}
                                    </button>
                                ))}
                            </div>
                            {getNavItems(t).map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-primary block px-3 py-4 rounded-md text-base font-medium text-center border-b border-white/5"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="#reservation"
                                onClick={() => setIsOpen(false)}
                                className="text-black bg-primary block px-3 py-4 rounded-md text-base font-bold text-center mt-4"
                            >
                                {t.nav.reserveSeat}
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
