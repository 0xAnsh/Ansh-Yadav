"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';

export default function Achievements() {
    const achievements = [
        {
            title: "Selected to contribute to EigenLayer decentralized infrastructure projects",
            icon: <Award className="text-yellow-500" size={32} />,
        },
        {
            title: "2nd Place – Avalanche Etna Track at UNFOLD 2024 Hackathon",
            icon: <Trophy className="text-blue-500" size={32} />,
        },
    ];

    return (
        <section id="achievements" className="py-16 bg-zinc-950 text-white border-t border-white/5">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Achievements
                    </h2>
                </motion.div>

                <div className="space-y-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-6 p-6 bg-zinc-900/50 rounded-xl border border-white/5 hover:border-white/10 transition-colors"
                        >
                            <div className="p-4 bg-black/40 rounded-full border border-white/5">
                                {item.icon}
                            </div>
                            <p className="text-lg md:text-xl font-medium text-gray-200">
                                {item.title}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
