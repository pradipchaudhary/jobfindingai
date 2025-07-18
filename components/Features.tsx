'use client'

const features = [
    {
        title: 'AI-based Job Matching',
        desc: 'Smart algorithms scan thousands of openings to surface roles tailored to you.',
    },
    {
        title: 'Resume Analysis',
        desc: 'Instant feedback & improvement suggestions to make your resume stand out.',
    },
    {
        title: 'Automated Applications',
        desc: 'Apply to multiple positions without lifting a finger, complete with custom cover letters.',
    },
    {
        title: 'Tracking Dashboard',
        desc: 'Visualize application status, interviews, and offers in real time.',
    },
    {
        title: 'Real-time Alerts',
        desc: 'Never miss an opening—receive instant notifications for perfect-match roles.',
    },
]

export default function Features() {
    return (
        <section className="max-w-7xl mx-auto py-24 px-6 lg:px-12 ">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {features.map((feat, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-all duration-200 hover:shadow-lg hover:border-indigo-200 hover:scale-[1.015] cursor-pointer"
                    >
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-indigo-600 transition-colors duration-200">
                            {feat.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {feat.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
