// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// function MyApp() {
//   return (
//       <h1><b>Mainoo is Magic you know</b> </h1>   
//   )
// }
let word= ' if you want to'
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target: '_blank' },
  'click me to visit google',
  word
  )
ReactDOM.createRoot(document.getElementById('root')).render(
   reactElement
)
