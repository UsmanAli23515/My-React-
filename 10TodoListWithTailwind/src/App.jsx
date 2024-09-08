import { useRef } from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const ref = useRef()

  let foc = () => {
    ref.current.focus()
  }

  let handleAdd = () => {
    let inputt = document.getElementById("textInput").value
    document.getElementById("textInput").value = ""
    if (inputt !== "") {
      setTodos((t) => [...t, inputt])
    }
  }

  let handleEdit = (index) => {
    // Placeholder for edit functionality
  }

  let handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  return (
    <>
      <Navbar />
      <div className='container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh]'>
        <div onClick={foc} className="addTodo my-3">
          <h2 className="text-lg font-bold my-3">Add a Todo</h2>
          <input ref={ref} type="text" className='w-5/12 h-8 px-4' placeholder='Enter a task' id='textInput' />
          <button onClick={handleAdd} className="bg-blue-500 hover:bg-blue-700 font-bold text-sm text-white rounded-lg cursor-pointer p-2 mx-6 px-3">
            Add
          </button>
        </div>

        <h2 className='text-lg font-bold'>Your Todos</h2>
        <div className="todos">
          <ul>
            {todos.map((todoo, index) => (
              <li key={index} className="flex items-center justify-between w-1/2 my-2 px-2 py-1 border-b">
                <span>{todoo}</span>
                <div className="buttons flex">
                  <button onClick={() => handleEdit(index)} className="bg-blue-500 hover:bg-blue-700 text-white cursor-pointer font-semibold p-2 rounded-lg mx-1 px-3">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(index)} className="bg-red-500 hover:bg-red-700 text-white cursor-pointer font-semibold p-2 rounded-lg px-3">
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
