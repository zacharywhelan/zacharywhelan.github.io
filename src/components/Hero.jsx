import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="max-w-5xl mx-auto px-6 pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div className="grid sm:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <p className="text-sm font-medium tracking-wide uppercase text-accent mb-4">
            {profile.tagline}
          </p>
          <h1 className="font-display text-4xl sm:text-6xl leading-[1.05] tracking-tight text-neutral-900 dark:text-neutral-50">
            Hi, I&apos;m Zach.
          </h1>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            {profile.blurb}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-neutral-900 text-neutral-50 dark:bg-neutral-100 dark:text-neutral-900 px-5 py-3 text-sm font-medium hover:opacity-85 transition-opacity"
            >
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-neutral-300 dark:border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
            >
              Email
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-neutral-300 dark:border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <img
          src={profile.photo}
          alt={profile.name}
          className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover shadow-lg shadow-black/10 dark:shadow-black/40 mx-auto sm:mx-0 order-first sm:order-last"
        />
      </div>
    </section>
  )
}
