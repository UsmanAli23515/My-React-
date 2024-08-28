import { useState } from 'react'
import './App.css'
import './index.css';
import Card from './components/card.jsx'; 


function App() {

  return (
    <>
      
     <h1 className='bg-green-400 text-green-50 p-4 rounded-xl  mb-4' >Manchester United</h1>
     <Card name= "Usman"/>
     <Card name= "Ali"/>
     <Card/>

    </>
  )
}

export default App
