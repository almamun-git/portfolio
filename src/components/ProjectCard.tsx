import type { Project } from '../data';
import { TechIcon } from './TechIcon';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative card p-5 flex flex-col gap-4 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary-500/5 via-primary-500/0 to-primary-500/10" />
      <div className="flex flex-col gap-4 flex-1">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 relative z-10">
        <h3 className="text-lg font-semibold leading-tight flex-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{project.title}</h3>
        {project.highlight && (
          <span
            className="tag block w-full sm:w-auto whitespace-normal break-words leading-snug mt-1 sm:mt-0"
            title={project.highlight}
            aria-label={project.highlight}
          >
            {project.highlight}
          </span>
        )}
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed relative z-10">{project.description}</p>
      <div className="flex flex-wrap gap-3 text-xs relative z-10">
        {project.tech.map(t => (
          <span key={t} className="inline-flex items-center gap-1 px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            <TechIcon name={t} size={14} /> {t}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-4 text-sm pt-2 relative z-10">
        {project.links.github && <a className="inline-flex items-center gap-1 font-medium text-primary-600 dark:text-primary-400 hover:underline" href={project.links.github} target="_blank" rel="noreferrer">Code <span aria-hidden>→</span></a>}
        {project.links.demo && <a className="inline-flex items-center gap-1 font-medium text-primary-600 dark:text-primary-400 hover:underline" href={project.links.demo} target="_blank" rel="noreferrer">Demo <span aria-hidden>→</span></a>}
      </div>
      </div>
      <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent group-hover:ring-primary-500/40" />
    </div>
  );
}
