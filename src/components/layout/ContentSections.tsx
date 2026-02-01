'use client';

import { MapPin, Phone, Mail, Clock, ShieldCheck, Car, BedDouble, Send, ArrowUpRight, Instagram, Youtube } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export function AboutSection() {
    const { t } = useLanguage();
    return (
        <section id="about" className="py-24 bg-[#0a0a0a] px-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-zinc-900/40 to-transparent pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                            {t.about.title} <span className="text-[#D4AF37]">{t.about.brand}</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-zinc-400 text-lg leading-relaxed mb-6">
                            {t.about.p1}
                        </motion.p>
                        <motion.p variants={fadeInUp} className="text-zinc-400 text-lg leading-relaxed mb-10">
                            {t.about.p2}
                        </motion.p>

                        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Feature Card 1 */}
                            <motion.div variants={fadeInUp} className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-[#D4AF37]/50 hover:bg-zinc-800/80 transition-all duration-300">
                                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                                    <ShieldCheck size={24} />
                                </div>
                                <h4 className="font-bold text-white text-lg mb-2">{t.about.features.safe.title}</h4>
                                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">{t.about.features.safe.desc}</p>
                            </motion.div>

                            {/* Feature Card 2 */}
                            <motion.div variants={fadeInUp} className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-[#D4AF37]/50 hover:bg-zinc-800/80 transition-all duration-300">
                                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                                    <Car size={24} />
                                </div>
                                <h4 className="font-bold text-white text-lg mb-2">{t.about.features.transfer.title}</h4>
                                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">{t.about.features.transfer.desc}</p>
                            </motion.div>

                            {/* Feature Card 3 */}
                            <motion.div variants={fadeInUp} className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-[#D4AF37]/50 hover:bg-zinc-800/80 transition-all duration-300">
                                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                                    <BedDouble size={24} />
                                </div>
                                <h4 className="font-bold text-white text-lg mb-2">{t.about.features.fb.title}</h4>
                                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">{t.about.features.fb.desc}</p>
                            </motion.div>

                            {/* Feature Card 4 */}
                            <motion.div variants={fadeInUp} className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-[#D4AF37]/50 hover:bg-zinc-800/80 transition-all duration-300">
                                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                                    <ShieldCheck size={24} />
                                </div>
                                <h4 className="font-bold text-white text-lg mb-2">{t.about.features.insurance.title}</h4>
                                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">{t.about.features.insurance.desc}</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative h-[500px] w-full group"
                    >
                        {/* Gold Frame Effect */}
                        <div className="absolute inset-0 border-2 border-[#D4AF37]/30 rounded-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />

                        <div className="relative h-full w-full bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/site-photo-nano.jpeg"
                                alt="RiverOn Poker Club Interior"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute bottom-8 left-8 z-20">
                                <div className="text-[#D4AF37] font-serif italic text-xl mb-2">Experience the best</div>
                                <div className="text-white font-bold text-3xl">RiverOn Poker Club</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export function GameInfoSection() {
    const { t } = useLanguage();
    return (
        <section id="schedule" className="py-24 bg-black px-4 relative overflow-hidden">
            {/* Subtle Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/20 to-transparent pointer-events-none" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">{t.games.title}</h2>
                    <div className="h-0.5 w-20 bg-[#D4AF37] mx-auto mb-16" />
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                >
                    {/* Cash Games Menu Card */}
                    <motion.div variants={fadeInUp} className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-[#D4AF37] to-zinc-800 rounded-2xl opacity-30 group-hover:opacity-100 transition duration-500 blur-sm" />
                        <div className="relative h-full bg-zinc-950 p-8 md:p-10 rounded-xl border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300">
                            <h3 className="text-2xl font-serif font-bold text-[#D4AF37] mb-8 tracking-wide uppercase">{t.games.title}</h3>
                            <div className="text-white mb-6 text-left">
                                <p className="text-[#D4AF37] font-bold mb-2">{t.games.startTime}</p>
                                <p className="text-zinc-400 text-sm">{t.games.threeGames}</p>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center border-b border-zinc-900 pb-2 group/item hover:border-[#D4AF37]/30 transition-colors">
                                    <span className="text-zinc-400 font-medium group-hover/item:text-zinc-200">{t.games.table1.name}</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-zinc-900 pb-2 group/item hover:border-[#D4AF37]/30 transition-colors">
                                    <span className="text-zinc-400 font-medium group-hover/item:text-zinc-200">{t.games.table2.name}</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-zinc-900 pb-2 group/item hover:border-[#D4AF37]/30 transition-colors">
                                    <span className="text-zinc-400 font-medium group-hover/item:text-zinc-200">{t.games.table3.name}</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* House Rules & Insurance Menu Card */}
                    <motion.div variants={fadeInUp} className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-bl from-[#D4AF37] to-zinc-800 rounded-2xl opacity-30 group-hover:opacity-100 transition duration-500 blur-sm" />
                        <div className="relative h-full bg-zinc-950 p-8 md:p-10 rounded-xl border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 text-left">
                            <h3 className="text-2xl font-serif font-bold text-[#D4AF37] mb-8 tracking-wide uppercase text-center">{t.rules.title}</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                        <ShieldCheck size={18} className="text-[#D4AF37]" />
                                        {t.rules.insurance.title}
                                    </h4>
                                    <p className="text-sm text-zinc-400 leading-relaxed mb-2">
                                        {t.rules.insurance.desc}
                                    </p>
                                    <ul className="text-xs text-zinc-500 space-y-1 list-disc pl-4">
                                        <li>{t.rules.insurance.bullet1}</li>
                                        <li>{t.rules.insurance.bullet2}</li>
                                        <li>{t.rules.insurance.bullet3}</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                        <div className="w-5 h-5 rounded-full border border-pink-500 flex items-center justify-center text-[10px] text-pink-500 font-bold italic">S</div>
                                        {t.rules.squid.title}
                                    </h4>
                                    <div className="space-y-3">
                                        <div className="bg-white/5 p-3 rounded-lg border border-white/10 hover:border-pink-500/30 transition-colors">
                                            <p className="text-pink-500 text-[10px] font-bold uppercase tracking-wider mb-1">{t.rules.squid.c1}</p>
                                            <p className="text-xs text-zinc-400">{t.rules.squid.c1Desc}</p>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-lg border border-white/10 hover:border-pink-500/30 transition-colors">
                                            <p className="text-pink-500 text-[10px] font-bold uppercase tracking-wider mb-1">{t.rules.squid.c2}</p>
                                            <p className="text-xs text-zinc-400">{t.rules.squid.c2Desc}</p>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-lg border border-white/10 hover:border-pink-500/30 transition-colors">
                                            <p className="text-pink-500 text-[10px] font-bold uppercase tracking-wider mb-1">{t.rules.squid.c3}</p>
                                            <p className="text-xs text-zinc-400">{t.rules.squid.c3Desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export function ContactSection() {
    const { t } = useLanguage();
    return (
        <footer id="contact" className="bg-[#050505] pt-24 pb-12 border-t border-zinc-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-3xl font-bold text-white tracking-tight">RiverOn <span className="text-[#D4AF37]">Poker</span></h3>
                        <div className="flex items-start gap-4 text-zinc-400 group cursor-pointer hover:text-white transition-colors">
                            <MapPin className="flex-shrink-0 text-[#D4AF37] mt-1" />
                            <p className="leading-relaxed">
                                {t.contact.address}
                                {t.contact.fullAddress && (
                                    <>
                                        <br />
                                        {t.contact.fullAddress}
                                    </>
                                )}
                            </p>
                        </div>
                    </div>

                    {/* Contact Links */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-white text-lg uppercase tracking-wider mb-2">{t.nav.contact}</h4>
                        <div className="space-y-4">
                            <a href="https://line.me/ti/p/KAHzfaD_hP" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-all hover:translate-x-1 group">
                                <div className="w-10 h-10 rounded bg-[#00B900]/20 flex items-center justify-center text-[#00B900] group-hover:bg-[#00B900] group-hover:text-white transition-all font-bold text-xs ring-1 ring-[#00B900]/50">LINE</div>
                                <span>{t.contact.lineLabel}</span>
                            </a>
                            {/* New Social Links */}
                            <a href="https://instagram.com/riveronbangkok" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-all hover:translate-x-1 group">
                                <div className="w-10 h-10 rounded bg-[#E1306C]/20 flex items-center justify-center text-[#E1306C] group-hover:bg-[#E1306C] group-hover:text-white transition-all ring-1 ring-[#E1306C]/50"><Instagram size={18} /></div>
                                <span>@riveronbangkok</span>
                            </a>
                            <a href="https://t.me/riveronbangkok" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-all hover:translate-x-1 group">
                                <div className="w-10 h-10 rounded bg-[#0088cc]/20 flex items-center justify-center text-[#0088cc] group-hover:bg-[#0088cc] group-hover:text-white transition-all ring-1 ring-[#0088cc]/50"><Send size={18} /></div>
                                <span>Telegram @riveronbangkok</span>
                            </a>
                            <a href="https://www.youtube.com/@riveronbangkok" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-all hover:translate-x-1 group">
                                <div className="w-10 h-10 rounded bg-[#FF0000]/20 flex items-center justify-center text-[#FF0000] group-hover:bg-[#FF0000] group-hover:text-white transition-all ring-1 ring-[#FF0000]/50"><Youtube size={18} /></div>
                                <span>Youtube Channel</span>
                            </a>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-white text-lg uppercase tracking-wider mb-2">{t.contact.openHours}</h4>
                        <div className="flex items-start gap-4 text-zinc-400">
                            <div className="w-10 h-10 rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]"><Clock size={20} /></div>
                            <div>
                                <p className="text-white font-bold text-lg">{t.contact.openHours}</p>
                                <p className="text-[#D4AF37]">{t.contact.gameStart}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Map Embed with Night Mode Overlay */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-80 relative group rounded-2xl overflow-hidden mb-12 border border-zinc-800"
                >
                    {/* Gold Frame/Border Effect */}
                    <div className="absolute inset-0 border-2 border-[#D4AF37]/0 rounded-2xl pointer-events-none z-20 group-hover:border-[#D4AF37]/40 transition-colors duration-500" />

                    {/* Dark Mode Iframe Hack: Invert colors + Grayscale + High Contrast */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.6810189311!2d100.3328221!3d13.7563309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sth!4v1705244799000!5m2!1sen!2sth"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                    />

                    {/* Blue/Purple Night Tint Overlay */}
                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay pointer-events-none" />

                    {/* Grid Overlay for Tech Vibe */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

                    {/* Center Pulsing Pin (Decorative) */}
                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                        <div className="relative flex items-center justify-center">
                            {/* Pulse Effect */}
                            <div className="absolute w-20 h-20 bg-[#D4AF37]/20 rounded-full animate-ping opacity-75" />
                            <div className="absolute w-32 h-32 bg-[#D4AF37]/10 rounded-full animate-pulse" />

                            {/* Pin Icon */}
                            <div className="relative w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.5)]">
                                <MapPin className="text-black fill-black" size={28} />
                            </div>
                        </div>
                    </div>

                    {/* Floating Button */}
                    <div className="absolute bottom-6 right-6 z-20">
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Bangkok,+Thailand"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-zinc-700/50 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300 shadow-lg"
                        >
                            {t.contact.googleMaps}
                            <ArrowUpRight size={16} />
                        </a>
                    </div>
                </motion.div>

                <div className="text-center text-zinc-700 text-sm border-t border-zinc-900 pt-8 font-mono tracking-tighter">
                    &copy; {new Date().getFullYear()} RiverOn Poker Bangkok. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
