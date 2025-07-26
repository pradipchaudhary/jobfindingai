'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormData {
    username: string;
    email: string;
    password: string;
}

export default function RegisterPage() {
    const [formData, setFormData] = useState<FormData>({
        username: '',
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const userPayload = {
            username: formData.username,
            email: formData.email,
            password: formData.password,
        };

        try {
            const res = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify(userPayload),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || 'Failed to register user');

            router.push('/users');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto my-20 p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                Register New User
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                {['username', 'email', 'password'].map((field) => (
                    <input
                        key={field}
                        type={field === 'password' ? 'password' : 'text'}
                        name={field}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        value={(formData as any)[field]}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                ))}

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200"
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
}
