import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Tag, Share2, Linkedin, Twitter } from 'lucide-react'
import { getPostBySlug, getRecommendedPosts } from '../data/blog'
import { useEffect } from 'react'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function generateTOC(content) {
  const headings = content.match(/^## .+/gm)
  if (!headings) return []
  return headings.map(h => ({
    text: h.replace('## ', ''),
    id: h.replace('## ', '').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
  }))
}

function renderContent(content) {
  const lines = content.split('\n')
  let html = ''
  let inCodeBlock = false
  let codeLang = ''

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.startsWith('```')) {
      if (inCodeBlock) {
        html += `</code></pre>\n`
        inCodeBlock = false
      } else {
        codeLang = line.slice(3).trim()
        html += `<pre class="overflow-x-auto rounded-lg p-4 my-6 text-sm leading-relaxed" style="background:#0B1121;border:1px solid rgba(148,163,184,0.1)"><code class="language-${codeLang}">`
        inCodeBlock = true
      }
      continue
    }

    if (inCodeBlock) {
      html += line.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '\n'
      continue
    }

    if (line.startsWith('## ')) {
      const text = line.replace('## ', '')
      const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
      html += `<h2 id="${id}" class="font-sora font-bold text-xl md:text-2xl mt-10 mb-4 text-slate-100 scroll-mt-24">${text}</h2>\n`
      continue
    }

    if (line.startsWith('- **')) {
      const match = line.match(/- \*\*(.+?)\*\*[—–]\s*(.+)/)
      if (match) {
        html += `<li class="text-slate-300 text-base leading-relaxed mb-2"><strong class="text-slate-200">${match[1]}</strong> — ${match[2]}</li>\n`
        continue
      }
    }

    if (line.startsWith('- ')) {
      html += `<li class="text-slate-300 text-base leading-relaxed mb-2">${line.slice(2)}</li>\n`
      continue
    }

    if (line.match(/^\d+\. /)) {
      html += `<li class="text-slate-300 text-base leading-relaxed mb-2">${line.replace(/^\d+\. /, '')}</li>\n`
      continue
    }

    if (line.startsWith('> ')) {
      html += `<blockquote class="border-l-2 border-accent/50 pl-4 my-4 text-slate-400 italic" style="background:var(--accent-dim);padding:12px 16px;border-radius:0 8px 8px 0">${line.slice(2)}</blockquote>\n`
      continue
    }

    if (line.trim() === '') {
      html += '<br/>\n'
      continue
    }

    html += `<p class="text-slate-300 text-base leading-relaxed mb-4">${line}</p>\n`
  }

  if (inCodeBlock) {
    html += '</code></pre>'
  }

  return html
}

export default function BlogDetails() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)
  const recommended = getRecommendedPosts().filter(p => p.slug !== slug).slice(0, 3)
  const toc = post ? generateTOC(post.content) : []

  useEffect(() => {
    if (post) {
      document.title = `${post.title} — Nayem`
    }
  }, [post])

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-sora text-2xl font-bold mb-3">Post not found</h1>
          <Link to="/blog" className="text-accent hover:underline">Back to blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Back link */}
      <div className="container-main mb-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors duration-200"
        >
          <ArrowLeft size="16" />
          Back to Blog
        </Link>
      </div>

      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12">
          {/* Main content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <header className="mb-10">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-4">
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

              <h1 className="font-sora text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-slate-100 mb-5">
                {post.title}
              </h1>

              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl">
                {post.excerpt}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full text-slate-400"
                    style={{ border: '1px solid rgba(148,163,184,0.15)' }}
                  >
                    <Tag size={11} />
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article body */}
            <div
              className="prose-custom"
              dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
            />

            {/* Share */}
            <div className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-400 flex items-center gap-2">
                  <Share2 size={15} />
                  Share this article
                </span>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-accent hover:bg-[var(--accent-dim)] transition-all duration-200"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-accent hover:bg-[var(--accent-dim)] transition-all duration-200"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </motion.article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-8">
              {/* Table of Contents */}
              {toc.length > 0 && (
                <div
                  className="rounded-xl p-5"
                  style={{ border: '1px solid var(--border)', background: '#0F172A' }}
                >
                  <h3 className="font-sora font-bold text-sm mb-3 text-slate-200">On this page</h3>
                  <nav className="space-y-1">
                    {toc.map(h => (
                      <a
                        key={h.id}
                        href={`#${h.id}`}
                        className="block text-sm text-slate-400 hover:text-accent transition-colors duration-200 py-1"
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
                  className="rounded-xl p-5"
                  style={{ border: '1px solid var(--border)', background: '#0F172A' }}
                >
                  <h3 className="font-sora font-bold text-sm mb-4 text-slate-200">Recommended</h3>
                  <div className="space-y-4">
                    {recommended.map(rp => (
                      <Link
                        key={rp.slug}
                        to={`/blog/${rp.slug}`}
                        className="block group"
                      >
                        <p className="text-sm text-slate-300 group-hover:text-accent transition-colors duration-200 leading-snug mb-1 line-clamp-2">
                          {rp.title}
                        </p>
                        <p className="text-[11px] text-slate-500">{rp.readTime}</p>
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
