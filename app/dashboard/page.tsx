'use client';

export default function DashboardPage() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-4">
            <h1 className="text-3xl sm:text-2xl font-bold text-gray-800 mb-10">
                👋 Welcome Back, Pradip
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DashboardCard
                    title="AI Job Suggestions"
                    description="Get personalized job recommendations powered by AI."
                    action="View Suggestions"
                />

                <DashboardCard
                    title="Application Stats"
                    customContent={
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>✅ Applied: <strong>12</strong></li>
                            <li>📌 Saved: <strong>5</strong></li>
                            <li>🎤 Interviews: <strong>2</strong></li>
                        </ul>
                    }
                    action="Track Applications"
                />

                <DashboardCard
                    title="Resume Status"
                    description="Your resume is 85% complete. Improve it for better matches."
                    action="Update Resume"
                />

                <DashboardCard
                    title="Saved Jobs"
                    description="You’ve saved 5 jobs to review later."
                    action="View Saved Jobs"
                />

                <DashboardCard
                    title="Profile Completion"
                    description="Profile is 90% complete. Just one more step!"
                    action="Complete Profile"
                />

                <DashboardCard
                    title="Notifications"
                    description="You have 3 new job alerts and 1 new message."
                    action="Check Inbox"
                />
            </div>
        </div>
    );
}

function DashboardCard({
    title,
    description,
    action,
    customContent,
}: {
    title: string;
    description?: string;
    action?: string;
    customContent?: React.ReactNode;
}) {
    return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 flex flex-col justify-between min-h-[180px]">
            <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
                <div className="text-sm text-gray-600 leading-relaxed">
                    {customContent || description}
                </div>
            </div>

            {action && (
                <button className="mt-4 text-sm text-indigo-600 font-medium hover:underline focus:outline-none">
                    {action} →
                </button>
            )}
        </div>
    );
}
