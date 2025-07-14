import { auth } from "next-auth"
import { prisma } from "@/lib/prisma"

export default async function Dashboard() {
  const jobs = await prisma.job.findMany()

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Your Applied Jobs</h2>
      <ul className="mt-4">
        {jobs.map((job) => (
          <li key={job.id} className="border p-2 rounded mb-2">
            <p>{job.title} at {job.company}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
