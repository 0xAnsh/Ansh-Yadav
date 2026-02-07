"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Laptop } from 'lucide-react';

export default function Experience() {
    const experiences = [
        {
            title: "Full Stack Developer (Internship)",
            company: "Stealth Startup",
            duration: "Mar 2025 – Present",
            location: "Remote",
            points: [
                "Built and deployed responsive web apps using Next.js and React",
                "Integrated REST APIs and improved backend workflows",
                "Implemented SSR and dynamic routing",
                "Followed Agile and Git-based development"
            ],
            icon: <Laptop size={20} className="text-blue-500" />,
        },
        {
            title: "SDE Intern",
            company: "aivi.in",
            duration: "Dec 2025 – Present",
            location: "On-site",
            points: [
                "Developing scalable backend solutions",
                "Collaborating with cross-functional teams",
                "Optimizing application performance"
            ],
            icon: <Network size={20} className="text-purple-500" />,
        }
    ];

    return (
        <section id="experience" className="bg-black text-white py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block mb-4">
                        Experience
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        My professional journey in software engineering and web development.
                    </p>
                </motion.div>

                <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[13px] top-0 w-7 h-7 bg-black border border-white/20 rounded-full flex items-center justify-center z-10 shadow-[0_0_10px_rgba(66,133,244,0.3)]">
                                {exp.icon}
                            </div>

                            {/* Content Card */}
                            <div className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                            {exp.title}
                                        </h3>
                                        <p className="text-lg text-gray-400 font-medium">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className="text-sm font-mono text-gray-500 bg-white/5 py-1 px-3 rounded-full border border-white/5 whitespace-nowrap">
                                        {exp.duration}
                                    </div>
                                </div>

                                <ul className="space-y-2 list-disc list-inside text-gray-400 marker:text-blue-500">
                                    {exp.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
