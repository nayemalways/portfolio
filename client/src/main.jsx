import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import '../src/assets/Css/Nabbar.custom.css'
import '../src/assets/Css/Hero.custom.css'
import '../src/assets/Css/Blog.custom.css'
import '../src/assets/Css/Contact.custom.css'
import '../src/assets/Css/About.custom.css'
import '../src/assets/Css/Services.custom.css'
import '../src/assets/Css/BlogDetails.custom.css'
import '../src/assets/Css/Responsive.custom.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
