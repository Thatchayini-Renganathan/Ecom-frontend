import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastProvider } from './context/ToastProvider'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <ToastProvider>
        <App/>
        <ToastContainer position="top-right" autoClose={2000}/>
        </ToastProvider>
      </Router>
    </AuthProvider>
  </StrictMode>,
)
