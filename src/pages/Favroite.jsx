import { useContext } from "react";
import Recipecard from "../Components/Recipecard";
import { recipeContext } from "../Context/RecipeData";


const Favroite = () => {
    const { fav } = useContext(recipeContext);
    console.log(fav);
    const reciperender = fav.map((recipe) => (
        <Recipecard key={recipe.id} recipe={recipe} />
    ));
    return (
        <>
            <div className="p-5 mt-10 flex flex-wrap">
                {fav.length > 0 ? reciperender : "No recipe found!"}
            </div>
        </>
    );
};

export default Favroite;