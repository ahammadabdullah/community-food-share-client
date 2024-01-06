import { Carousel } from "flowbite-react";
import sliderImage1 from "../assets/slider1.jpeg";
import sliderImage2 from "../assets/slider2.jpeg";
import sliderImage3 from "../assets/slider3.jpg";
const Slider = () => {
  return (
    <div className="h-56 sm:h-64 md:h-[600px] pt-0 ">
      <Carousel>
        <div className="relative ">
          <img className="" src={sliderImage1} alt="" />
          <div className="absolute md:top-[20%] top-[20%] lg:top-[40%] left-[10%] md:w-[40%] w-1/2 text-white md:space-y-4 ">
            <h3 className="text-2xl md:text-5xl font-bold ">
              Let's Bag Hunger During the 9Cares Drive
            </h3>
            <p className="text-base md:text-2xl">
              Help Us Serve More Families by Raising 135,000 Meals!
            </p>
            <button className=" bg-primary hover:bg-secondary md:px-4 md:py-3 px-2 py-1 font-bold rounded-lg">
              Donate Now
            </button>
          </div>
        </div>
        <div className="relative ">
          <img className="" src={sliderImage2} alt="" />
          <div className="absolute md:top-[20%] top-[20%] lg:top-[40%] left-[10%] md:w-[40%] w-1/2 text-white md:space-y-4 ">
            <h3 className="text-2xl md:text-5xl font-bold ">
              Host a Fund & Food Drive
            </h3>
            <p className="text-base md:text-2xl">
              Learn how you can host your own drive - either in-person or
              virtually!
            </p>
            <button className=" bg-primary hover:bg-secondary md:px-4 md:py-3 px-2 py-1 font-bold rounded-lg">
              Get Started
            </button>
          </div>
        </div>
        <div className="relative ">
          <img src={sliderImage3} alt="" />
          <div className="absolute md:top-[20%] top-[20%] lg:top-[40%] left-[10%] md:w-[40%] w-1/2 text-white md:space-y-4 ">
            <h3 className="text-2xl md:text-5xl font-bold ">
              Food for Thought
            </h3>
            <p className="text-base md:text-2xl">
              Catch up with Community Food Share through our latest newsletter{" "}
            </p>
            <button className=" bg-primary hover:bg-secondary md:px-4 md:py-3 px-2 py-1 font-bold rounded-lg">
              Read Now{" "}
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
