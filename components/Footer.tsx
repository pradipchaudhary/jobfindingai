'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 py-12 px-6 lg:px-12 text-gray-500 text-sm bg-white">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <p>© {year} JobFindingAI</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-800 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-800 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-800 transition-colors">Support</a>
        </div>
      </div>
    </footer>
  )
}
