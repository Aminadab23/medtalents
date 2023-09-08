import React from 'react'
import ReactDOM from 'react-dom/client'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import App from './App.jsx'
import './index.css'
<<<<<<< HEAD
AOS.init();

=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> dc6136f8094ca4575e659c7caa8229f5210cc4c6

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
     <App />
  </BrowserRouter>
</React.StrictMode>
)
