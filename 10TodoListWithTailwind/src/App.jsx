import { useState } from 'react'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className='container bg-violet-100 mx-auto rounded-xl my-5 p-5'>
      <div className=' '>
      <h1 className='text-xl font-bold'>Your Todos</h1>

      </div>
      </div>
     

    </>
  )
}

export default App
