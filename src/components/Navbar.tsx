"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Github, Linkedin, Twitter, Info, Briefcase, FolderGit2, Cpu, Mail, Home } from 'lucide-react';
import { cn } from "@/lib/utils";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState("Home");

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 20) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const links = [
        { name: "About", href: "#about", icon: <Info size={16} /> },
        { name: "Experience", href: "#experience", icon: <Briefcase size={16} /> },
        { name: "Projects", href: "#projects", icon: <FolderGit2 size={16} /> },
        { name: "Skills", href: "#skills", icon: <Cpu size={16} /> },
        { name: "Contact", href: "#contact", icon: <Mail size={16} /> },
    ];

    return (
        <motion.div
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -100, opacity: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-6 inset-x-0 max-w-fit mx-auto z-50 px-2"
        >
            <div
                className={cn(
                    "flex items-center gap-2 p-2 rounded-full border transition-all duration-300",
                    scrolled
                        ? "bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl shadow-blue-900/10"
                        : "bg-transparent border-transparent"
                )}
            >
                {/* Logo / Home Button */}
                <Link
                    href="/"
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5"
                    onClick={() => setActiveTab("Home")}
                >
                    <div className="flex items-center font-bold px-1">
                        <span className="text-blue-500">A</span>
                        <span className="hidden sm:inline">nsh</span>
                    </div>
                </Link>

                {/* Navigation Links */}
                <nav className="flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-md">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setActiveTab(link.name)}
                            className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                        >
                            {activeTab === link.name && (
                                <motion.span
                                    layoutId="bubble"
                                    className="absolute inset-0 z-[-1] bg-white/10 rounded-full border border-white/10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <span className="hidden md:inline">{link.name}</span>
                                <span className="md:hidden">{link.icon}</span>
                            </span>
                        </Link>
                    ))}
                </nav>

                {/* Socials Divider */}
                <div className="w-[1px] h-6 bg-white/10 mx-1 hidden sm:block"></div>

                {/* Social Actions */}
                <div className="flex items-center gap-2 hidden sm:flex">
                    <Link href="https://github.com/AnshY0x" target="_blank" className="p-2.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                        <Github size={18} />
                    </Link>
                    <Link href="https://x.com/AnshY0x" target="_blank" className="p-2.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
                        <Twitter size={18} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
