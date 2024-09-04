import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [form, setForm] = useState({email : "",phone : ""  })
  const [form, setForm] = useState({})

  
let handleClick =()=>{
  console.log("you Clicked me")
}
let handleHover =()=>{
  console.log("you hovered me")
}
let handleChange = (e)=>{
  setForm({...form ,[e.target.name]:e.target.value})
console.log(form)
}
  return (
    <>
<button onClick={handleClick}>Click me</button>
<div onMouseOver={handleHover}
className='container'>
</div>
{/* <input type='text' name= "email" value={form.email} onChange={handleChange}/>
<input type='text' name= "phone" value={form.phone} onChange={handleChange}/> */}

{/* <input type='text' name= "email" value={form?.email} onChange={handleChange}/>
<input type='text' name= "phone" value={form?.phone} onChange={handleChange}/> */}

<input type='text' name= "email" value={form.email?form.email:""} onChange={handleChange}/>
<input type='text' name= "phone" value={form.phone?form.phone:""} onChange={handleChange}/>

    </>
  )
}

export default App
