import FeaturedFoods from "../Components/FeaturedFoods/FeaturedFoods";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Slider />
      <FeaturedFoods />
    </div>
  );
};

export default Home;
