'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
    const [form, setForm] = useState({ email: '', password: '' });
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await signIn('credentials', {
            redirect: false,
            email: form.email,
            password: form.password,
        });

        if (res?.ok) router.push('/dashboard');
        else alert('Login failed');
    };

    return (
        <div className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Login to your account</h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black text-sm"
                            placeholder="you@example.com"
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:ring-black text-sm"
                            placeholder="••••••••"
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-md bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-black"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}
