"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X, Rocket } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Stats", href: "#stats" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-4"
        >
            <div className="max-w-7xl mx-auto glass dark:bg-white/5 bg-slate-900/10 rounded-2xl px-6 py-3 flex items-center justify-between border border-white/10 dark:border-white/10">
                <Link href="/" className="flex items-center gap-2 group">
                    <Rocket className="w-8 h-8 text-cyan-accent group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-xl font-bold cyan-gradient">AETHER</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/70 dark:text-white/70 hover:text-cyan-accent dark:hover:text-cyan-accent transition-colors duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <ThemeToggle />
                    <button className="px-5 py-2 glass dark:bg-white/5 bg-slate-900/10 hover:bg-cyan-accent dark:hover:bg-cyan-accent hover:text-white dark:hover:text-navy-deep transition-all duration-300 rounded-xl text-sm font-bold border border-cyan-accent/30 shadow-[0_0_15px_rgba(100,255,218,0.2)]">
                        Launch
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="flex md:hidden items-center gap-4">
                    <ThemeToggle />
                    <button
                        className="text-cyan-accent"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-20 left-6 right-6 glass dark:bg-black/20 bg-white/10 rounded-2xl p-6 flex flex-col gap-4 border border-white/10"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-foreground/70 dark:text-white/70 hover:text-cyan-accent"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="w-full py-3 bg-cyan-accent text-white dark:text-navy-deep rounded-xl font-bold">
                        Launch
                    </button>
                </motion.div>
            )}
        </motion.nav>
    );
}
