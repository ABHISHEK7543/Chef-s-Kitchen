import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { recipeContext } from "../Context/RecipeData";

const Create = () => {
    const navigate = useNavigate();
    const { data, setdata } = useContext(recipeContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const SubmitHandler = (recipe) => {
        
        recipe.id = nanoid();
        const copydata = [...data];
        copydata.push(recipe);
        setdata(copydata);
        toast.success("New recipe registered!");
        localStorage.setItem("recipes", JSON.stringify(copydata));
        reset();
        navigate(-1);
    };

    return (
        <form onSubmit={handleSubmit(SubmitHandler)}
        className="createform w-1/2 h-150 border-4 to-black bg-amber-200 mt-5 rounded-2xl "
        >
            <input 
            className="w-full rounded-2xl h-16 block outline-none mb-2 border-4  black"
            {...register("image")} type="url" placeholder="Image" />
            <input
            className=" w-full rounded-2xl h-16 block outline-none mb-2 border-4 black"
            {...register("title")} type="text" placeholder="Title" />
            <input
            className="w-full rounded-2xl h-16 block outline-none mb-2 border-4 black"
            {...register("chef")} type="text" placeholder="Chef Name" />
            <textarea
                 className="w-full rounded-2xl h-16 block outline-none mb-2 border-4 black"
                {...register("desc")}
                placeholder="enter description here"
            ></textarea>
            <textarea
                className="w-full rounded-2xl h-16 block outline-none mb-2 border-4 black"
                {...register("ingr")}
                placeholder="enter ingredients, seperated by comma"
            ></textarea>
            <textarea
                className="w-full rounded-2xl h-16 block outline-none mb-2 border-4 black"
                {...register("inst")}
                placeholder="enter instructions, seperated by comma"
            ></textarea>
            <select
            className="w-full rounded-2xl h-16 block outline-none mb-2 border-4 black"
            {...register("category")}>
                
                <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="supper">Supper</option>
                    <option value="dinner">Dinner</option>
            </select>
            <div className="flex items-center justify-center">

           
            <button className="p-4 bg-green-400 rounded-full">Register Recipe</button>
                </div>
        </form>

    );
};

export default Create;