import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-500 dark:text-neutral-500">
      <p className="mb-2">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      <p>
        <a href={`mailto:${profile.email}`} className="text-accent font-medium hover:underline">
          Email
        </a>
        {' · '}
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-accent font-medium hover:underline">
          LinkedIn
        </a>
      </p>
    </footer>
  )
}
