import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast';


import App from './App'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

import './index.css';
import '../src/assets/Css/Nabbar.custom.css';
import '../src/assets/Css/Hero.custom.css';
import '../src/assets/Css/Blog.custom.css';
import '../src/assets/Css/About.custom.css';
import '../src/assets/Css/Services.custom.css';
import '../src/assets/Css/Responsive.custom.css';
import '../src/assets/Css/Sidebar.custom.css';
import '../src/assets/Css/Loader.custom.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster position="top-right" reverseOrder={false}/>
    <App />
  </StrictMode>,
)
