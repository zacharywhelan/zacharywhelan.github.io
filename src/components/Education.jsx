import Reveal from './Reveal'
import { education } from '../data/content'

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-20 border-t border-neutral-200 dark:border-neutral-800">
      <Reveal as="h2" className="font-display text-2xl sm:text-3xl text-neutral-900 dark:text-neutral-50 mb-10">
        Education
      </Reveal>

      <div className="space-y-10">
        {education.map((entry, i) => (
          <Reveal key={entry.school} delay={i * 60} className="grid sm:grid-cols-[220px_1fr] gap-2 sm:gap-8">
            <p className="hidden sm:block text-sm text-neutral-500 dark:text-neutral-500">{entry.meta}</p>
            <div>
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">{entry.school}</h3>
              <p className="text-sm text-accent mb-3">{entry.detail}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 sm:hidden -mt-2 mb-3">{entry.meta}</p>
              <ul className="space-y-2">
                {entry.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-[15px] pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-neutral-300 dark:before:text-neutral-700"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
