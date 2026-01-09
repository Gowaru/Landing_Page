"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Cpu, Globe, BarChart, Layers } from "lucide-react";

const features = [
    {
        icon: <Zap className="w-8 h-8 text-cyan-accent" />,
        title: "Ultra Performance",
        description: "Built on Next.js 14 for lightning-fast load times and seamless navigation.",
    },
    {
        icon: <Shield className="w-8 h-8 text-violet-accent" />,
        title: "Secure by Design",
        description: "Enterprise-grade security protocols ensuring your data stays protected.",
    },
    {
        icon: <Cpu className="w-8 h-8 text-cyan-glow" />,
        title: "Edge Computing",
        description: "Deploy your content closer to your users for minimal latency worldwide.",
    },
    {
        icon: <Globe className="w-8 h-8 text-cyan-accent" />,
        title: "Global Scalability",
        description: "Scale your application to millions of users without breaking a sweat.",
    },
    {
        icon: <BarChart className="w-8 h-8 text-violet-accent" />,
        title: "Advanced Analytics",
        description: "Get real-time insights into user behavior with built-in analytics.",
    },
    {
        icon: <Layers className="w-8 h-8 text-cyan-glow" />,
        title: "Modular Architecture",
        description: "Flexible components that grow with your project requirements.",
    },
];

export default function Features() {
    return (
        <section id="features" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Engineered for <span className="violet-gradient">Greatness</span>
                    </h2>
                    <p className="text-foreground/50 dark:text-white/50 max-w-xl mx-auto">
                        Harness the power of modern technology with features designed to take your project to the next level.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="glass dark:bg-white/5 bg-slate-900/5 p-8 rounded-3xl group cursor-default transition-all duration-300 hover:border-cyan-accent/30 border border-white/10"
                        >
                            <div className="mb-6 p-3 bg-white/5 dark:bg-white/5 bg-slate-900/5 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-white/10 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-accent transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-foreground/60 dark:text-white/60 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
