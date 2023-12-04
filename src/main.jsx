import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes/Routes'
import { Toaster } from 'react-hot-toast'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import React from 'react'
import AuthProvider from './provides/AuthProvider'
import {
  QueryClient,
  QueryClientProvider} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(

    <AuthProvider>
     <QueryClientProvider client={queryClient}>
     <Toaster></Toaster>
        <RouterProvider router={router} />
     </QueryClientProvider>
    </AuthProvider>
  
)