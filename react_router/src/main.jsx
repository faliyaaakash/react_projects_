import { StrictMode } from 'react'
import  ReactDOM from 'react-dom/client';
import './tailwind.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Header,Home ,Footer} from './components/index.js'

const router=createBrowserRouter([
  {
    path:'/'
    
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

       <RouterProvider router={router} />

  </StrictMode>,
)
