type Props = {
  title: string
  company: string
  location: string
  link: string
}

export default function JobCard({ title, company, location, link }: Props) {
  return (
    <div className="border p-4 rounded">
      <h3 className="font-bold">{title}</h3>
      <p>{company} - {location}</p>
      <a href={link} className="text-blue-500">Apply</a>
    </div>
  )
}
