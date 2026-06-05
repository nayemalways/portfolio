export const BLOG_POSTS = [
  {
    slug: 'building-scalable-apis-with-node-js-and-express',
    title: 'Building Scalable REST APIs with Node.js and Express',
    excerpt:
      'A practical guide to structuring production-ready Node.js APIs with middleware patterns, error handling, and clean architecture.',
    content: `
## Introduction

Building a REST API that scales requires more than just routing requests to handlers. It demands thoughtful architecture, consistent error handling, input validation, and a modular structure that your team can maintain over time.

## Project Structure

A clean folder structure is the foundation of any scalable API. Here's a pattern that works well for medium to large projects:

\`\`\`
src/
├── config/        # environment variables, DB config
├── controllers/   # request handlers
├── middleware/     # auth, validation, error handling
├── models/        # database models
├── routes/        # route definitions
├── services/      # business logic
├── utils/         # helpers
└── app.js         # entry point
\`\`\`

## Middleware Pipeline

Express middleware runs in the order it's registered. Structure your pipeline carefully:

1. **Security headers** — helmet
2. **CORS** — configure allowed origins
3. **Body parsing** — json, urlencoded
4. **Rate limiting** — express-rate-limit
5. **Authentication** — JWT verification
6. **Routes** — controller logic
7. **Error handler** — catch-all

## Error Handling Pattern

\`\`\`javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = true
  }
}

const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500
  res.status(status).json({
    status: 'error',
    message: err.isOperational ? err.message : 'Something went wrong',
  })
}
\`\`\`

## Conclusion

A well-structured Node.js API saves countless hours of debugging and onboarding time. Start with a solid foundation and iterate from there.
    `.trim(),
    date: '2025-12-15',
    readTime: '6 min read',
    category: 'Backend',
    tags: ['Node.js', 'Express', 'API', 'Backend'],
    recommended: true,
  },
  {
    slug: 'react-performance-optimization-techniques',
    title: 'React Performance: Techniques That Actually Work',
    excerpt:
      'Stop premature optimization. Learn the real-world techniques that fix React performance bottlenecks — memoization, virtualization, and code splitting.',
    content: `
## Introduction

React is fast out of the box, but as your application grows, performance can degrade. The key is knowing what to optimize and when.

## When to Use useMemo and useCallback

A common mistake is wrapping everything in \`useMemo\`. Only use it when:

- The computation is expensive (O(n²) or worse)
- The value is used as a dependency in other hooks
- The component re-renders frequently with stable props

\`\`\`jsx
const sortedItems = useMemo(
  () => items.sort((a, b) => a.name.localeCompare(b.name)),
  [items]
)
\`\`\`

## Virtualization for Long Lists

Rendering 10,000 items? Virtualization is your answer.

\`\`\`jsx
import { FixedSizeList } from 'react-window'

const VirtualList = ({ items }) => (
  <FixedSizeList
    height={600}
    itemCount={items.length}
    itemSize={72}
  >
    {({ index, style }) => (
      <div style={style}>{items[index].name}</div>
    )}
  </FixedSizeList>
)
\`\`\`

## Code Splitting with React.lazy

Split your bundle so users only download what they need:

\`\`\`jsx
const Dashboard = React.lazy(() => import('./Dashboard'))
const Settings = React.lazy(() => import('./Settings'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Suspense>
  )
}
\`\`\`

## Conclusion

Measure first, optimize second. Use React DevTools Profiler to identify actual bottlenecks before adding complexity.
    `.trim(),
    date: '2025-11-28',
    readTime: '8 min read',
    category: 'Frontend',
    tags: ['React', 'Performance', 'JavaScript', 'Frontend'],
    recommended: true,
  },
  {
    slug: 'mastering-tailwind-css-for-production',
    title: 'Mastering Tailwind CSS for Production Apps',
    excerpt:
      'From utility-first basics to advanced patterns — build beautiful, responsive UIs without writing a single line of custom CSS.',
    content: `
## Introduction

Tailwind CSS has changed how we build interfaces. Utility-first CSS means faster prototyping, consistent designs, and smaller bundle sizes.

## The Utility-First Workflow

Stop switching between HTML and CSS files. Build directly in your markup:

\`\`\`html
<div class="flex items-center gap-4 p-6 bg-slate-800 rounded-xl border border-slate-700">
  <img class="w-12 h-12 rounded-full" src="avatar.jpg" alt="" />
  <div>
    <h3 class="font-semibold text-white">John Doe</h3>
    <p class="text-sm text-slate-400">john@example.com</p>
  </div>
</div>
\`\`\`

## Custom Design System

Extend Tailwind for your brand:

\`\`\`js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: { 50: '#fff7ed', 500: '#f97316', 900: '#7c2d12' },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
}
\`\`\`

## Optimizing for Production

Purge unused styles automatically — Tailwind's tree-shaking is built-in:

\`\`\`js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
}
\`\`\`

## Conclusion

Tailwind CSS makes you faster without sacrificing customization. Master the utility-first mindset and your productivity will soar.
    `.trim(),
    date: '2025-10-10',
    readTime: '5 min read',
    category: 'Frontend',
    tags: ['Tailwind CSS', 'CSS', 'Frontend', 'Design'],
    recommended: true,
  },
  {
    slug: 'mongoose-mongodb-best-practices',
    title: 'Mongoose & MongoDB: Best Practices for Node.js',
    excerpt:
      'Schema design, indexing strategies, and query optimization — everything you need to build data-driven Node.js applications.',
    content: `
## Introduction

MongoDB with Mongoose is a powerful combination. But without proper schema design and indexing, your application will struggle at scale.

## Schema Design Principles

Design schemas based on how you access data, not how you store it:

\`\`\`javascript
const userSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true },
  name: { type: String, required: true, trim: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
}, { timestamps: true })
\`\`\`

## Indexing for Performance

Always index fields used in queries, sorting, and filtering:

\`\`\`javascript
userSchema.index({ email: 1 })
userSchema.index({ role: 1, createdAt: -1 })
\`\`\`

## Virtuals and Populate

Use virtual fields for computed properties:

\`\`\`javascript
userSchema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'author',
})
\`\`\`

## Conclusion

Invest time in schema design and indexing early. Your production self will thank you.
    `.trim(),
    date: '2025-09-05',
    readTime: '7 min read',
    category: 'Backend',
    tags: ['MongoDB', 'Mongoose', 'Database', 'Node.js'],
    recommended: false,
  },
  {
    slug: 'docker-for-node-js-developers',
    title: 'Docker for Node.js Developers: A Practical Guide',
    excerpt:
      'Containerize your Node.js apps like a pro. Multi-stage builds, Docker Compose, and production-ready best practices.',
    content: `
## Introduction

Docker simplifies deployment and eliminates "it works on my machine" problems. Here's how to containerize Node.js applications effectively.

## Dockerfile Optimization

Use multi-stage builds to keep images small:

\`\`\`dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
\`\`\`

## Docker Compose for Development

\`\`\`yaml
version: '3.8'
services:
  app:
    build: .
    ports: ['3000:3000']
    env_file: .env
    volumes: ['.:/app', '/app/node_modules']
    depends_on: [db]
  db:
    image: mongo:7
    volumes: ['mongo-data:/data/db']
\`\`\`

## Conclusion

Docker makes your Node.js apps portable, reproducible, and deployment-ready.
    `.trim(),
    date: '2025-08-20',
    readTime: '6 min read',
    category: 'DevOps',
    tags: ['Docker', 'DevOps', 'Node.js', 'Deployment'],
    recommended: false,
  },
  {
    slug: 'building-real-time-apps-with-socket-io',
    title: 'Building Real-Time Apps with Socket.io',
    excerpt:
      'From chat applications to live dashboards — build real-time features with Socket.io and Node.js.',
    content: `
## Introduction

Real-time features are no longer optional. Users expect live updates, instant notifications, and seamless collaboration.

## Getting Started

\`\`\`javascript
const io = new Server(httpServer, {
  cors: { origin: 'http://localhost:5173' }
})

io.on('connection', (socket) => {
  console.log('User connected:', socket.id)

  socket.on('message', (data) => {
    io.emit('message', data)
  })
})
\`\`\`

## Rooms and Namespaces

Organize connections with rooms:

\`\`\`javascript
socket.join('room:123')
io.to('room:123').emit('notification', { text: 'New message' })
\`\`\`

## Conclusion

Socket.io makes real-time communication straightforward. Start simple and scale as needed.
    `.trim(),
    date: '2025-07-12',
    readTime: '5 min read',
    category: 'Backend',
    tags: ['Socket.io', 'WebSocket', 'Node.js', 'Real-time'],
    recommended: true,
  },
]

export const SIDEBAR_LINKS = [
  { label: 'All Posts', slug: null, icon: 'BookOpen' },
  { label: 'Frontend', slug: 'frontend', icon: 'Code2' },
  { label: 'Backend', slug: 'backend', icon: 'Database' },
  { label: 'DevOps', slug: 'devops', icon: 'Server' },
]

export const getRecommendedPosts = () =>
  BLOG_POSTS.filter(p => p.recommended).slice(0, 4)

export const getPostBySlug = (slug) =>
  BLOG_POSTS.find(p => p.slug === slug)

export const getPostsByCategory = (category) =>
  category
    ? BLOG_POSTS.filter(p => p.category.toLowerCase() === category.toLowerCase())
    : BLOG_POSTS
