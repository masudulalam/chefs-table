const Sidebar = ({ recipeCookTable, handleRemoveRecipe, cookingRecipe }) => {

    // const {recipe_name} = recipeCookTable;
    // console.log(recipe_name);

    return (
        <div className="md:w-1/3 border-2 rounded-2xl">
            {/* want to cook  */}
            <div className="overflow-x-auto">
                <h4 className="text-2xl font-semibold p-6 text-center">Want To Cook: {recipeCookTable.length}</h4>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recipeCookTable.map((recipe, index) =>
                                <tr className="hover" key={index}>
                                    <th>{index + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time}</td>
                                    <td>{recipe.calories}</td>
                                    <td>
                                        <div className="card-actions justify-start mt-7">
                                            <button onClick={() => handleRemoveRecipe(recipe.recipe_id)} className="btn bg-green-400 rounded-3xl">Preparing</button>
                                        </div>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {/* Currently cook */}
            <div className="overflow-x-auto mt-8">
                <h4 className="text-2xl font-semibold p-6 text-center">Currently cooking: {cookingRecipe.length}</h4>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cookingRecipe.map((recipe, index) =>
                                <tr className="hover" key={index}>
                                    <th>{index + 1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time}</td>
                                    <td>{recipe.calories}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sidebar;