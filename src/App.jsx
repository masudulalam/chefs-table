import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import OurRecipes from "./components/OurRecipes";

const App = () => {
  return (
    <div className="container mx-auto">
      {/* Navbar section */}
      <Navbar></Navbar>
      {/* Banner Section */}
      <Banner></Banner>
      {/* Our Recipes Section */}
      <OurRecipes></OurRecipes>
    </div>
  );
};

export default App;