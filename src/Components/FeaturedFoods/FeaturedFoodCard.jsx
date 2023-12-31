import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const FeaturedFoodCard = ({ food }) => {
  const {
    _id,
    foodImage,
    foodName,
    donatorImage,
    donatorName,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
    status,
  } = food;
  return (
    <div className="w-[350px] bg-white mx-auto my-3">
      <div>
        <img className="w-[350px] h-[200px]" src={foodImage} alt="" />
      </div>
      <div className="p-4">
        <div className="pt-3 h-12 flex justify-between items-center">
          <img
            title="Donator Image"
            className="w-12 rounded-full"
            src={donatorImage}
            alt="donator Image"
          />
          <h3 title="Donated by" className="font-medium">
            {donatorName}
          </h3>
        </div>
        <h3 className="text-center text-3xl text-primary font-semibold">
          {foodName}
        </h3>
        <p>
          Status: <span className="font-medium">{status}</span>
        </p>
        <p>
          Quantity: <span className="font-medium">{foodQuantity}</span>
        </p>
        <p>
          Pickup Location: <span className="font-medium">{pickupLocation}</span>
        </p>
        <p>
          Expiry Date: <span className="font-medium">{expiredDateTime}</span>
        </p>
        <p className="h-12 overflow-hidden">
          <span className="font-medium">{additionalNotes}</span>
        </p>
        <div className="flex justify-center mt-2">
          <Link to={`foods/${_id}`}>
            <button className="py-2 px-3 bg-primary hover:bg-secondary text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFoodCard;
