import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
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
        <Recipes></Recipes>
        {/* Sidebar Section */}
        <Sidebar></Sidebar>
      </section>
    </div>
  );
};

export default App;