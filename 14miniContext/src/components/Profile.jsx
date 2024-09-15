import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
function Profile() {

    const {us} = useContext(UserContext)
  if (!user) return <div>Please Login</div>
  return <div> Welcome {user.userName}</div>
  
}

export default Profile
