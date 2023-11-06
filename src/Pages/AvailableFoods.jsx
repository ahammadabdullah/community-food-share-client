import axios from "axios";
import { useEffect, useState } from "react";
import FeaturedFoodCard from "../Components/FeaturedFoods/FeaturedFoodCard";

const AvailableFoods = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3500/availablefoods")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h3 className="mb-5 text-center text-3xl lg:text-5xl font-semibold text-primary">
        Available Foods
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {data.map((item) => (
          <FeaturedFoodCard key={item._id} food={item}></FeaturedFoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
