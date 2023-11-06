import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";

const FeaturedFoods = () => {
  const [featuredFoods, setFeaturedFoods] = useState([]);
  // const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3500/availablefoods").then((res) => {
      const data = res.data;
      const sortedData = data.sort((a, b) => b.foodQuantity - a.foodQuantity);

      return setFeaturedFoods(sortedData);
    });
  }, []);
  console.log(featuredFoods);
  // setFeaturedFoods(sortedData);
  return (
    <div className="my-10 max-w-7xl mx-auto">
      <h3 className="pb-5 text-center text-5xl font-bold text-primary">
        Featured Foods
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {featuredFoods.slice(0, 6).map((food) => (
          <FeaturedFoodCard key={food._id} food={food}></FeaturedFoodCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedFoods;
