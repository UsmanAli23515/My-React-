import { useState } from 'react'
import Navbar from './components/Navbar'

import './App.css'
import { counterContext } from './context/context'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <counterContext.Provider value={{count,setCount}}>

    <Navbar/>
      <div>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
    </counterContext.Provider>
    
    </>
  )
}

export default App
