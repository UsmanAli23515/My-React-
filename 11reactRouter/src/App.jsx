// import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import User from './components/User'
function App() {
  let routerr= createBrowserRouter([
    {
      path: '/',
      element: <>
      <Navbar/><Home/>
      </>
    },
    {
      path: '/login',
      element: <>
      <Navbar/><Login/>
      </>

    },
    { path: '/about',
      element: <>
      <Navbar/><About/>
      </>
    },
    { path: '/user/:username',
      element: <>
      <Navbar/><User/>
      </>
    },
  ])

  return (
    <>
           <RouterProvider router={routerr}/>

    </>
  )
}

export default App
