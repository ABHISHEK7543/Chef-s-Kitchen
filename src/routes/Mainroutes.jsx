import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Create from '../pages/Create'
import Favroite from '../pages/Favroite'
import PageNotFound from '../pages/PageNotFound'
import Recipes from '../pages/Recipes'
import Update from '../pages/Update'
import Recipe from '../pages/Recipe'
const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />

               <Route path="/recipes" element={<Recipes />}/>
               <Route path="/recipes/details/:id" element={<Recipe />} />
               <Route path="/recipes/create-recipe" element={<Create />} />
               <Route path="/recipes/update-recipe/:id" element={<Update />} />
               
            
            <Route path="/favroite" element={<Favroite />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
                 
        


            
        </Routes>
    </div>
  )
}

export default Mainroutes