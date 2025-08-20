import { Link } from "react-router-dom";
import RecipeCard from "../Components/Recipecard";
import { useContext } from "react";
import { recipeContext } from "../Context/RecipeData";


const Recipes = () => {
    const {data,setdata} = useContext(recipeContext)
    

    const reciperender = data.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
    ));
    return (
        <>
         <div className="p-5 mt-10 flex flex-wrap">
            <Link
                className="createbtn absolute top-36 right-[5%] bg-yellow-400 px-4 py-2 rounded"
                to="/recipes/create-recipe"
            >
                Create Recipe
            </Link>
           
                {data.length > 0 ? reciperender : "No recipe found!"}
            </div>
        </>
    );
};

export default Recipes;