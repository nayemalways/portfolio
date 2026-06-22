import yeppads from "../public/projects_photos/yeppads.png";
import tourista from "../public/projects_photos/tourista.png";
import nike from "../public/projects_photos/nike.png";
import plainB from "../public/projects_photos/plainb.png";
import dreamAgency from "../public/projects_photos/dream_agency.png";


export const NAV_LINKS = ['Blog', 'Services', 'Skills', 'Projects', 'Contact']

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
      { name: 'TypeScript', icon: 'SiTypescript', color: '#3178C6' },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', color: '#06B6D4' },
      { name: 'Redux', icon: 'SiRedux', color: '#764ABC' },
      { name: 'GSAP', icon: 'SiGreensock', color: '#88CE02' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: 'SiNodedotjs', color: '#5FA04E' },
      { name: 'Express.js', icon: 'SiExpress', color: '#000000' },
      { name: 'Socket.io', icon: 'SiSocketdotio', color: '#010101' },
      { name: 'Prisma', icon: 'SiPrisma', color: '#2D3748' },
      { name: 'BullMQ', icon: 'FiServer', color: '#FF6B35' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MongoDB', icon: 'SiMongodb', color: '#47A248' },
      { name: 'PostgreSQL', icon: 'SiPostgresql', color: '#4169E1' },
      { name: 'Redis', icon: 'SiRedis', color: '#FF4438' },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { name: 'Git', icon: 'SiGit', color: '#F05032' },
      { name: 'Docker', icon: 'SiDocker', color: '#2496ED' },
      { name: 'Linux', icon: 'SiLinux', color: '#FCC624' },
      { name: 'Ubuntu (VPS)', icon: 'SiUbuntu', color: '#E95420' },
      { name: 'AWS', icon: 'FiServer', color: '#FF9900' },
      { name: 'Vercel', icon: 'SiVercel', color: '#000000' },
    ],
  },
]

export const EXPERIENCES = [
  {
    id: 1,
    role: 'Node.js Backend Developer',
    company: 'Beuptech Agency',
    period: 'Oct 20, 2025 — Present',
    location: 'Remote',
    highlights: [
      'Managing full project lifecycle from architecture design to deployment, leading a team of developers to deliver scalable backend solutions',
      'Designing and maintaining RESTful APIs with Node.js, Express, and MongoDB, ensuring high performance and data integrity',
      'Deploying and managing applications using Docker containers with CI/CD pipelines for streamlined releases and rollbacks',
      'Conducting thorough code reviews and bug fixes, maintaining clean code standards and improving overall system reliability',
    ],
  },
  {
    id: 2,
    role: 'Web Developer',
    company: 'SM Technology',
    period: 'Jul 15, 2025 — Oct 14, 2025',
    location: 'Remote',
    highlights: [
      'Developed and maintained responsive websites using Squarespace CMS, ensuring high performance, reliability, and usability',
      'Customized Squarespace templates using HTML, CSS, and JavaScript to meet client branding and business requirements',
      'Optimized site structure, content management workflows, and SEO settings for improved visibility and performance',
    ],
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'YeppAds — Service Advertising Platform',
    desc: 'Develop and maintained backend side using Node.js, Express.js & MongoDB. Used bullMQ for background job processing and reduced API latency.',
    scope: ['Full Stack'],
    tags: ['Node.js', 'Express.js', 'MongoDB', 'BullMQ'],
    color: 'from-[#0F172A] to-[#1E3A5F]',
    accentColor: '#378ADD',
    image: yeppads,
    liveUrl: 'https://yeppads.com',
    githubUrl: 'https://github.com/nayemalways/',
  },
  {
    id: 2,
    title: 'Tourista — Tour Booking platform',
    desc: 'Fullstack tour booking platform. Jwt based authentication, booking, SSL ecommerz payment gateway integration.',
    scope: ['Fullstack'],
    tags: ['React.js', 'Redux', 'Tailwind CSS','Node.js', 'Express.js', 'MongoDB', 'SSL Ecommerce'],
    color: 'from-[#0F2419] to-[#0F172A]',
    image: tourista,
    accentColor: '#1D9E75',
    liveUrl: 'https://tourista-frontend.vercel.app/',
    githubUrl: 'https://github.com/nayemalways/Tourista_Server',
  },
  {
    id: 3,
    title: 'PlainB — E-commerce Platform',
    desc: 'PlainB is a electronics e-commerce platform. There is JWT based auth system, add to cart, add wishlist, SSL ecommerz payment gateway integration',
    scope: ['Frontend'],
    tags: ['React', 'Tailwind CSS', 'Zustand', 'Node.js', 'Express.js', 'MongoDB'],
    image: plainB,
    color: 'from-[#1A0F2E] to-[#0F172A]',
    accentColor: '#7F77DD',
    liveUrl: 'https://plainb.vercel.app/',
    githubUrl: 'https://github.com/nayemalways/Tourista_Server',
  },
  {
    id: 4,
    title: 'Nike Shoes — Shoes E-commerce Website',
    desc: 'Nike shoes branding e-commerce based landing page using Tailwind CSS and React.js',
    scope: ['Frontend'],
    tags: ['React', 'Tailwind CSS'],
    image: nike,
    color: 'from-[#1A0F2E] to-[#0F172A]',
    accentColor: '#7F77DD',
    liveUrl: 'https://shoes-corner.netlify.app/',
    githubUrl: 'https://github.com/nayemalways/NikeShoes',
  },
  {
    id: 4,
    title: 'PlainB — E-commerce Platform',
    desc: 'PlainB is a electronics e-commerce platform. There is JWT based auth system, add to cart, add wishlist, SSL ecommerz payment gateway integration',
    scope: ['Frontend'],
    tags: ['React', 'Tailwind CSS', 'Zustand', 'Node.js', 'Express.js', 'MongoDB'],
    image: plainB,
    color: 'from-[#1A0F2E] to-[#0F172A]',
    accentColor: '#7F77DD',
    liveUrl: 'https://plainb.vercel.app/',
    githubUrl: 'https://github.com/nayemalways/Tourista_Server',
  },
  {
    id: 5,
    title: 'Dream Agency — A Agency Portfolio',
    desc: 'Dream Agency is a portfolio landing page of an organization using Bootstrap ',
    scope: ['Frontend'],
    tags: ['HTML', 'Bootstrap'],
    image: dreamAgency,
    color: 'from-[#1A0F2E] to-[#0F172A]',
    accentColor: '#7F77DD',
    liveUrl: 'https://dreamagency-eight.vercel.app/',
    githubUrl: 'https://github.com/nayemalways/DreamAgency',
  },
]
