import React from 'react'
import { Link } from 'react-router-dom'
import Cards from '../components/Cards'

const Home = () => {
  return (

    <>    <div className='relative'>
      <img 
      className='h-150 w-full  object-cover'
      src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className='absolute bottom-38 left-12 '>
        <h1 className='text-6xl text-white font-bold mb-8'>We are a team made<br/>
             up a profficnal<br/>
             chefs,kitchen & <br/>
             newbies
        </h1>
        <Link className='py-4 px-10 rounded-full bg-white text-black active:bg-green-300' to="/recipes">view to recipes</Link>

        
      </div>
      
    </div>
      <Cards/>
    </>
  )
}

export default Home