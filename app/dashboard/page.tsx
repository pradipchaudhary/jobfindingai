// app/dashboard/page.tsx or wherever your route file is
import mongooseConnection from "@/lib/mongoose"
import { Job } from "@/models/Job"

export default async function Dashboard() {
  await mongooseConnection // Ensure DB is connected

  const jobs = await Job.find().lean() // Fetch jobs from MongoDB

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Your Applied Jobs</h2>
      <ul className="mt-4">
        {jobs.map((job) => (
          <li key={job._id.toString()} className="border p-2 rounded mb-2">
            <p>{job.title} at {job.company}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
