import { motion } from 'framer-motion'
import { Code2, Database, Layers, Zap } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SERVICES } from '../data'

const ICON_MAP = { Code2, Database, Layers, Zap }

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = ICON_MAP[service.icon]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="relative overflow-hidden rounded-xl p-7 transition-colors duration-300 group"
      style={{
        background: 'var(--bg-elevated)',
        border: '1px solid var(--border)',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-hover)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      {/* Hover gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, var(--accent-dim) 0%, transparent 60%)' }}
      />

      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-accent relative z-10"
        style={{ background: 'var(--accent-dim)' }}
      >
        <Icon size={22} />
      </div>
      <h3 className="font-sora font-semibold text-base mb-2 relative z-10">{service.title}</h3>
      <p className="text-theme-muted text-sm leading-relaxed relative z-10">{service.desc}</p>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="py-24 bg-theme-surface">
      <div className="container-main">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">What I Do</p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold leading-tight mb-3">Services I offer</h2>
          <p className="text-theme-muted text-base max-w-md">
            From frontend to backend, I cover the full stack with care and precision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
