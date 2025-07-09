export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-neutral-800 py-12 px-6 lg:px-12 text-neutral-500 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between gap-6">
        <p>© {year} JobFindingAI</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-neutral-300">Privacy</a>
          <a href="#" className="hover:text-neutral-300">Terms</a>
          <a href="#" className="hover:text-neutral-300">Support</a>
        </div>
      </div>
    </footer>
  )
}
