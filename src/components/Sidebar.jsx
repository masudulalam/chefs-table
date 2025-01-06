const Sidebar = ({ recipeCookTable }) => {

    // const {recipe_name} = recipeCookTable;
    // console.log(recipe_name);

    return (
        <div className="md:w-1/3">
            <h4>Want To Cook: {recipeCookTable.length}</h4>
        </div>
    );
};

export default Sidebar;