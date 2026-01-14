'use client';

import { useTransition, useState } from 'react';
import { submitReservation } from '@/app/actions';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, MessageCircle, Upload, Camera } from 'lucide-react';
import { clsx } from 'clsx';
import { useLanguage } from '@/context/LanguageContext';

export default function ReservationForm() {
    const { t } = useLanguage();
    const [isPending, startTransition] = useTransition();
    const [formState, setFormState] = useState<{ success: boolean; message: string } | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        startTransition(async () => {
            const result = await submitReservation({ success: false, message: '' }, formData);
            setFormState(result);
        });
    };

    return (
        <section id="reservation" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FCEda6] to-[#D4AF37] mb-6 drop-shadow-sm">
                        {t.reservation.title}
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
                    <p className="text-zinc-400 text-lg">
                        {t.reservation.subtitle}
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="backdrop-blur-xl bg-zinc-900/40 border border-[#D4AF37]/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_-12px_rgba(212,175,55,0.15)] relative"
                >
                    {/* Decorative Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-xl -m-0.5" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-xl -m-0.5" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-xl -m-0.5" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-xl -m-0.5" />

                    {formState?.success ? (
                        <div className="text-center py-12">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30"
                            >
                                <CheckCircle2 className="w-10 h-10 text-green-500" />
                            </motion.div>
                            <h3 className="text-3xl font-serif font-bold text-white mb-4">{t.reservation.successTitle}</h3>
                            <p className="text-zinc-400 mb-8">{formState.message}</p>
                            <button
                                onClick={() => setFormState(null)}
                                className="text-primary hover:text-white transition-colors underline decoration-primary/50 underline-offset-4"
                            >
                                {t.reservation.another}
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2 group">
                                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold pl-1">{t.reservation.fullName}</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-black/40 border-b border-zinc-700 rounded-t-lg px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all duration-300"
                                        placeholder={t.reservation.fullNamePlaceholder}
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label htmlFor="phone" className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold pl-1">{t.reservation.phone}</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full bg-black/40 border-b border-zinc-700 rounded-t-lg px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all duration-300"
                                        placeholder={t.reservation.phonePlaceholder}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label htmlFor="passport" className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold pl-1">{t.reservation.passport}</label>
                                <input
                                    type="text"
                                    id="passport"
                                    name="passport"
                                    required
                                    className="w-full bg-black/40 border-b border-zinc-700 rounded-t-lg px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all duration-300"
                                    placeholder={t.reservation.passportPlaceholder}
                                />
                            </div>

                            <div className="space-y-2 group">
                                <label htmlFor="passportPhoto" className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold pl-1">{t.reservation.passportPhoto}</label>
                                <div className="relative">
                                    <input
                                        type="file"
                                        id="passportPhoto"
                                        name="passportPhoto"
                                        accept="image/*"
                                        className="w-full bg-black/40 border-b border-zinc-700 rounded-t-lg px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all duration-300 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#D4AF37]/10 file:text-[#D4AF37] hover:file:bg-[#D4AF37]/20"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                                        <Camera size={16} />
                                    </div>
                                </div>
                                <p className="text-[10px] text-zinc-500 mt-1 pl-1">{t.reservation.passportPhotoNotice}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="space-y-2 group">
                                    <label className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold pl-1">{t.reservation.contactApp}</label>
                                    <div className="relative">
                                        <select
                                            name="contactApp"
                                            className="w-full bg-black/40 border-b border-zinc-700 rounded-t-lg px-4 py-4 text-white focus:outline-none focus:border-primary focus:bg-primary/5 transition-all duration-300 appearance-none cursor-pointer"
                                            defaultValue=""
                                        >
                                            <option value="" className="bg-zinc-900 text-zinc-400">{t.reservation.contactAppPlaceholder}</option>
                                            <option value="Telegram" className="bg-zinc-900">Telegram</option>
                                            <option value="Line" className="bg-zinc-900">Line</option>
                                            <option value="WhatsApp" className="bg-zinc-900">WhatsApp</option>
                                        </select>
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                                            <MessageCircle size={16} />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2 md:col-span-2 group">
                                    <label htmlFor="contactId" className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold pl-1">{t.reservation.appId}</label>
                                    <input
                                        type="text"
                                        name="contactId"
                                        className="w-full bg-black/40 border-b border-zinc-700 rounded-t-lg px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-primary focus:bg-primary/5 transition-all duration-300"
                                        placeholder={t.reservation.appIdPlaceholder}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2 group">
                                    <label htmlFor="date" className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold pl-1">{t.reservation.arrivalDate}</label>
                                    <input
                                        type="date"
                                        name="date"
                                        lang="en-US"
                                        className="w-full bg-black/40 border-b border-zinc-700 rounded-t-lg px-4 py-4 text-white focus:outline-none focus:border-primary focus:bg-primary/5 transition-all duration-300 [color-scheme:dark]"
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label htmlFor="time" className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold pl-1">{t.reservation.arrivalTime}</label>
                                    <input
                                        type="time"
                                        name="time"
                                        lang="en-US"
                                        className="w-full bg-black/40 border-b border-zinc-700 rounded-t-lg px-4 py-4 text-white focus:outline-none focus:border-primary focus:bg-primary/5 transition-all duration-300 [color-scheme:dark]"
                                    />
                                </div>
                            </div>

                            {formState?.success === false && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="p-4 rounded-lg bg-red-950/30 border border-red-900/50 text-red-200 flex items-center gap-3"
                                >
                                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-500" />
                                    <span className="text-sm">{formState.message}</span>
                                </motion.div>
                            )}

                            <button
                                type="submit"
                                disabled={isPending}
                                className={clsx(
                                    "w-full bg-gradient-to-r from-[#D4AF37] to-[#B38F24] text-black font-bold py-5 rounded-lg text-lg uppercase tracking-wider shadow-lg shadow-primary/20",
                                    "hover:shadow-primary/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3",
                                    isPending && "opacity-70 cursor-wait grayscale"
                                )}
                            >
                                {isPending ? t.reservation.processing : (
                                    <>
                                        {t.reservation.confirm} <Send className="w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
