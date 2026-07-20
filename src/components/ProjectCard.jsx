export default function ProjectCard({ project, featured = false }) {
  return (
    <div
      className={`rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 sm:p-8 ${
        featured ? 'sm:p-10' : ''
      }`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
        <h3 className={`font-medium text-neutral-900 dark:text-neutral-100 ${featured ? 'text-xl' : 'text-lg'}`}>
          {project.title}
        </h3>
        <span className="text-xs text-neutral-400 dark:text-neutral-600">{project.meta}</span>
      </div>
      <p className="text-sm text-accent mb-4">{project.subtitle}</p>

      <ul className="space-y-2 mb-4">
        {project.points.map((point, idx) => (
          <li
            key={idx}
            className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-[15px] pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-neutral-300 dark:before:text-neutral-700"
          >
            {point}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tools.map((tool) => (
          <span
            key={tool}
            className="text-xs font-medium text-neutral-500 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1"
          >
            {tool}
          </span>
        ))}
      </div>

      {project.links?.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-accent hover:underline"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}

      {project.gallery?.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
          {project.gallery.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="rounded-lg border border-neutral-200 dark:border-neutral-800 object-cover aspect-video"
            />
          ))}
        </div>
      )}

      {project.flagship && !(project.gallery?.length > 0) && (
        <div className="mt-5 rounded-lg border border-dashed border-neutral-300 dark:border-neutral-700 py-8 text-center text-sm text-neutral-400 dark:text-neutral-600">
          Screenshots coming soon
        </div>
      )}
    </div>
  )
}
