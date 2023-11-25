import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes/Routes'
import { Toaster } from 'react-hot-toast'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import React from 'react'
import AuthProvider from './provides/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <Toaster></Toaster>
  <RouterProvider router={router} />
  </AuthProvider>
</React.StrictMode>
)