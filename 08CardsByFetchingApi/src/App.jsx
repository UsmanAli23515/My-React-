import { useState , useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const [data, setData] = useState([])
 
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(dataa=>setData(dataa))
    .catch(error=>console.error(error));
  }, [])
 
  return (
    <>
       <Navbar/> 
        <div className='container'>
        {data.map((info)=>(<div key={info.id} className='card'>
          <img className='grl'src={`https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60`}
            alt="Random"
          
            />
          <h2>
             {info.title}
           </h2>
           <p>
           {info.body}</p>
            </div>
            )) }
        </div>
       
    </>
  )
}

 
export default App
