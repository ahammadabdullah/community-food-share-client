import shoppinBag from "../assets/shopping-bag-graphic.png";
import coin from "../assets/coin-graphic.png";
import elephant from "../assets/elephant-graphic.png";
import { useSpring, animated } from "@react-spring/web";

const OurConfidence = () => {
  //   function Number({ n }) {
  //     const { number } = useSpring({
  //       from: { number: 0 },
  //       number: n,
  //       delay: 200,
  //       config: { mass: 1, tension: 20, friction: 10 },
  //     });
  //     return <animated.div>{number.to(n)}</animated.div>;
  //   }

  return (
    <div className=" !bg-white pt-10">
      <div className="max-w-7xl mx-auto py-10 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto  space-y-10">
          <div className="flex flex-col justify-center items-center gap-5 mx-auto">
            <img src={shoppinBag} alt="" />
            <div>
              <h3 className="text-4xl text-primary font-bold">10000 +</h3>
              <p className="font-bold text-black"> Meals distributed in 2022</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 mx-auto">
            <img src={elephant} alt="" />
            <div>
              <h3 className="text-4xl text-primary font-bold">8,760,000</h3>
              <p className="font-bold text-black">
                {" "}
                Pounds of food rescued each year
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 mx-auto">
            <img src={coin} alt="" />
            <div>
              <h3 className="text-4xl text-primary font-bold">$18,800,000</h3>
              <p className="font-bold text-black">
                {" "}
                The value of meals distributed in 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurConfidence;
