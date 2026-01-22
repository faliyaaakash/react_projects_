
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tailwind.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Header,Home ,Footer,About, Contact,User, Github}  from './components/index.js'
import Layout from './layout.jsx'
import { githubinfoloader } from './components/github/github.jsx'

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/> 
//       }
//     ]
//   }
// ])

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='' element={<Home/>}/>
       <Route path='about' element={<About/>}/>
       <Route path='contact' element={<Contact/>}/>
        <Route path='user/:userid' element={<User/>}/>
        <Route 
         loader={
              githubinfoloader
         }
         path='github' 
         element={<Github/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>

       <RouterProvider router={router} />

  </StrictMode>,
)
