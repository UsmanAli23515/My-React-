import { useState , useEffect} from 'react'
import './App.css'

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
        {
        data.map((info,index)=>(<div key={info.id} style={cardStyle}>
          <img src={`https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60`}
            alt="Random"
          style={imageStyle}
            />
          <h2>
             {info.title.toUpperCase()}
           </h2>
           <p>
           {info.body}</p>
            </div>
            ))
        }
    </>
  )
}
const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  margin: '10px',
  width: '300px',
  boxShadow: '4px 4px 8px rgba(0,0,0,0.1)',
};
const imageStyle = {
  width: '310px',
  height: '200px',
  objectFit: 'cover', // Ensures the image covers the area without distortion
  borderRadius: '8px',
  marginTop: "0px",
  marginBottom: '0px',
};
export default App
