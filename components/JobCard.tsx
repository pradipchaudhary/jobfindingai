'use client';

interface JobProps {
  title: string;
  company: string;
  location: string;
  link: string;
}

export default function JobCard({ title, company, location, link }: JobProps) {
  return (
    <li className="p-4 border rounded hover:shadow">
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-600">
        {title}
      </a>
      <p className="text-sm text-gray-700">{company} | {location}</p>
    </li>
  );
}
