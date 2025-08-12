'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login');
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || '');
      setEmail(session.user.email || '');
    }
  }, [session]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex justify-center items-center text-gray-500 text-lg">
        Loading...
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto mt-2 px-6">
      <section className="p-2">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Profile</h1>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={session?.user?.image ?? '/default-avatar.png'}
            alt="User Avatar"
            className="w-24 h-24 rounded-full object-cover border border-gray-300"
          />
          <div>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              className="text-2xl font-medium text-gray-800 bg-transparent focus:outline-none focus:ring-0 placeholder-gray-400"
              style={{ border: 'none', borderBottom: 'none' }}
            />
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              className="text-gray-500 bg-transparent focus:outline-none focus:ring-0 placeholder-gray-400 mt-1"
              style={{ border: 'none', borderBottom: 'none' }}
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">📄 Account Details</h3>
          <div className="space-y-6 text-gray-700 text-sm">
            <div>
              <label className="font-medium block mb-1">Name:</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name"
                className="w-full bg-transparent focus:outline-none focus:ring-0 placeholder-gray-400"
                style={{ border: 'none', borderBottom: 'none' }}
              />
            </div>
            <div>
              <label className="font-medium block mb-1">Email:</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full bg-transparent focus:outline-none focus:ring-0 placeholder-gray-400"
                style={{ border: 'none', borderBottom: 'none' }}
              />
            </div>

            <h1>Hello</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
