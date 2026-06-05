import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const inputClass = `w-full bg-surface border rounded-lg px-4 py-3 text-sm text-slate-200 outline-none transition-colors duration-200 font-dm placeholder:text-slate-600 focus:border-accent`

  return (
    <section id="contact" className="py-24">
      <div className="container-main">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">Contact</p>
          <h2 className="font-sora text-3xl md:text-4xl font-bold leading-tight mb-10">
            Let's work together
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <h3 className="font-sora font-bold text-xl mb-3">Got a project in mind?</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Whether it's a startup MVP, a product revamp, or ongoing development — I'm open
            to opportunities. Let's build something great together.
          </p>

          <div className="space-y-4">
            {[
              { icon: Mail, text: 'nayemalways@email.com' },
              { icon: MapPin, text: 'Dhaka, Bangladesh' },
              { icon: Clock, text: 'Mon–Fri, 9AM–6PM (BST)' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <Icon size={18} className="text-accent flex-shrink-0" />
                <span className="text-slate-400 text-sm">{text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">Name</label>
              <input
                type="text"
                placeholder="Your name"
                required
                className={inputClass}
                style={{ borderColor: 'var(--border)' }}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                required
                className={inputClass}
                style={{ borderColor: 'var(--border)' }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">Subject</label>
            <input
              type="text"
              placeholder="What's this about?"
              required
              className={inputClass}
              style={{ borderColor: 'var(--border)' }}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[11px] font-semibold text-slate-400 tracking-wider uppercase">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              required
              className={inputClass}
              style={{ borderColor: 'var(--border)', resize: 'none' }}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ y: -2, boxShadow: '0 8px 25px rgba(245,158,11,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-[#0F172A] font-semibold text-sm transition-all duration-200"
          >
            {sent ? 'Message Sent! 🎉' : (
              <>
                <Send size={15} />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>
        </div>
      </div>
    </section>
  )
}
