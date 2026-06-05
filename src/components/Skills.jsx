import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiFramer,
  SiNodedotjs, SiExpress, SiGraphql, SiSocketdotio, SiPrisma,
  SiMongodb, SiPostgresql,
  SiGit, SiDocker, SiVercel, SiJest,
} from 'react-icons/si'
import { FiServer } from 'react-icons/fi'
import { SKILL_CATEGORIES } from '../data'

const iconMap = {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiFramer,
  SiNodedotjs, SiExpress, SiGraphql, SiSocketdotio, SiPrisma,
  SiMongodb, SiPostgresql,
  SiGit, SiDocker, SiVercel, SiJest,
  FiServer,
}

function SkillCard({ item, parentInView }) {
  const Icon = iconMap[item.icon]

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={parentInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-default group"
      style={{
        background: 'rgba(30,41,59,0.4)',
        border: '1px solid var(--border)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${item.color}40`
        e.currentTarget.style.background = `${item.color}0d`
        e.currentTarget.style.boxShadow = `0 4px 20px ${item.color}15`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.background = 'rgba(30,41,59,0.4)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-lg shrink-0 transition-transform duration-300 group-hover:scale-110">
        <Icon size={22} />
      </div>
      <span className="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors duration-200">
        {item.name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24">
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">Expertise</p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold leading-tight mb-12">
            Skills &amp; Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
          {SKILL_CATEGORIES.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
            >
              <h3 className="font-sora font-semibold text-xs tracking-[0.12em] uppercase text-slate-500 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-col gap-2.5">
                {category.items.map((item, ii) => (
                  <SkillCard
                    key={item.name}
                    item={item}
                    parentInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
