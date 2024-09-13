import React from 'react'
import { useLoaderData } from 'react-router-dom'
// import { useState,useEffect } from 'react'
function Github() {
// const [data, setData] = useState([])
// useEffect(() => {
  
// fetch("https://api.github.com/users/UsmanAli23515")
// .then(response=>response.json())
// .then(data=>{
//     console.log(data)
//     setData(data)
// })
  
// }, [])
const data = useLoaderData()

  return (
    <div className='text-center p-4 m-4 bg-gray-600 text-white text-2xl  ' >
          <p className='mt-2'>Github followers:  {data.followers} </p>      

        <div className='text-center p-4 m-4 bg-gray-600 text-white text-2xl flex  '>

      <img src={data.avatar_url} alt="Git picture" width={150} />
        <p className='m-8 text-xl flex flex-center justify-center px-36'>       {data.bio}
        </p></div>
     
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const data= await fetch("https://api.github.com/users/UsmanAli23515")
    return data.json()

}

