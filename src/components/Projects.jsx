import Reveal from './Reveal'
import ProjectCard from './ProjectCard'
import { projects } from '../data/content'

export default function Projects() {
  const [flagship, ...rest] = projects

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-neutral-200 dark:border-neutral-800">
      <Reveal as="h2" className="font-display text-2xl sm:text-3xl text-neutral-900 dark:text-neutral-50 mb-10">
        Projects
      </Reveal>

      <Reveal className="mb-8">
        <ProjectCard project={flagship} featured />
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-6">
        {rest.map((project, i) => (
          <Reveal key={project.id} delay={i * 60}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
