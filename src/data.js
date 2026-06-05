export const NAV_LINKS = ['Blog']

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/nayemalways',
  github: 'https://github.com/nayemalways',
  facebook: 'https://facebook.com/nayemalways',
  codewars: 'https://www.codewars.com/users/nayemalways',
}

export const SERVICES = [
  {
    id: 1,
    icon: 'Code2',
    title: 'Frontend Development',
    desc: 'Building pixel-perfect, responsive UIs with React.js, Tailwind CSS, and modern component libraries. Performance-first from day one.',
  },
  {
    id: 2,
    icon: 'Database',
    title: 'Backend & API Development',
    desc: 'Designing robust REST APIs and server-side logic with Node.js, Express, and MongoDB. Secure, scalable, and well-documented.',
  },
  {
    id: 3,
    icon: 'Layers',
    title: 'Full Stack Web Apps',
    desc: 'End-to-end web application development — from architecture planning to production deployment with CI/CD pipelines.',
  },
  {
    id: 4,
    icon: 'Zap',
    title: 'Performance Optimization',
    desc: 'Auditing and improving web app performance — code splitting, lazy loading, caching strategies, and bundle optimization.',
  },
]

export const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: 'SiReact', color: '#61DAFB' },
      { name: 'Next.js', icon: 'SiNextdotjs', color: '#000000' },
      { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' },
      { name: 'Redux', icon: 'SiRedux', color: '#764ABC' },
      { name: 'Framer Motion', icon: 'SiFramer', color: '#0055FF' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: 'SiNodedotjs', color: '#5FA04E' },
      { name: 'Express.js', icon: 'SiExpress', color: '#000000' },
      { name: 'GraphQL', icon: 'SiGraphql', color: '#E10098' },
      { name: 'Socket.io', icon: 'SiSocketdotio', color: '#010101' },
      { name: 'Prisma', icon: 'SiPrisma', color: '#2D3748' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
      { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#4169E1' },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { name: 'Git', icon: 'SiGit', color: '#F05032' },
      { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
      { name: 'AWS', icon: 'FiServer', color: '#FF9900' },
      { name: 'Vercel', icon: 'SiVercel', color: '#000000' },
      { name: 'Jest', icon: 'SiJest', color: '#C21325' },
    ],
  },
]

export const EXPERIENCES = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'TechCorp Inc.',
    period: 'Jan 2024 — Present',
    location: 'Remote',
    highlights: [
      'Architected and built a real-time project management platform serving 2,000+ users using React, Node.js, and WebSockets',
      'Designed RESTful APIs with Express and MongoDB, reducing response times by 35% through optimized indexing and caching',
      'Implemented CI/CD pipelines with Docker and GitHub Actions, cutting deployment time from 30min to under 3min',
      'Mentored 3 junior developers through code reviews, pair programming, and weekly tech talks',
    ],
  },
  {
    id: 2,
    role: 'Frontend Developer',
    company: 'WebStudio Agency',
    period: 'Jun 2022 — Dec 2023',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Developed 12+ client-facing web applications using React, Next.js, and Tailwind CSS with perfect Lighthouse scores',
      'Built a component library with 40+ reusable UI components, accelerating project delivery by 40%',
      'Integrated Stripe payments, Auth0 authentication, and headless CMS solutions for diverse client requirements',
      'Led the migration of a legacy jQuery codebase to React, improving page load speed by 60%',
    ],
  },
  {
    id: 3,
    role: 'Junior Developer',
    company: 'StartupHub',
    period: 'Mar 2021 — May 2022',
    location: 'Remote',
    highlights: [
      'Collaborated on building an e-commerce platform handling 10,000+ daily transactions with React and Node.js',
      'Wrote unit and integration tests using Jest and React Testing Library, achieving 85% code coverage',
      'Participated in daily standups, sprint planning, and retrospectives in an Agile/Scrum team of 8',
    ],
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'TaskFlow — Project Management App',
    desc: 'A real-time project management tool with Kanban boards, team collaboration, role-based access, and activity tracking.',
    scope: ['Full Stack'],
    tags: ['React', 'Node.js', 'MongoDB'],
    color: 'from-[#0F172A] to-[#1E3A5F]',
    accentColor: '#378ADD',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'ShopSphere — E-commerce Platform',
    desc: 'Feature-rich e-commerce platform with product search, cart management, secure Stripe payments, and an admin dashboard.',
    scope: ['Frontend'],
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    color: 'from-[#0F2419] to-[#0F172A]',
    accentColor: '#1D9E75',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'AuthKit — Auth Boilerplate',
    desc: 'Production-ready authentication system with JWT, refresh tokens, role management, and 2FA — plug-and-play for any project.',
    scope: ['Backend'],
    tags: ['React', 'Express', 'JWT'],
    color: 'from-[#1A0F2E] to-[#0F172A]',
    accentColor: '#7F77DD',
    liveUrl: '#',
    githubUrl: '#',
  },
]
