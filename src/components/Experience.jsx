import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, MapPin, Calendar } from 'lucide-react'
import { EXPERIENCES } from '../data'

function ExperienceCard({ exp, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div
        className="absolute left-[11px] top-3 bottom-0 w-px last:hidden"
        style={{ background: 'linear-gradient(to bottom, var(--accent), rgba(148,163,184,0.1))' }}
      />

      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full flex items-center justify-center"
        style={{ background: 'var(--accent-dim)', border: '2px solid var(--accent)' }}
      >
        <div className="w-[7px] h-[7px] rounded-full bg-accent" />
      </div>

      {/* Card */}
      <div
        className="rounded-xl p-5 md:p-6 transition-all duration-300"
        style={{ border: '1px solid var(--border)', background: '#0F172A' }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-sora font-bold text-base md:text-lg text-slate-100">{exp.role}</h3>
            <p className="text-accent text-sm font-medium flex items-center gap-1.5 mt-0.5">
              <Briefcase size={13} />
              {exp.company}
            </p>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500 mb-4">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {exp.period}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={13} />
            {exp.location}
          </span>
        </div>

        {/* Highlights */}
        <ul className="space-y-2">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed">
              <span
                className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: 'var(--accent)' }}
              />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24">
      <div className="container-main">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">Experience</p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold leading-tight mb-3">Where I've Worked</h2>
          <p className="text-slate-400 text-base max-w-md">
            A timeline of roles, responsibilities, and real-world impact.
          </p>
        </motion.div>

        <div className="max-w-3xl">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
