'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Game Schedule', href: '#schedule' },
    { name: 'Rules', href: '#rules' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
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
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wider"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="#reservation"
                                className="bg-primary hover:bg-yellow-500 text-black px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105"
                            >
                                RESERVE
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
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
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
                                RESERVE A SEAT
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
