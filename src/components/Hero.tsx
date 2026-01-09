"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Globe from "./Globe";

export default function Hero() {
    return (
        <section className="min-h-screen relative flex items-center pt-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="z-10 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-1 rounded-full border border-cyan-accent/30 bg-cyan-accent/10 text-cyan-accent text-sm font-medium mb-6"
                    >
                        ✨ The future of web interface
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                    >
                        Elevate Your <br />
                        <span className="cyan-gradient text-glow">Digital Presence</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-foreground/60 dark:text-white/60 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
                    >
                        Create immersive experiences that captivate your audience.
                        Powered by ultra-fast technology and cutting-edge design principles.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button className="px-8 py-4 bg-cyan-accent text-white dark:text-navy-deep rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(100,255,218,0.4)]">
                            Get Started <ChevronRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 glass dark:bg-white/5 bg-slate-900/10 text-foreground dark:text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 dark:hover:bg-white/10 transition-colors border border-white/10">
                            View Analytics
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative h-[600px] flex items-center justify-center"
                >
                    <div className="absolute inset-0 bg-cyan-accent/20 blur-[100px] rounded-full" />
                    <Globe className="relative z-10" />
                </motion.div>
            </div>
        </section>
    );
}
