'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const res = await signIn('credentials', {
            redirect: false,
            email: form.email,
            password: form.password,
        });

        if (res?.ok) {
            router.push('/dashboard');
        } else {
            setError('Invalid email or password');
        }

        setLoading(false);
    };

    return (
        <main className="h-[80vh] bg-white flex items-center justify-center px-4">
            <div className="w-full max-w-md border border-gray-200 p-8 rounded-2xl shadow-md">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Sign in to your account</h1>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 block">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="mt-1 w-full px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700 block">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            placeholder="••••••••"
                            value={form.password}
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            className="mt-1 w-full px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 px-4 text-sm font-medium bg-black text-white rounded-lg 
                        hover:bg-gray-900 transition duration-200 disabled:opacity-60 cursor-pointer"
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <div className="my-6 relative text-center">
                    <span className="absolute left-0 top-1/2 w-full border-t border-gray-300 transform -translate-y-1/2"></span>
                    <span className="relative bg-white px-3 text-sm text-gray-500">or</span>
                </div>

                <button
                    type="button"
                    onClick={() => signIn('google')}
                    className="w-full py-2 px-4 text-sm font-medium border border-gray-300 rounded-lg flex items-center 
                    justify-center gap-3 bg-white hover:bg-gray-100 transition cursor-pointer"
                >
                    <FcGoogle className="text-xl" />
                    Continue with Google
                </button>

                <p className="text-sm text-center text-gray-600 mt-6">
                    Don’t have an account?{' '}
                    <a href="/register" className="text-blue-600 hover:underline">
                        Register here
                    </a>
                </p>
            </div>
        </main>
    );
}
