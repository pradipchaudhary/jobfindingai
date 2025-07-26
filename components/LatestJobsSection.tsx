import Link from 'next/link';
import JobCard from './JobCard';

type Job = {
    title: string;
    company: string;
    location: string;
    link: string;
};

export default function LatestJobsSection({ jobs }: { jobs: Job[] }) {
    // Limit to 6 jobs max
    const jobsToShow = jobs.slice(0, 6);

    return (
        <section className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold mb-6">Latest Jobs</h2>

            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {jobsToShow.map((job, index) => (
                    <JobCard key={index} job={job} />
                ))}
            </ul>

            <Link
                href="/jobs"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
                More Jobs →
            </Link>
        </section>
    );
}
