import { useState } from 'react'
import './App.css'
// import Listfrom './List.jsx'
function App() {
    const [showbtn, setShowbtn] = useState(true)
    const [todos, setTodos] = useState([
        {
          title: "Hey",
          desc: "I am a good todo"
        },
        {
          title: "Hey Another todo",
          desc: "I am a good todo too"
        },
        {
          title: "Hey I am grocery todo",
          desc: "I am a good todo but I am grocery todo"
        },
      ])
    const Todo = ({todoo})=>{
        return(<>
        <div className="m-4 border border-1 border-purple-400 bg-black text-white py-4 rounded-lg 
        font-semibold ">

        <div className='todo '>{todoo.title}</div>
        <div className='todo'>{todoo.desc}</div>
        </div>
 </>)
    } 
    return( <>
    {showbtn && <button className='bg-green-600 text-white py-4'>I am shown when true</button>}
                {/* <List/> */}
{todos.map(todo=>{
    return <Todo todoo = {todo} />
})}
<button className='bg-blue-600 text-white'
onClick={()=>setShowbtn(!showbtn)}>Click me</button>
                </>);
}

export default App