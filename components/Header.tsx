'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white text-gray-900 ">
            <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-blue-600 tracking-tight">
                    JobFindingAI
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/jobs" className="hover:text-blue-600 transition-colors">
                        Jobs
                    </Link>
                    <Link href="/support" className="hover:text-blue-600 transition-colors">
                        Support
                    </Link>
                    <Link href="/login" className="hover:text-blue-600 transition-colors">
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Signup
                    </Link>
                </nav>

                {/* Hamburger Icon (Mobile) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-gray-800 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden max-w-4xl mx-auto px-4 py-2 space-y-2 text-sm font-medium">
                    <Link href="/jobs" className="block hover:text-blue-600 transition-colors">
                        Jobs
                    </Link>
                    <Link href="/support" className="block hover:text-blue-600 transition-colors">
                        Support
                    </Link>
                    <Link href="/login" className="block hover:text-blue-600 transition-colors">
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="block bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Signup
                    </Link>
                </nav>
            )}
        </header>
    );
}
