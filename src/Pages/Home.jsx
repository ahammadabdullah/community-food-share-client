import { Helmet } from "react-helmet";
import FeaturedFoods from "../Components/FeaturedFoods/FeaturedFoods";
import Slider from "../Components/Slider";
import { motion } from "framer-motion";
import OurConfidence from "../Components/OurConfidence";
import Banner from "../Components/Banner";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider />

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <FeaturedFoods />
      </motion.div>
      <OurConfidence />
      <Banner />
    </div>
  );
};

export default Home;
