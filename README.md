# MD. Nayem — Portfolio

A professional developer portfolio built with **React**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack
- React 18
- Tailwind CSS 3
- Framer Motion 11
- Lucide React (icons)
- Vite (bundler)

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Fixed navigation with CTAs
│   ├── Hero.jsx          # Landing hero section
│   ├── Services.jsx      # What I do cards
│   ├── Skills.jsx        # Skill bars + tech chips
│   ├── Projects.jsx      # Project showcase grid
│   ├── Contact.jsx       # Contact form + info
│   ├── Footer.jsx        # Footer with socials
│   └── SocialLinks.jsx   # Reusable social icons
├── data.js               # All content data (easy to edit)
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

All content is in `src/data.js` — edit your name, social links,
skills, services, and projects there.

To add a real resume PDF, place it at `public/resume.pdf`.

## Deployment

Deploy instantly to Vercel:
```bash
npm install -g vercel
vercel
```
