import axios from "axios";
import { useState } from "react";
import FeaturedFoodCard from "../Components/FeaturedFoods/FeaturedFoodCard";
import { BsSearch } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import Lottie from "lottie-react";
import circle from "../../public/circleanimation.json";
import { useRef } from "react";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet";

const AvailableFoods = () => {
  const data = useLoaderData();
  const { loading } = useAuth();
  const [query, setQuery] = useState();
  const [foods, setFoods] = useState(data);
  const lottieRef = useRef();

  const handleSearch = () => {
    const filteredItem = data.filter((item) =>
      item.foodName.toLowerCase().includes(query.toLowerCase())
    );
    setFoods(filteredItem);
  };
  const handleSort = () => {
    axios
      .get("http://localhost:3500/availablefoods?sort=true")
      .then((res) => setFoods(res.data));
  };
  if (loading) {
    return <Lottie lottieRef={lottieRef} animationData={circle} />;
  }
  return (
    <div className="bg-gray-100 py-10">
      <Helmet>
        <title>Available Foods</title>
      </Helmet>
      <div className="max-w-7xl mx-auto ">
        <h3 className="mb-5 text-center text-3xl lg:text-5xl font-semibold text-primary">
          Available Foods
        </h3>
        <div className="md:mx-5 mb-5 flex md:justify-between flex-col md:flex-row gap-4 items-center">
          <div className="mx-auto md:mx-0 w-[345px]">
            <div className=" relative ">
              <input
                className="w-[300px] text-primary  outline-none border-primary border-2 border-r-0 focus:outline-none focus:border-primary focus:ring-0"
                placeholder="Search here by name"
                type="text"
                name="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="absolute bg-primary hover:bg-secondary py-3 px-3 text-white text-xl"
              >
                {" "}
                <BsSearch />
              </button>
            </div>
          </div>
          <button
            onClick={handleSort}
            className="py-2 max-w-fit px-3 bg-primary hover:bg-secondary text-white"
          >
            Sort By Expiry Date
          </button>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-between ">
          {foods.map((item) => (
            <FeaturedFoodCard key={item._id} food={item}></FeaturedFoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableFoods;
