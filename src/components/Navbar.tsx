export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 select-none">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-semibold text-lg tracking-tight">Adarsh Choudhary</span>
        <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-600">
          <a href="#about" className="hover:text-zinc-900 transition-colors">
            About
          </a>
          <a href="#experience" className="hover:text-zinc-900 transition-colors">
            Experience
          </a>
          <a href="#education" className="hover:text-zinc-900 transition-colors">
            Study
          </a>
          <a href="#projects" className="hover:text-zinc-900 transition-colors">
            Projects
          </a>
          <a href="#activities" className="hover:text-zinc-900 transition-colors">
            Activities
          </a>
        </div>
      </div>
    </nav>
  );
}
