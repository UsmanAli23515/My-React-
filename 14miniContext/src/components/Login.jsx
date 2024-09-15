import React from 'react'
import { UserContext } from '../context/UserContext'
import { useContext,useState } from 'react'
function Login() {
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit= (e)=>{
        e.preventDefault();
        setUser({userName,userPassword})
    }
  return (
    <div>
    <h2>Log-in</h2>
    <input type='text' placeholder='Enter the username' value={userName} 
    onChange={(e)=> setUserName(e.target.value)} />  
{" "}
    <input type='text' placeholder='Enter the password' value={userPassword}
     onChange={(e)=> setUserPassword(e.target.value)} />  
   <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
