"use client";

import React from 'react';
import ParticleBackground from '@/components/ui/particle-background';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black text-white">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <ParticleBackground />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >


                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                        Ansh Yadav
                    </h1>

                    <h2 className="text-xl md:text-2xl text-gray-300 font-light mb-8">
                        Software Development Engineer <span className="text-blue-500">|</span> Full-Stack Developer <span className="text-blue-500">|</span> Web3 Engineer
                    </h2>

                    <p className="max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed mb-10">
                        Backend-focused engineer building scalable APIs, smart contracts, and full-stack decentralized applications.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 pointer-events-auto">
                        <a
                            href="/resume.pdf"
                            download="Ansh_Yadav_Resume.pdf"
                            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
                        >
                            <Download size={18} />
                            <span>Download Resume</span>
                        </a>

                        <Link
                            href="#projects"
                            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-white/10 text-white border border-white/10 rounded-full font-medium backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95"
                        >
                            <span>View Projects</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-6 text-gray-400 pointer-events-auto">
                        <Link href="https://github.com/0xAnsh" target="_blank" className="hover:text-white transition-colors hover:scale-110 transform">
                            <Github size={24} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/ansh-yadav-3a74b4218/" target="_blank" className="hover:text-white transition-colors hover:scale-110 transform">
                            <Linkedin size={24} />
                        </Link>
                        <Link href="https://x.com/AnshY0x" target="_blank" className="hover:text-white transition-colors hover:scale-110 transform">
                            <Twitter size={24} />
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
            </motion.div>
        </section>
    );
}
