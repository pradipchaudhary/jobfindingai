'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useSession, signOut } from 'next-auth/react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { data: session, status } = useSession();

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Helper to get user initials fallback
    const getInitials = (name?: string) => {
        if (!name) return '';
        const parts = name.trim().split(' ');
        if (parts.length === 1) return parts[0][0].toUpperCase();
        return (parts[0][0] + parts[1][0]).toUpperCase();
    };

    return (
        <header className="bg-white text-gray-900 shadow-sm">
            <div className="max-w-4xl mx-auto px-4 py-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-black tracking-tight">
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

                    {status === 'loading' ? (
                        <span className="text-gray-500">Loading...</span>
                    ) : session ? (
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center gap-2 rounded-md px-3 py-1 hover:bg-gray-100 transition"
                                aria-haspopup="true"
                                aria-expanded={dropdownOpen}
                            >
                                {/* Avatar */}
                                {session.user?.image ? (
                                    <img
                                        src={session.user.image}
                                        alt="User avatar"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                ) : (
                                    <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white font-semibold">
                                        {getInitials(session.user?.name || session.user?.email || '')}
                                    </div>
                                )}

                                {/* Username */}
                                <span className="text-gray-700 whitespace-nowrap">
                                    {session.user?.name || session.user?.email}
                                </span>

                                <ChevronDown className={`w-4 h-4 text-gray-700 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown menu */}
                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                    <Link
                                        href="/profile"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        href="/settings"
                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        Settings
                                    </Link>
                                    <button
                                        onClick={() => {
                                            signOut();
                                            setDropdownOpen(false);
                                        }}
                                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <Link href="/login" className="hover:text-blue-600 transition-colors">
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="bg-black text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-900 transition-colors"
                            >
                                Signup
                            </Link>
                        </>
                    )}
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

                    {status === 'loading' ? (
                        <span className="block text-gray-500">Loading...</span>
                    ) : session ? (
                        <>
                            <span className="block text-gray-700 px-2">
                                Hi, {session.user?.name || session.user?.email}
                            </span>
                            <Link
                                href="/profile"
                                className="block px-4 py-2 hover:bg-gray-100 rounded"
                                onClick={() => setIsOpen(false)}
                            >
                                Profile
                            </Link>
                            <Link
                                href="/settings"
                                className="block px-4 py-2 hover:bg-gray-100 rounded"
                                onClick={() => setIsOpen(false)}
                            >
                                Settings
                            </Link>
                            <button
                                onClick={() => {
                                    signOut();
                                    setIsOpen(false);
                                }}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100 rounded"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="block hover:text-blue-600 transition-colors">
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="block bg-black text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-900 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Signup
                            </Link>
                        </>
                    )}
                </nav>
            )}
        </header>
    );
}
