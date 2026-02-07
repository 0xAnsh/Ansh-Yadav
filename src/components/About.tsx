"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Globe, Blocks } from 'lucide-react';

export default function About() {
    const highlights = [
        {
            title: "APIs & System Design",
            description: "Architecting robust backend services and RESTful APIs optimized for scale.",
            icon: <Database className="text-blue-500" size={24} />,
        },
        {
            title: "Blockchain & Smart Contracts",
            description: "Developing decentralized applications and secure smart contracts on EVM chains.",
            icon: <Blocks className="text-purple-500" size={24} />,
        },
        {
            title: "Full-Stack Applications",
            description: "Building end-to-end web solutions with modern frameworks like Next.js.",
            icon: <Globe className="text-green-500" size={24} />,
        },
    ];

    return (
        <section id="about" className="relative py-24 bg-zinc-950 text-white overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-purple-900/5 pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Left Column: Text */}
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block">
                            About Me
                        </h2>

                        <p className="text-lg text-gray-400 leading-relaxed">
                            Backend-focused engineer with a strong foundation in APIs, databases, and blockchain integrations. Experienced in building scalable backend systems, developing smart contracts, and connecting decentralized infrastructure with full-stack applications.
                        </p>

                        <p className="text-lg text-gray-400 leading-relaxed">
                            Skilled in problem-solving, system reliability, and collaborative development. I thrive in environments where I can tackle complex engineering challenges and contribute to impactful products.
                        </p>

                        <div className="flex gap-4 pt-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                                <Zap size={16} />
                                <span>Fast Learner</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium">
                                <Blocks size={16} />
                                <span>Web3 Enthusiast</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Highlight Cards */}
                    <div className="space-y-4">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all shadow-lg hover:shadow-blue-500/10 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-black/40 group-hover:bg-blue-500/20 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
