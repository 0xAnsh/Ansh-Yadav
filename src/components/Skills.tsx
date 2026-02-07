"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
    const skills = [
        {
            category: "Programming",
            items: ["Python", "JavaScript", "TypeScript", "Solidity", "Go", "Rush"],
        },
        {
            category: "Frameworks",
            items: ["React.js", "Next.js", "Node.js", "Express.js", "Web3.js", "Ethers.js"],
        },
        {
            category: "Databases",
            items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
        },
        {
            category: "Tools",
            items: ["Git", "GitHub", "Hardhat", "Foundry", "Postman", "VS Code", "Vercel"],
        },
    ];

    return (
        <section id="skills" className="py-24 bg-zinc-950 text-white relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block mb-4">
                        Technical Skills
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        A comprehensive list of technologies and tools I've mastered.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors group"
                        >
                            <h3 className="text-xl font-bold text-gray-200 mb-6 group-hover:text-blue-400 transition-colors">
                                {skillGroup.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-zinc-800 text-gray-400 text-sm rounded-md border border-zinc-700/50 hover:bg-zinc-700 hover:text-white transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
