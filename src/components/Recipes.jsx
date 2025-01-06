import { useEffect, useState } from "react";

const Recipes = ({ handleAddRecipeToCookTable }) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('../../public/recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    // console.log(recipes);


    return (
        <div className="md:w-2/3 grid grid-cols-1 lg:grid-cols-2">
            {
                recipes.map(recipe => <div key={recipe.id}
                    className="card bg-base-100 border-2 m-4">
                    <figure className="p-6">
                        <img className="w-full h-48 rounded-2xl"
                            src={recipe.recipe_image}
                            alt="recipe image" />
                    </figure>
                    <div className="card-body">
                        <h3 className="card-title">{recipe.recipe_name
                        }</h3>
                        <p>{recipe.short_description}</p>
                        <hr />
                        <h6 className="text-lg mt-4">Ingredients: {recipe.ingredients.length}</h6>
                        <ul className="text-lg, text-gray-600 mb-4 ml-8">
                            {recipe.ingredients.map((item, index) => <li className="list-disc" key={index}>{item}</li>)}
                        </ul>
                        <hr />
                        <div className="flex gap-5 mt-6">
                            <div className="flex gap-2 items-center">
                                <i className="fa-regular fa-clock"></i>
                                <p>{recipe.preparing_time} minutes.</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <i className="fa-solid fa-fire"></i>
                                <p>{recipe.calories} calories.</p>
                            </div>
                        </div>
                        <div className="card-actions justify-start mt-7">
                            <button onClick={() => handleAddRecipeToCookTable(recipe)} className="btn bg-green-400 rounded-3xl text-lg">Want to Cook</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Recipes;