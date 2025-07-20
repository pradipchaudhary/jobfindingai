'use client';

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
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">🧠 Latest Jobs in Nepal</h1>
      {jobs.length === 0 ? (
        <p>Loading jobs...</p>
      ) : (
        <ul className="grid grid-cols-1 gap-4">
          {jobs.map((job, index) => (
            <li key={index} className="p-4 border rounded hover:shadow">
              <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600">
                {job.title}
              </a>
              <p className="text-sm text-gray-700">{job.company} | {job.location}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
