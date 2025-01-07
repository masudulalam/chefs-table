import { useState } from "react";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {

  const [recipeCookTable, setRecipeCookTable] = useState([]);
  const [cookingRecipe, SetCookingRecipe] = useState([]);

  const handleAddRecipeToCookTable = recipe => {
    const isExist = recipeCookTable.find(previousRecipe => previousRecipe.recipe_id === recipe.recipe_id)
    if(!isExist) {
      setRecipeCookTable([...recipeCookTable, recipe]);
    } else {
      alert('Recipe Already Exist in The Cook table.')
    }
  }

  const handleRemoveRecipe = id => {
    // Find which recipe is remove
    const removedRecipe = recipeCookTable.find(recipe => recipe.recipe_id === id);

    // Remove from want to cook table
    const updatedRecipeCookTable = recipeCookTable.filter(recipe => recipe.recipe_id !== id);
    setRecipeCookTable(updatedRecipeCookTable);
    SetCookingRecipe([...cookingRecipe, removedRecipe]);
  }
  

  return (
    <div className="container mx-auto">
      {/* Navbar section */}
      <Navbar></Navbar>
      {/* Banner Section */}
      <Banner></Banner>
      {/* Our Recipes Section */}
      <OurRecipes></OurRecipes>
      {/* Card Section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Recipe Card  section */}
        <Recipes handleAddRecipeToCookTable={handleAddRecipeToCookTable}></Recipes>
        {/* Sidebar Section */}
        <Sidebar cookingRecipe={cookingRecipe} handleRemoveRecipe={handleRemoveRecipe} recipeCookTable={recipeCookTable}></Sidebar>
      </section>
    </div>
  );
};

export default App;