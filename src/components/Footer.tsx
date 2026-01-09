import Link from "next/link";
import { Github, Twitter, Linkedin, Rocket } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-white/5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <div className="flex items-center gap-2">
                        <Rocket className="w-6 h-6 text-cyan-accent" />
                        <span className="text-xl font-bold cyan-gradient">AETHER</span>
                    </div>
                    <p className="text-foreground/40 dark:text-white/40 text-sm max-w-xs text-center md:text-left">
                        Building the next generation of digital experiences with precision and passion.
                    </p>
                </div>

                <div className="flex gap-8">
                    <Link href="#" className="text-foreground/40 dark:text-white/40 hover:text-cyan-accent transition-colors">
                        <Github className="w-6 h-6" />
                    </Link>
                    <Link href="#" className="text-foreground/40 dark:text-white/40 hover:text-cyan-accent transition-colors">
                        <Twitter className="w-6 h-6" />
                    </Link>
                    <Link href="#" className="text-foreground/40 dark:text-white/40 hover:text-cyan-accent transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </Link>
                </div>

                <div className="text-foreground/40 dark:text-white/40 text-sm">
                    © {new Date().getFullYear()} Aether Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
