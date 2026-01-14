'use client';

import { MapPin, Phone, Mail, Clock, ShieldCheck, Car, BedDouble, Send, ArrowUpRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

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
                            About <span className="text-[#D4AF37]">RiverOn</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-zinc-400 text-lg leading-relaxed mb-10">
                            RiverOn Poker Bangkok is a premium offline poker club located in the heart of Bangkok,
                            designed exclusively for international players seeking a high-quality live poker experience.
                            Our goal is to bring together players from around the world in a comfortable, fair, and professionally managed environment.
                        </motion.p>

                        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Feature Card 1 */}
                            <motion.div variants={fadeInUp} className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-[#D4AF37]/50 hover:bg-zinc-800/80 transition-all duration-300">
                                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                                    <ShieldCheck size={24} />
                                </div>
                                <h4 className="font-bold text-white text-lg mb-2">Safe & Secure</h4>
                                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">Professional security team and fair play guaranteed at high standards.</p>
                            </motion.div>

                            {/* Feature Card 2 */}
                            <motion.div variants={fadeInUp} className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-[#D4AF37]/50 hover:bg-zinc-800/80 transition-all duration-300">
                                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                                    <Car size={24} />
                                </div>
                                <h4 className="font-bold text-white text-lg mb-2">VIP Transfer</h4>
                                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">Complimentary luxury pick-up service for verified VIP players.</p>
                            </motion.div>

                            {/* Feature Card 3 */}
                            <motion.div variants={fadeInUp} className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-[#D4AF37]/50 hover:bg-zinc-800/80 transition-all duration-300">
                                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                                    <BedDouble size={24} />
                                </div>
                                <h4 className="font-bold text-white text-lg mb-2">F&B & Parking</h4>
                                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">Complimentary food, drinks, and free parking provided for all guests.</p>
                            </motion.div>

                            {/* Feature Card 4 */}
                            <motion.div variants={fadeInUp} className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-[#D4AF37]/50 hover:bg-zinc-800/80 transition-all duration-300">
                                <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform">
                                    <ShieldCheck size={24} />
                                </div>
                                <h4 className="font-bold text-white text-lg mb-2">Insurance Rules</h4>
                                <p className="text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors">Optional feature to reduce variance in all-in situations for players.</p>
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
                                src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop"
                                alt="Poker Table"
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
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Game Schedule & Rules</h2>
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
                            <h3 className="text-2xl font-serif font-bold text-[#D4AF37] mb-8 tracking-wide uppercase">Daily Schedule</h3>
                            <div className="text-white mb-6 text-left">
                                <p className="text-[#D4AF37] font-bold mb-2">Start Time: 8:00 PM Daily</p>
                                <p className="text-zinc-400 text-sm">Three games with different blind levels run simultaneously every evening.</p>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center border-b border-zinc-900 pb-2 group/item hover:border-[#D4AF37]/30 transition-colors">
                                    <span className="text-zinc-400 font-medium group-hover/item:text-zinc-200">Table 1</span>
                                    <span className="font-bold text-white text-lg">Low Blinds</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-zinc-900 pb-2 group/item hover:border-[#D4AF37]/30 transition-colors">
                                    <span className="text-zinc-400 font-medium group-hover/item:text-zinc-200">Table 2</span>
                                    <span className="font-bold text-white text-lg">Mid Blinds</span>
                                </li>
                                <li className="flex justify-between items-center border-b border-zinc-900 pb-2 group/item hover:border-[#D4AF37]/30 transition-colors">
                                    <span className="text-zinc-400 font-medium group-hover/item:text-zinc-200">Table 3</span>
                                    <span className="font-bold text-white text-lg">High Blinds</span>
                                </li>
                                <li className="mt-4 text-left">
                                    <p className="text-sm text-zinc-500">NHL Texas Hold’em. F&B and Parking provided free of charge.</p>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* House Rules Menu Card */}
                    <motion.div variants={fadeInUp} className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-bl from-[#D4AF37] to-zinc-800 rounded-2xl opacity-30 group-hover:opacity-100 transition duration-500 blur-sm" />
                        <div className="relative h-full bg-zinc-950 p-8 md:p-10 rounded-xl border border-zinc-800 hover:border-[#D4AF37]/50 transition-all duration-300 text-left">
                            <h3 className="text-2xl font-serif font-bold text-[#D4AF37] mb-8 tracking-wide uppercase text-center">House Rules</h3>
                            <ul className="space-y-4 text-zinc-300">
                                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-zinc-900 transition-colors">
                                    <span className="text-[#D4AF37] font-bold text-xl">•</span>
                                    <span><strong className="text-white">Respect:</strong> Maintain a respectful demeanor towards dealers and players at all times.</span>
                                </li>
                                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-zinc-900 transition-colors">
                                    <span className="text-[#D4AF37] font-bold text-xl">•</span>
                                    <span><strong className="text-white">Fair Play:</strong> English only at the table. No sunglasses or hoods to ensure transparency.</span>
                                </li>
                                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-zinc-900 transition-colors">
                                    <span className="text-[#D4AF37] font-bold text-xl">•</span>
                                    <span><strong className="text-white">Zero Tolerance:</strong> Collusion or cheating results in immediate ban and forfeiture.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export function ContactSection() {
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
                                88 Soi Sukhumvit 19, <br />
                                Khlong Toei Nuea, Watthana, <br />
                                Bangkok 10110, Thailand
                            </p>
                        </div>
                    </div>

                    {/* Contact Links */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-white text-lg uppercase tracking-wider mb-2">Connect</h4>
                        <div className="space-y-4">
                            <a href="https://line.me/ti/p/KAHzfaD_hP" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-all hover:translate-x-1 group">
                                <div className="w-10 h-10 rounded bg-[#00B900]/20 flex items-center justify-center text-[#00B900] group-hover:bg-[#00B900] group-hover:text-white transition-all font-bold text-xs ring-1 ring-[#00B900]/50">LINE</div>
                                <span>Add us on LINE</span>
                            </a>
                            <a href="https://t.me/yangcha123" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-all hover:translate-x-1 group">
                                <div className="w-10 h-10 rounded bg-[#0088cc]/20 flex items-center justify-center text-[#0088cc] group-hover:bg-[#0088cc] group-hover:text-white transition-all ring-1 ring-[#0088cc]/50"><Send size={18} /></div>
                                <span>Contact on Telegram</span>
                            </a>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-white text-lg uppercase tracking-wider mb-2">Hours</h4>
                        <div className="flex items-start gap-4 text-zinc-400">
                            <div className="w-10 h-10 rounded bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]"><Clock size={20} /></div>
                            <div>
                                <p className="text-white font-bold text-lg">Open Daily</p>
                                <p className="text-[#D4AF37]">24 Hours Action</p>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.602283151859!2d100.5564858!3d13.7374828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ee4424c5555%3A0x6a0c441584444444!2sSukhumvit%2019%20Alley%2C%20Khwaeng%20Khlong%20Toei%20Nuea%2C%20Khet%20Watthana%2C%20Krung%20Thep%20Maha%20Nakhon%2010110%2C%20Thailand!5e0!3m2!1sen!2sus!4v1705030000000!5m2!1sen!2sus"
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
                            href="https://www.google.com/maps/search/?api=1&query=88+Soi+Sukhumvit+19,+Khlong+Toei+Nuea,+Watthana,+Bangkok+10110,+Thailand"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-zinc-700/50 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300 shadow-lg"
                        >
                            Open in Google Maps
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
