import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Tag, Share2, Linkedin, Twitter, Link2, Check, ChevronUp } from 'lucide-react'
import { getPostBySlug, getRecommendedPosts } from '../data/blog'
import { useEffect, useState, useCallback } from 'react'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
}

function isHTML(str) {
  return /^\s*<(h[1-6]|p|div|section|article|ul|ol|blockquote|pre|table|figure|img)\b/i.test(
    str.trim()
  )
}

function inlineFormat(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
}

function renderContent(content) {
  if (isHTML(content)) {
    let idCounter = {}
    return content.replace(/<h2[^>]*>(.*?)<\/h2>/gs, (match, text) => {
      const raw = text.replace(/<[^>]*>/g, '')
      const id = slugify(raw)
      if (match.includes('id=')) return match
      return `<h2 id="${id}">${text}</h2>`
    })
  }

  const lines = content.split('\n')
  let html = ''
  let inCodeBlock = false
  let codeLang = ''
  let inList = false
  let listType = ''

  function closeList() {
    if (inList) {
      html += `</${listType}>\n`
      inList = false
      listType = ''
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith('```')) {
      closeList()
      if (inCodeBlock) {
        html += '</code></pre>\n'
        inCodeBlock = false
      } else {
        codeLang = line.slice(3).trim()
        html += `<pre><code class="language-${codeLang}">`
        inCodeBlock = true
      }
      continue
    }

    if (inCodeBlock) {
      html += line.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '\n'
      continue
    }

    if (line.startsWith('## ')) {
      closeList()
      const text = line.replace('## ', '')
      html += `<h2 id="${slugify(text)}">${text}</h2>\n`
      continue
    }

    if (line.startsWith('### ')) {
      closeList()
      const text = line.replace('### ', '')
      html += `<h3 id="${slugify(text)}">${text}</h3>\n`
      continue
    }

    if (line.startsWith('- **')) {
      const match = line.match(/- \*\*(.+?)\*\*[—–]\s*(.+)/)
      if (match) {
        if (!inList || listType !== 'ul') {
          closeList()
          html += '<ul>\n'
          inList = true
          listType = 'ul'
        }
        html += `<li><strong>${match[1]}</strong> — ${match[2]}</li>\n`
        continue
      }
    }

    if (line.startsWith('- ')) {
      if (!inList || listType !== 'ul') {
        closeList()
        html += '<ul>\n'
        inList = true
        listType = 'ul'
      }
      html += `<li>${inlineFormat(line.slice(2))}</li>\n`
      continue
    }

    if (line.match(/^\d+\. /)) {
      if (!inList || listType !== 'ol') {
        closeList()
        html += '<ol>\n'
        inList = true
        listType = 'ol'
      }
      html += `<li>${inlineFormat(line.replace(/^\d+\. /, ''))}</li>\n`
      continue
    }

    if (line.startsWith('> ')) {
      closeList()
      html += `<blockquote>${inlineFormat(line.slice(2))}</blockquote>\n`
      continue
    }

    if (line.trim() === '---' || line.trim() === '***') {
      closeList()
      html += '<hr/>\n'
      continue
    }

    if (line.trim() === '') {
      closeList()
      continue
    }

    closeList()
    html += `<p>${inlineFormat(line)}</p>\n`
  }

  closeList()
  if (inCodeBlock) html += '</code></pre>'

  return html
}

function generateTOC(content) {
  if (isHTML(content)) {
    const headings = []
    const regex = /<h2[^>]*>(.*?)<\/h2>/g
    let match
    while ((match = regex.exec(content)) !== null) {
      const text = match[1].replace(/<[^>]*>/g, '')
      headings.push({ text, id: slugify(text) })
    }
    return headings
  }

  const lines = content.split('\n')
  const headings = []
  for (const line of lines) {
    if (line.startsWith('## ')) {
      const text = line.replace('## ', '')
      headings.push({ text, id: slugify(text) })
    }
  }
  return headings
}

export default function BlogDetails() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)
  const recommended = getRecommendedPosts().filter(p => p.slug !== slug).slice(0, 3)
  const toc = post ? generateTOC(post.content) : []
  const [copied, setCopied] = useState(false)
  const [activeHeading, setActiveHeading] = useState('')

  useEffect(() => {
    if (post) document.title = `${post.title} — Nayem`
  }, [post])

  useEffect(() => {
    if (toc.length === 0) return
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        }
      },
      { rootMargin: '-100px 0px -60% 0px', threshold: 0 }
    )
    for (const h of toc) {
      const el = document.getElementById(h.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [toc])

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-sora text-2xl font-bold mb-3 text-theme-primary">
            Post not found
          </h1>
          <Link
            to="/blog"
            className="text-accent hover:underline text-sm"
          >
            &larr; Back to blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Back link */}
      <div className="container-main mb-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-theme-muted hover:text-accent transition-colors duration-200 group"
        >
          <ArrowLeft size="15" className="transition-transform group-hover:-translate-x-0.5" />
          Back to Blog
        </Link>
      </div>

      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 lg:gap-12">
          {/* ── Main Content ── */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-theme-dim mb-4">
                <span
                  className="px-2.5 py-0.5 rounded text-[11px] font-semibold text-accent"
                  style={{ background: 'var(--accent-dim)' }}
                >
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>

              <h1 className="font-sora text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-theme-primary mb-4">
                {post.title}
              </h1>

              <p className="text-theme-muted text-base md:text-lg leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-5">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full text-theme-muted"
                      style={{ border: '1px solid var(--border)' }}
                    >
                      <Tag size={11} />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* ── Article Reading Card ── */}
            <div
              className="rounded-xl border border-theme"
              style={{ background: 'var(--bg-article)' }}
            >
              {/* Accent top bar */}
              <div
                className="h-1 rounded-t-xl"
                style={{
                  background: `linear-gradient(90deg, var(--accent), var(--accent-dim2), transparent)`,
                }}
              />

              <div className="px-5 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10">
                <div
                  className="rich-text"
                  dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
                />
              </div>
            </div>

            {/* ── Share & Actions ── */}
            <div className="mt-10 pt-8 flex flex-wrap items-center justify-between gap-4" style={{ borderTop: '1px solid var(--border)' }}>
              <div className="flex items-center gap-3">
                <span className="text-sm text-theme-muted flex items-center gap-2">
                  <Share2 size={15} />
                  Share
                </span>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-theme-muted hover:text-accent transition-all duration-200"
                  style={{ background: 'var(--icon-bg)' }}
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin size={17} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-theme-muted hover:text-accent transition-all duration-200"
                  style={{ background: 'var(--icon-bg)' }}
                  aria-label="Share on Twitter"
                >
                  <Twitter size={17} />
                </a>
                <button
                  onClick={copyLink}
                  className="p-2 rounded-lg transition-all duration-200"
                  style={{
                    background: copied ? 'var(--accent-dim)' : 'var(--icon-bg)',
                    color: copied ? 'var(--accent)' : 'var(--text-muted)',
                  }}
                  aria-label="Copy link"
                >
                  {copied ? <Check size={17} /> : <Link2 size={17} />}
                </button>
              </div>

              {toc.length > 2 && (
                <a
                  href="#"
                  onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                  className="inline-flex items-center gap-1.5 text-sm text-theme-muted hover:text-accent transition-colors duration-200"
                >
                  Back to top
                  <ChevronUp size="15" />
                </a>
              )}
            </div>
          </motion.article>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              {/* Table of Contents */}
              {toc.length > 0 && (
                <div
                  className="rounded-xl p-5 border border-theme"
                  style={{ background: 'var(--bg-elevated)' }}
                >
                  <h3 className="font-sora font-bold text-xs uppercase tracking-wider mb-3 text-theme-dim">
                    On this page
                  </h3>
                  <nav className="space-y-0.5">
                    {toc.map(h => (
                      <a
                        key={h.id}
                        href={`#${h.id}`}
                        className="block text-sm py-1.5 px-2 rounded-md transition-all duration-200"
                        style={{
                          color:
                            activeHeading === h.id
                              ? 'var(--accent)'
                              : 'var(--text-muted)',
                          background:
                            activeHeading === h.id ? 'var(--accent-dim)' : 'transparent',
                        }}
                      >
                        {h.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Recommended Posts */}
              {recommended.length > 0 && (
                <div
                  className="rounded-xl p-5 border border-theme"
                  style={{ background: 'var(--bg-elevated)' }}
                >
                  <h3 className="font-sora font-bold text-xs uppercase tracking-wider mb-4 text-theme-dim">
                    Recommended
                  </h3>
                  <div className="space-y-4">
                    {recommended.map(rp => (
                      <Link
                        key={rp.slug}
                        to={`/blog/${rp.slug}`}
                        className="block group"
                      >
                        <p className="text-sm text-theme-secondary group-hover:text-accent transition-colors duration-200 leading-snug mb-1 line-clamp-2">
                          {rp.title}
                        </p>
                        <p className="text-[11px] text-theme-dim">{rp.readTime}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
