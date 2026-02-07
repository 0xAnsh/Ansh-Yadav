"use client";

import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="bg-black text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">

                <div className="space-y-4">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 inline-block">
                        Let's Connect
                    </h3>
                    <p className="text-gray-400">
                        Open to new opportunities and collaborations.
                    </p>

                    <div className="flex items-center gap-2 text-gray-300">
                        <Mail size={18} className="text-blue-500" />
                        <a href="mailto:anshyadav.155@gmail.com" className="hover:text-white transition-colors">
                            anshyadav.155@gmail.com
                        </a>
                    </div>

                    <div className="flex items-center gap-2 text-gray-300">
                        <MapPin size={18} className="text-purple-500" />
                        <span>Prayagraj, India</span>
                    </div>
                </div>

                <div className="flex flex-col md:items-end gap-6 h-full justify-between">
                    <div className="flex gap-4">
                        <Link href="https://github.com/AnshY0x" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all">
                            <Github size={20} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/ansh-yadav-3a74b4218/" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="https://x.com/AnshY0x" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-blue-400 transition-all">
                            <Twitter size={20} />
                        </Link>
                    </div>

                    <p className="text-sm text-gray-500">
                        Built with React & ❤️ by Ansh Yadav
                    </p>
                </div>
            </div>
        </footer>
    );
}
