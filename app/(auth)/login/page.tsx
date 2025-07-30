// app/login/page.tsx
'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [form, setForm] = useState({ email: '', password: '' });
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await signIn('credentials', {
            redirect: false,
            email: form.email,
            password: form.password
        });

        if (res?.ok) router.push('/dashboard');
        else alert('Login failed');
    };

    return (
        <form onSubmit={handleLogin} className="max-w-md mx-auto mt-10 space-y-4">
            <input className="input" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
            <input className="input" type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
            <button className="btn" type="submit">Login</button>
        </form>
    );
}
