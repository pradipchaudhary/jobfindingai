'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        avatar: '',
        resume: '',
        skills: '',
        experience: '',
        education: '',
        location: '',
        jobType: 'remote',
        categories: '',
        minSalary: '',
        maxSalary: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            avatar: formData.avatar,
            resume: formData.resume,
            skills: formData.skills.split(',').map((skill) => skill.trim()),
            experience: formData.experience,
            education: formData.education,
            preferences: {
                location: formData.location,
                jobType: formData.jobType,
                categories: formData.categories.split(',').map((cat) => cat.trim()),
                salaryRange: {
                    min: Number(formData.minSalary),
                    max: Number(formData.maxSalary),
                },
            },
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
        <div className="max-w-2xl mx-auto mt-8 p-6 border rounded shadow">
            <h1 className="text-2xl font-semibold mb-4">Register New User</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Basic Fields */}
                {['username', 'email', 'password', 'avatar', 'resume', 'skills', 'experience', 'education', 'location', 'categories', 'minSalary', 'maxSalary'].map((field) => (
                    <input
                        key={field}
                        type="text"
                        name={field}
                        placeholder={field}
                        value={(formData as any)[field]}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    />
                ))}

                {/* Job Type */}
                <select
                    name="jobType"
                    value={formData.jobType}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                >
                    <option value="remote">Remote</option>
                    <option value="on-site">On-site</option>
                    <option value="hybrid">Hybrid</option>
                </select>

                {error && <p className="text-red-500">{error}</p>}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    {loading ? 'Registering...' : 'Register'}
                </button>
            </form>
        </div>
    );
}
