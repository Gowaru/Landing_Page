"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How does Aether handle scalability?",
        answer: "Aether is built on a distributed global infrastructure that automatically scales to handle millions of requests per second. Our edge computing layer ensures low latency regardless of your users' location."
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial on our Starter and Pro plans. No credit card is required to start your trial."
    },
    {
        question: "Can I migrate from my existing platform?",
        answer: "Absolutely. We provide dedicated migration tools and expert support to help you move your data and infrastructure to Aether with zero downtime."
    },
    {
        question: "What kind of support do you offer?",
        answer: "We offer 24/7 technical support via chat and email. Enterprise customers also get a dedicated account manager and phone support."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Common <span className="cyan-gradient">Questions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/60 dark:text-white/60"
                    >
                        Everything you need to know about Aether.
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass dark:bg-white/5 bg-slate-900/5 rounded-3xl border border-white/10 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-bold">{faq.question}</span>
                                <div className={`w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    {openIndex === index ? <Minus className="w-5 h-5 text-cyan-accent" /> : <Plus className="w-5 h-5 text-foreground/40" />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-8 pb-8 text-foreground/60 dark:text-white/60 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
