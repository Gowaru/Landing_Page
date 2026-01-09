"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Get in <span className="cyan-gradient">Touch</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/60 dark:text-white/60 max-w-xl mx-auto"
                    >
                        Have questions about Aether? We&apos;re here to help you scale your digital presence.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="glass dark:bg-white/5 bg-slate-900/5 p-8 rounded-3xl border border-white/10">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-cyan-accent/10 flex items-center justify-center text-cyan-accent">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-foreground/40 dark:text-white/40 uppercase tracking-widest font-bold">Email</p>
                                        <p className="text-lg font-medium">hello@aether.io</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-violet-accent/10 flex items-center justify-center text-violet-accent">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-foreground/40 dark:text-white/40 uppercase tracking-widest font-bold">Phone</p>
                                        <p className="text-lg font-medium">+1 (555) 000-0000</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-cyan-accent/10 flex items-center justify-center text-cyan-accent">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-foreground/40 dark:text-white/40 uppercase tracking-widest font-bold">Location</p>
                                        <p className="text-lg font-medium">Silicon Valley, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="glass dark:bg-white/5 bg-slate-900/5 p-8 rounded-3xl border border-white/10">
                            <h4 className="font-bold mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                {['Twitter', 'LinkedIn', 'Github'].map((social) => (
                                    <button key={social} className="px-4 py-2 rounded-xl bg-white/5 dark:bg-white/5 bg-slate-900/5 hover:bg-cyan-accent hover:text-white dark:hover:text-navy-deep transition-all text-sm font-medium">
                                        {social}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass dark:bg-white/5 bg-slate-900/5 p-10 rounded-[2.50rem] border border-white/10"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground/60 dark:text-white/60 ml-1">Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 dark:bg-white/5 bg-slate-900/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-accent transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-foreground/60 dark:text-white/60 ml-1">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 dark:bg-white/5 bg-slate-900/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-accent transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-foreground/60 dark:text-white/60 ml-1">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full bg-white/5 dark:bg-white/5 bg-slate-900/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-accent transition-colors resize-none"
                                ></textarea>
                            </div>
                            <button className="w-full py-5 bg-cyan-accent text-white dark:text-navy-deep rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(100,255,218,0.2)]">
                                Send Message <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
