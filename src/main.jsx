import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
// import AuthProvider from './providers/AuthProvider'
import router from './routes/router'
import AuthProvider from './providers/AuthProvider'
// import router from './routes/router'
// import { HelmetProvider } from 'react-helmet-async'
// import AuthProvider from './providers/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />

      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
