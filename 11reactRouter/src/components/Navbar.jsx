import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className='bg-gray-600 text-white font-bold py-4 px-4 mb-4 h-16'>
        <ul className='flex gap-2 h-full '>
          <li className='h-full'>
            <NavLink 
              className={ (e) => e.isActive ? "bg-red-500 my-[-16px] p-[32px]  h-full flex items-center px-4" :
                 "h-full flex items-center px-4" }
              to='/'
            >
              Home
            </NavLink>
          </li>

          <li className='h-full'>
            <NavLink 
              className={ (e) => e.isActive ? "bg-red-500 h-full my-[-16px] p-[32px] flex items-center px-4" : "h-full flex items-center px-4" }
              to='/login'
            >
              Log-in
            </NavLink>
          </li>

          <li className='h-full'>
            <NavLink 
              className={ (e) => e.isActive ? "bg-red-500 my-[-16px] p-[32px] h-full flex items-center px-4" : "h-full flex items-center px-4" }
              to='/about'
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
