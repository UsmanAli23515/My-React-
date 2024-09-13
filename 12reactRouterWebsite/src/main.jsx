import { StrictMode } from 'react'
// import ReactDom from 'react-dom/client'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Homee/home'
import Layout from './Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { createRoutesFromElements ,Route} from 'react-router-dom'
import User from './components/User/User'
import Github, { githubInfoLoader } from './components/Github/Github'
// const router=createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [{
//       path: "",
//       element: <Home/>
//     },
//   {
//     path: "about",
//     element:<About />
//   },
//   {
//     path: "contact",
//     element:<Contact/>
//   }
// ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:username' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />


 </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
