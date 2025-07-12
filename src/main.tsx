import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Navbar from './komponen/Navbar.tsx'
import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='container mx-auto px-4'>
    <Navbar/>
    <App />
    </div>
    
  </StrictMode>,
)
