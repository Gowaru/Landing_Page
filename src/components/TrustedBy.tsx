"use client";

import { motion } from "framer-motion";

const logos = ["Vertex", "Quantum", "Nexus", "Prism", "Orbital", "Spectral"];

export default function TrustedBy() {
    return (
        <section className="py-20 border-y border-white/5 bg-white/[0.02] dark:bg-black/10">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm font-bold text-foreground/30 dark:text-white/20 uppercase tracking-[0.2em] mb-12">
                    Trusted by innovative teams worldwide
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex justify-center"
                        >
                            <span className="text-2xl font-black tracking-tighter grayscale">
                                {logo}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
