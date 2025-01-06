import { useEffect, useState } from "react";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('../../public/recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
            console.log(recipes);


    return (
        <div className="flex flex-col md:flex-row md:w-2/3">
            <div></div>
            <div></div>
        </div>
    );
};

export default Recipes;