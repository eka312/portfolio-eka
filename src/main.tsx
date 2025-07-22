import 'flowbite';
import 'animate.css';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import 'remixicon/fonts/remixicon.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

AOS.init();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </StrictMode>,
)
