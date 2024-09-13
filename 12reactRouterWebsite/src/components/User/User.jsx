import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
const {username}= useParams();

  return (
    <div className='p-4 m-4 bg-gray-600 text-white flex justify-center text-2xl'>
      USER: {username}
    </div>
  )
}

export default User
