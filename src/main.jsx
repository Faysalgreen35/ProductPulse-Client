import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
// import AuthProvider from './providers/AuthProvider'
import router from './routes/router'
import AuthProvider from './providers/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import router from './routes/router'
// import { HelmetProvider } from 'react-helmet-async'
// import AuthProvider from './providers/AuthProvider'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
    <QueryClientProvider client={queryClient}>
   <HelmetProvider>
    
        <RouterProvider router={router} />

     
    </HelmetProvider>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
