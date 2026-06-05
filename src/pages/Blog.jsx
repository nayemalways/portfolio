import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { BLOG_POSTS, getRecommendedPosts, SIDEBAR_LINKS } from '../data/blog'
import { Calendar, Clock, ArrowRight, BookOpen, Code2, Database, Server } from 'lucide-react'

const iconMap = { BookOpen, Code2, Database, Server }

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
})

function BlogCard({ post, index }) {
  return (
    <motion.article
      {...fadeUp(index * 0.08)}
      className="group rounded-xl overflow-hidden transition-all duration-300"
      style={{ border: '1px solid var(--border)', background: '#0F172A' }}
    >
      <Link to={`/blog/${post.slug}`} className="block p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {post.readTime}
          </span>
          <span
            className="px-2 py-0.5 rounded text-[11px] font-semibold text-accent"
            style={{ background: 'var(--accent-dim)' }}
          >
            {post.category}
          </span>
        </div>

        <h2 className="font-sora font-bold text-lg md:text-xl leading-snug mb-3 text-slate-100 group-hover:text-accent transition-colors duration-200">
          {post.title}
        </h2>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="text-[10px] font-medium px-2 py-0.5 rounded text-slate-400"
              style={{ background: 'rgba(148,163,184,0.08)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all duration-200">
          Read More <ArrowRight size={14} />
        </span>
      </Link>
    </motion.article>
  )
}

function Sidebar() {
  const recommended = getRecommendedPosts()

  return (
    <aside className="space-y-8">
      {/* Categories */}
      <div
        className="rounded-xl p-5"
        style={{ border: '1px solid var(--border)', background: '#0F172A' }}
      >
        <h3 className="font-sora font-bold text-sm mb-4 text-slate-200">Categories</h3>
        <div className="space-y-1">
          {SIDEBAR_LINKS.map(link => {
            const Icon = iconMap[link.icon]
            const count = link.slug
              ? BLOG_POSTS.filter(p => p.category.toLowerCase() === link.slug).length
              : BLOG_POSTS.length
            return (
              <div
                key={link.label}
                className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-slate-400 transition-colors duration-200"
                style={{ cursor: 'default' }}
              >
                <span className="flex items-center gap-2">
                  {Icon && <Icon size={15} />}
                  {link.label}
                </span>
                <span
                  className="text-[11px] font-semibold px-2 py-0.5 rounded"
                  style={{ background: 'var(--accent-dim)', color: 'var(--accent)' }}
                >
                  {count}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Recommended */}
      <div
        className="rounded-xl p-5"
        style={{ border: '1px solid var(--border)', background: '#0F172A' }}
      >
        <h3 className="font-sora font-bold text-sm mb-4 text-slate-200">Recommended</h3>
        <div className="space-y-4">
          {recommended.map(post => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block group"
            >
              <p className="text-sm text-slate-300 group-hover:text-accent transition-colors duration-200 leading-snug mb-1 line-clamp-2">
                {post.title}
              </p>
              <p className="text-[11px] text-slate-500 flex items-center gap-2">
                <span>{post.readTime}</span>
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default function Blog() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="container-main mb-12">
        <motion.div {...fadeUp(0)}>
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">Writing</p>
          <h1 className="font-sora text-3xl md:text-4xl font-bold leading-tight mb-3">Blog & Articles</h1>
          <p className="text-slate-400 text-base max-w-lg">
            Thoughts on web development, architecture, and building better software.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
          {/* Posts */}
          <div className="space-y-6">
            {BLOG_POSTS.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
