import { motion } from 'framer-motion'
import { Eye, FileText } from 'lucide-react'
import SocialLinks from './SocialLinks'
import myPhoto from "../../public/projects_photos/me.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden"
    >
      {/* Grid background */}
      <div className="hero-grid-bg absolute inset-0 pointer-events-none" />

      {/* Glow */}
      <div
        className="absolute top-1/4 right-[5%] w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)',
        }}
      />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-7">
            <span
              className="flex items-center gap-2 text-accent text-xs font-semibold tracking-wide px-4 py-1.5 rounded-full"
              style={{
                background: 'var(--accent-dim)',
                border: '1px solid var(--accent-dim2)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
              Available for Freelance &amp; Full-time
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.2)}
            className="font-sora text-3xl md:text-4xl xl:text-5xl font-bold leading-[1.12] tracking-tight mb-5"
          >
          <span className="text-accent">Software Developer |</span><br />
            Scalable Web Systems, Cloud & DevOps
          </motion.h1>

          {/* Description */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-theme-muted text-lg max-w-lg mb-9 leading-relaxed"
          >
            Hi, I'm <strong className="text-theme-secondary font-medium">Nayem. </strong>
            Backend developer focused on scalable systems, cloud infrastructure, and production-ready web applications & Node.js expertise.

          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-[var(--bg-primary)] font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{ boxShadow: 'none' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 25px var(--accent-glow)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <Eye size={16} />
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1pgmmQzAFiPsAMo3mstwA9lRGHJ0NnLVc/view"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm text-theme-secondary transition-all duration-200 hover:text-accent hover:bg-[var(--accent-dim)]"
              style={{ border: '1px solid var(--border-hover)' }}
            >
              <FileText size={16} />
              View Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div {...fadeUp(0.5)}>
            <SocialLinks />
          </motion.div>
        </div>

        {/* Right: Profile Image */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex justify-center items-center"
        >
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 via-accent/5 to-transparent animate-pulse" />
            {/* Inner circle */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-accent/20 flex items-center justify-center overflow-hidden">
              <img
                src={myPhoto}
                alt="MD. Nayem"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Orbiting dots decoration */}
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent/40" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 rounded-full bg-accent/20" />
            <div className="absolute top-1/2 -right-4 w-3 h-3 rounded-full bg-accent/30" />
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
