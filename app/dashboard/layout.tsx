'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Settings, User } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const navItems = [
        { name: 'Profile', href: '/profile', icon: <User size={18} /> },
        { name: 'Settings', href: '/settings', icon: <Settings size={18} /> },
    ];

    return (
        <div className="min-h-full py-1 px-4">
            <div className="max-w-4xl mx-auto bg-white flex overflow-hidden h-full ">
                {/* Sidebar */}
                <aside className="w-56 hidden md:flex flex-col border-r border-gray-200 px-5 py-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-8 border-b border-gray-50">Dashboard</h2>

                    <nav className="space-y-2 flex-1">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {item.icon}
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
}
