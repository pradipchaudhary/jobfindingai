'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ProfilePage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/login');
        }
    }, [status, router]);

    if (status === 'loading') {
        return (
            <div className="min-h-screen flex justify-center items-center text-gray-500 text-lg">
                Loading...
            </div>
        );
    }

    const user = session?.user;

    return (
        <div className="max-w-4xl mx-auto mt-12 px-6">
            <div className="bg-white border border-gray-200 rounded-xl shadow-md p-8">
                <h1 className="text-3xl font-semibold text-gray-800 mb-6">👤 User Profile</h1>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <img
                        src={user?.image || '/default-avatar.png'}
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full object-cover border border-gray-300"
                    />
                    <div>
                        <h2 className="text-2xl font-medium text-gray-800">
                            {user?.name || 'Anonymous User'}
                        </h2>
                        <p className="text-gray-500">{user?.email || 'No email provided'}</p>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">📄 Account Details</h3>
                    <div className="space-y-3 text-gray-700 text-sm">
                        <div>
                            <span className="font-medium">Name:</span>{' '}
                            {user?.name || 'N/A'}
                        </div>
                        <div>
                            <span className="font-medium">Email:</span>{' '}
                            {user?.email || 'N/A'}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
