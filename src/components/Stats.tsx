"use client";

import { motion } from "framer-motion";

const stats = [
    { label: "Active Users", value: "500K+", color: "text-cyan-accent" },
    { label: "Server Uptime", value: "99.9%", color: "text-violet-accent" },
    { label: "Requests/sec", value: "10K+", color: "text-cyan-glow" },
    { label: "Global Nodes", value: "40+", color: "text-cyan-accent" },
];

export default function Stats() {
    return (
        <section id="stats" className="py-20 px-6">
            <div className="max-w-7xl mx-auto glass dark:bg-white/5 bg-slate-900/5 rounded-[3rem] p-12 relative overflow-hidden border border-white/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <h3 className={`text-4xl md:text-5xl font-black mb-2 ${stat.color} drop-shadow-sm`}>
                                {stat.value}
                            </h3>
                            <p className="text-foreground/40 dark:text-white/40 font-medium uppercase tracking-widest text-xs">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Background decorative glow */}
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-accent/10 rounded-full blur-[80px]" />
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-violet-accent/10 rounded-full blur-[80px]" />
            </div>
        </section>
    );
}
