import axios from "axios";
import { useEffect, useState } from "react";

const FeaturedFoods = () => {
  const [featuredFoods, setFeaturedFoods] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3500/availablefoods")
      .then((res) => setFeaturedFoods(res.data));
  }, []);
  console.log(featuredFoods);
  return (
    <div className="my-10 max-w-7xl mx-auto">
      <h3 className="text-center text-5xl font-bold text-primary">
        Featured Foods
      </h3>
    </div>
  );
};

export default FeaturedFoods;
