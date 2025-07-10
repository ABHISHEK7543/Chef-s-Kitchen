import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-[100px] w-[100%] flex items-center justify-between pr-6 pl-6 border-b-2 to-black'>

      <h1 className='text-4xl font-bold'><Link to="/">Mateam</Link></h1>
      <div className='flex gap-8'>
      <NavLink
      className={(e) =>(e.isActive ? "text-yellow-600": "")}
      to="/"
      >
        Home
      </NavLink>

      <NavLink
      className={(e) =>(e.isActive ? "text-yellow-600": "")}
      to="/recipes"
      >
        recipes 
      </NavLink>

      

      <NavLink
      className={(e) =>(e.isActive ? "text-yellow-600": "")}
      to="/about"
      >
      About
 
      </NavLink>

      <NavLink
      className={(e) =>(e.isActive ? "text-yellow-600": "")}
      to="/favroite"
      >
      favorite
 
      </NavLink>
      </div>

       <div className="input h-10 w-[19%] border-2 border-black rounded-full text-end">
        <i class="ri-search-line"></i>
          <input
          className='h-full w-60 outline-none  rounded-full'
          type="text" placeholder='search' />
          </div>
      <div className='flex gap-2'>
        <button className='p-2  rounded-full'>Sign in</button>  
      <button className='p-2 bg-black text-white rounded-full'>Sign up</button>
      
       </div>
    </div>
  )
}

export default Navbar