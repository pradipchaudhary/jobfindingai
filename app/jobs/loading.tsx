// app/jobs/loading.tsx
'use client';
import { Loader2 } from 'lucide-react';

export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-indigo-700">
            <div className="text-center text-white">
                <div className="flex justify-center mb-4 animate-spin">
                    <Loader2 size={64} />
                </div>
                <h1 className="text-3xl font-bold">JobFindingAI</h1>
                <p className="text-lg mt-2">Scraping jobs from top sites... 🔍</p>
            </div>
        </div>
    );
}
