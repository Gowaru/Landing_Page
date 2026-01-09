"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "The visual quality and performance are simply unmatched. Aether has transformed our workflow completely.",
        author: "Sarah Jenkins",
        role: "CEO at TechFlow",
    },
    {
        quote: "Elegant, fast, and futuristic. The glassmorphism effects are a breath of fresh air in modern web design.",
        author: "Marc Dupont",
        role: "Director of Product",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Trusted by <span className="cyan-gradient">Visionaries</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass dark:bg-white/5 bg-slate-900/5 p-10 rounded-[2.5rem] relative border border-white/10"
                        >
                            <Quote className="w-12 h-12 text-cyan-accent/20 absolute top-8 left-8" />
                            <p className="text-xl md:text-2xl text-foreground/80 dark:text-white/80 mb-8 relative z-10 italic">
                                "&quot;{t.quote}&quot;"
                            </p>
                            <div>
                                <h4 className="font-bold text-foreground dark:text-white text-lg">{t.author}</h4>
                                <p className="text-cyan-accent/60 text-sm">{t.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
