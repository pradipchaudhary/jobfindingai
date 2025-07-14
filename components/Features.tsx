'use client'

import { Search, FileText, Send, BarChart3, Bell } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'AI-based Job Matching',
    desc: 'Smart algorithms scan thousands of openings to surface roles tailored to you.',
  },
  {
    icon: FileText,
    title: 'Resume Analysis',
    desc: 'Instant feedback & improvement suggestions to make your resume stand out.',
  },
  {
    icon: Send,
    title: 'Automated Applications',
    desc: 'Apply to multiple positions without lifting a finger, complete with custom cover letters.',
  },
  {
    icon: BarChart3,
    title: 'Tracking Dashboard',
    desc: 'Visualize application status, interviews, and offers in real time.',
  },
  {
    icon: Bell,
    title: 'Real-time Alerts',
    desc: 'Never miss an opening—receive instant notifications for perfect-match roles.',
  },
]

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto py-24 px-6 lg:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
      {features.map((feat, idx) => (
        <div
          key={idx}
          className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="p-3 bg-indigo-100 rounded-lg">
            <feat.icon className="w-5 h-5 stroke-indigo-500" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">{feat.title}</h3>
            <p className="text-gray-600 text-sm">{feat.desc}</p>
          </div>
        </div>
      ))}
    </section>
  )
}
