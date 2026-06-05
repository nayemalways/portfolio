import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer
      className="py-8 bg-theme-surface"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-sora font-bold text-accent text-base">Nayem.</span>
        <p className="text-theme-dim text-xs">
          © {new Date().getFullYear()} MD. Nayem · Built with React &amp; Node.js
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
