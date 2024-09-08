import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-between bg-slate-600 text-white py-3'>
<div>
    <span className='cursor-pointer text-xl font-bold mx-8'>iTask</span>
    </div>  
    <ul className='flex gap-8 mx-9'>
        <li className='cursor-pointer hover:font-bold transition-all min-w-[79px]'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all min-w-[79px]'>Your Tasks</li>
    </ul>  </nav>
  )
}

export default Navbar
