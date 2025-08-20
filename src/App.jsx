import React from 'react'

import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='h-screen w-screen text-2xl p-10 overflow-x-hidden'>
    <Navbar/>
    <Mainroutes/>
     
    </div>
  )
}

export default App