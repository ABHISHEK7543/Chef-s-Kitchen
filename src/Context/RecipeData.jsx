import React, { createContext, useState } from 'react'

export  const recipeContext = createContext(null)
const RecipeData = (props) => {

    const [data, setdata] = useState(
        JSON.parse(localStorage.getItem("recipes")) || []
    )
    const [fav, setfav] = useState(
        JSON.parse(localStorage.getItem("favorite")) || []
    )
  return (
    <recipeContext.Provider value={{data,setdata,fav,setfav}}>
        {props.children}
        
        </recipeContext.Provider>
  )
}

export default RecipeData