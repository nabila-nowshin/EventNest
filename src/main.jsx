import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './provider/authProvider.jsx'
import { Toaster } from 'react-hot-toast'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App></App>
       <Toaster position="top-center" reverseOrder={false} />
    </AuthProvider>
  </StrictMode>,
)