'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';

export default function RegisterPage() {
    const router = useRouter();
    const [form, setForm] = useState({ username: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Something went wrong');

            router.push('/login');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="h-[80vh] bg-white flex items-center justify-center px-4">
            <div className="w-full max-w-md border border-gray-200 p-8 rounded-2xl">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="username" className="text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                            placeholder="Your username"
                            className="mt-1 w-full px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm 
                            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                            className="mt-1 w-full px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm 
                            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            placeholder="Your password"
                            className="mt-1 w-full px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm 
                            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                        />
                    </div>

                    {error && <p className="text-sm text-red-600">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 px-4 text-sm font-medium bg-black text-white rounded-lg 
                        hover:bg-gray-900 transition duration-200 disabled:opacity-60 cursor-pointer"
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>

                <div className="my-6 relative text-center">
                    <span className="absolute left-0 top-1/2 w-full border-t border-gray-300 transform -translate-y-1/2"></span>
                    <span className="relative bg-white px-3 text-sm text-gray-500">or</span>
                </div>

                <button
                    onClick={() => signIn('google')}
                    className="w-full py-2 px-4 text-sm font-medium border border-gray-300 rounded-lg flex items-center 
                    justify-center gap-3 bg-white hover:bg-gray-100 transition cursor-pointer"
                >
                    <FcGoogle className="text-xl" />
                    Sign up with Google
                </button>

                <p className="text-sm text-center text-gray-600 mt-6">
                    Already have an account?{' '}
                    <a href="/login" className="text-blue-600 hover:underline">
                        Login here
                    </a>
                </p>
            </div>
        </main>
    );
}
