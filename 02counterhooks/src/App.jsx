import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 10;
let [counter ,setCounter]= useState(10)

let increase = ()=>{
  if(counter<20){
  counter++
setCounter(counter)
  }
}
let decrease= ()=>{
  if(counter>0){
  counter--
  setCounter(counter)
  }
}
  return (
    <>
      <h1>Usman Ali Khan  {counter}</h1>
      <button 
      onClick={increase}
      >Increase Value  {counter}
      </button>

      <button 
      onClick={decrease}
      >Decrease Value   {counter}
      </button>
    </>
  )
}

export default App
