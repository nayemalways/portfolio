import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { NAV_LINKS } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(15,23,42,0.92)' : 'rgba(15,23,42,0.75)',
        backdropFilter: 'blur(14px)',
        borderBottom: scrolled
          ? '1px solid rgba(148,163,184,0.15)'
          : '1px solid rgba(148,163,184,0.06)',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.2)' : 'none',
      }}
    >
      <div className="container-main flex items-center justify-between">
        <Link to="/" className="font-sora font-bold text-lg text-accent tracking-tight">
          Nayem.
        </Link>

        <ul className="hidden md:flex gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <Link
                to={link === 'Blog' ? '/blog' : `/#${link.toLowerCase()}`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  (link === 'Blog' && pathname.startsWith('/blog')) || (!isHome && link === 'Blog')
                    ? 'text-accent'
                    : 'text-slate-400 hover:text-accent'
                }`}
              >
                {link}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/#contact"
              className="text-sm font-medium text-slate-400 hover:text-accent transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-3">
          <a
            href={isHome ? '/resume.pdf' : '/resume.pdf'}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-sm font-medium rounded-md border text-accent transition-all duration-200 hover:bg-[var(--accent-dim)]"
            style={{ borderColor: 'var(--accent)' }}
          >
            Resume
          </a>
          <a
            href={isHome ? '#contact' : '/#contact'}
            className="px-4 py-2 text-sm font-semibold rounded-md bg-accent text-[#0F172A] transition-all duration-200 hover:opacity-90"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
