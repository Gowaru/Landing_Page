"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "$29",
        description: "Perfect for individuals and small projects.",
        features: ["5GB Storage", "10 Projects", "Basic Analytics", "Community Support"],
        accent: "cyan-accent",
    },
    {
        name: "Pro",
        price: "$99",
        description: "Ideal for growing startups and teams.",
        features: ["50GB Storage", "Unlimited Projects", "Advanced Analytics", "Priority Support", "Custom Domains"],
        accent: "violet-accent",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Built for massive scale and reliability.",
        features: ["Unlimited everything", "Dedicated account manager", "SLA & 24/7 Support", "On-premise deployment"],
        accent: "cyan-glow",
    }
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Simple, Transparent <span className="violet-gradient">Pricing</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-foreground/60 dark:text-white/60 max-w-xl mx-auto"
                    >
                        Choose the plan that best fits your needs. No hidden fees.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`glass dark:bg-white/5 bg-slate-900/5 p-10 rounded-[3rem] border border-white/10 relative flex flex-col ${plan.popular ? 'border-violet-accent/50 ring-2 ring-violet-accent/20' : ''}`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-violet-accent text-white text-xs font-bold rounded-full uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-4xl font-black">{plan.price}</span>
                                    {plan.price !== "Custom" && <span className="text-foreground/40 dark:text-white/40">/month</span>}
                                </div>
                                <p className="text-foreground/60 dark:text-white/60 text-sm leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-cyan-accent/10 flex items-center justify-center text-cyan-accent">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.popular ? 'bg-violet-accent text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-[1.02]' : 'bg-white/5 dark:bg-white/5 bg-slate-900/5 hover:bg-white/10'}`}>
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
