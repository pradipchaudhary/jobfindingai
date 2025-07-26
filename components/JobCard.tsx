

type Job = {
  title: string;
  company: string;
  location: string;
  link: string;
};

export default function JobCard({ job }: { job: Job }) {
  return (
    <li className="p-5 border border-gray-200 rounded-xl shadow-sm transition hover:shadow-md bg-white">
      <a
        href={job.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-lg font-semibold text-blue-600 hover:underline"
      >
        {job.title}
      </a>
      <p className="mt-1 text-sm text-gray-600">
        {job.company} <span className="mx-1">|</span> {job.location}
      </p>
    </li>
  );
}
