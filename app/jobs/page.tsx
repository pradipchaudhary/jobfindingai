'use client';

import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/jobs')
      .then(res => res.json())
      .then(data => {
        if (data.success) setJobs(data.jobs);
      });
  }, []);

  return (
    <main className="max-w-4xl mx-auto px-6 py-10 min-h-screen">
      {jobs.length === 0 ? (
        <section
          aria-busy="true"
          aria-label="Loading jobs"
          className="flex flex-col justify-center items-center h-screen text-gray-700"
        >
          <Loader2 className="animate-spin text-blue-600 mb-6" size={56} />
          <h1 className="text-3xl font-semibold mb-2">JobFindingAI</h1>
          <p className="text-gray-500 text-lg max-w-md text-center">
            Fetching the latest jobs tailored just for you...
          </p>
        </section>
      ) : (
        <section aria-label="Job listings" className="space-y-4">
          <ul className="grid grid-cols-1 gap-4">
            {jobs.map((job, index) => (
              <li
                key={index}
                className="p-6 rounded-lg border border-gray-200 transition-shadow duration-300 cursor-pointer hover:shadow-sm"
              >
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xl font-semibold text-indigo-700 hover:underline max-w-xl"
                  aria-label={`View details for job: ${job.title}`}
                >
                  {job.title}
                </a>
                <p className="mt-2 text-gray-600 text-sm max-w-xl">
                  {job.company} <span className="mx-2">•</span> {job.location}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
