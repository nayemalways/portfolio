import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { PROJECTS } from '../data'

function ProjectThumb({ color, accentColor }) {
  return (
    <div className={`h-44 bg-gradient-to-br ${color} flex items-center justify-center`}>
      <svg viewBox="0 0 120 80" width="120" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="100" height="60" rx="6"
          stroke={accentColor} strokeWidth="1.2" strokeDasharray="4 2" />
        <rect x="18" y="18" width="42" height="28" rx="4" fill="#1E293B" stroke={accentColor} strokeWidth="1" />
        <rect x="64" y="18" width="38" height="12" rx="3" fill="#F59E0B" opacity="0.75" />
        <rect x="64" y="34" width="28" height="12" rx="3" fill="#1E293B" stroke="#F59E0B" strokeWidth="0.8" />
        <rect x="18" y="52" width="84" height="7" rx="2" fill="#1E293B" stroke="#94A3B8" strokeWidth="0.5" />
      </svg>
    </div>
  )
}

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="flex flex-col rounded-xl overflow-hidden transition-all duration-300"
      style={{ border: '1px solid var(--border)', background: 'var(--bg-elevated)' }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--border-hover)'
        e.currentTarget.style.boxShadow = '0 20px 40px var(--shadow)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <ProjectThumb color={project.color} accentColor={project.accentColor} />

      <div className="p-6 flex flex-col flex-1">
        {/* Scope tags (role indicators) */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.scope.map(s => (
            <span
              key={s}
              className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full text-white"
              style={{
                background:
                  s === 'Full Stack' ? '#F59E0B' :
                  s === 'Frontend' ? '#3B82F6' : '#10B981',
              }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded text-accent"
              style={{ background: 'var(--accent-dim)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-sora font-bold text-base mb-2">{project.title}</h3>
        <p className="text-theme-muted text-sm leading-relaxed flex-1">{project.desc}</p>

        <div className="flex gap-3 mt-5">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-semibold bg-accent text-[var(--bg-primary)] hover:opacity-85 transition-opacity"
          >
            <ExternalLink size={12} />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md text-xs font-medium text-theme-muted hover:text-accent hover:border-accent transition-colors duration-200"
            style={{ border: '1px solid var(--border)' }}
          >
            <Github size={12} />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 bg-theme-surface">
      <div className="container-main">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">Work</p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold leading-tight mb-3">Featured Projects</h2>
          <p className="text-theme-muted text-base max-w-md">
            A selection of things I've built — real problems, real solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
