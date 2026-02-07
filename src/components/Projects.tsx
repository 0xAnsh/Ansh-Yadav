"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
    const projects = [
        {
            title: "SquadFi – The Onchain Adventure Wallet",
            description: "A multisig wallet enabling squads to manage shared funds transparently. Implemented proposal creation, voting logic, and fund execution. Integrated MetaMask and secure APIs.",
            tech: ["Solidity", "Ethers.js", "React", "Tailwind", "XMTP", "AgentKit"],
            github: "#",
            demo: "#",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "API-Based Healthcare Integration System",
            description: "Built appointment system with robust API handling and database synchronization.",
            tech: ["Python", "Django", "PostgreSQL"],
            github: "#",
            demo: "#",
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Psycin – Mental Health Platform",
            description: "Developed frontend with real-time chat and appointment booking.",
            tech: ["React", "Tailwind", "Firebase"],
            github: "#",
            demo: "#",
            color: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-zinc-900 text-white relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        A selection of projects that demonstrate my technical expertise.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-zinc-800/50 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}></div>

                            <div className="p-8 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-colors">
                                        <Code2 size={24} className="text-gray-300" />
                                    </div>
                                    <div className="flex gap-3">
                                        <Link href={project.github} className="text-gray-400 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </Link>
                                        <Link href={project.demo} className="text-gray-400 hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </Link>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
