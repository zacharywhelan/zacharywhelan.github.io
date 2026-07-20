import { useState } from 'react'
import { nav, profile } from '../data/content'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const handleClick = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/80 dark:bg-neutral-950/80 border-b border-black/5 dark:border-white/10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-display text-lg tracking-tight text-neutral-900 dark:text-neutral-100"
        >
          {profile.name}
        </a>

        <nav className="hidden sm:flex items-center gap-8 text-sm">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900 px-4 py-2 text-sm font-medium hover:opacity-85 transition-opacity"
          >
            CV
          </a>
        </nav>

        <button
          className="sm:hidden text-neutral-700 dark:text-neutral-200"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="sm:hidden px-6 pb-4 flex flex-col gap-4 text-sm border-t border-black/5 dark:border-white/10">
          {nav.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className="text-left text-neutral-600 dark:text-neutral-300"
            >
              {item.label}
            </button>
          ))}
          <a href={profile.cv} target="_blank" rel="noreferrer" className="text-left font-medium text-accent">
            CV
          </a>
        </nav>
      )}
    </header>
  )
}
