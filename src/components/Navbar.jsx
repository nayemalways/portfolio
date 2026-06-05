import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { NAV_LINKS } from '../data'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const { theme, toggleTheme } = useTheme()

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
        background: scrolled ? 'var(--navbar-bg)' : 'var(--navbar-bg-start)',
        backdropFilter: 'blur(14px)',
        borderBottom: scrolled
          ? '1px solid var(--border)'
          : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px var(--shadow)' : 'none',
      }}
    >
      <div className="container-main flex items-center justify-between">
        <Link to="/" className="font-sora font-bold text-lg text-accent tracking-tight">
          Nayem.
        </Link>

        <ul className="hidden md:flex gap-8 list-none">
          {NAV_LINKS.map((link) => {
            const isBlog = link === 'Blog'
            const isActive = isBlog
              ? pathname.startsWith('/blog')
              : pathname === '/'
            return (
              <li key={link}>
                <Link
                  to={isBlog ? '/blog' : `/#${link.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-accent'
                      : 'text-theme-muted hover:text-accent'
                  }`}
                >
                  {link}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-theme-muted hover:text-accent transition-all duration-200"
            style={{ background: 'var(--accent-dim)' }}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>

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
            className="px-4 py-2 text-sm font-semibold rounded-md bg-accent text-[var(--bg-primary)] transition-all duration-200 hover:opacity-90"
          >
            Hire Me
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
