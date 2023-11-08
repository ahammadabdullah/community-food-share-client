import axios from "axios";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const UpdateFood = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3500/availablefoods/${id}`)
      .then((res) => setData(res.data));
  }, [id]);
  const {
    foodImage,
    foodName,
    donatorImage,
    donatorName,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
    donerEmail,
    status,
  } = data;
  const handleUpdateFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodImage = form.foodImage.value;
    const foodName = form.foodName.value;
    const donatorImage = form.donatorImage.value;
    const donatorName = form.donatorName.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDateTime = form.expiredDateTime.value;
    const additionalNotes = form.additionalNotes.value;
    const donerEmail = form.donerEmail.value;
    const foodStatus = form.foodStatus.value;
    const foodData = {
      foodImage,
      foodName,
      donatorImage,
      donatorName,
      foodQuantity,
      pickupLocation,
      expiredDateTime,
      additionalNotes,
      donerEmail,
      status: foodStatus,
    };

    axios
      .put(`http://localhost:3500/updatefood?id=${id}`, foodData)
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Food Updated Successfully");
          navigate(-1);
        }
      })
      .catch((err) => toast.error(err));
  };
  return (
    <div>
      <Helmet>
        <title>Update Food</title>
      </Helmet>
      <div className="bg-gray-100 py-10">
        <div className=" w-full md:w-2/3 mx-auto bg-white rounded-lg px-5">
          <h3 className="text-3xl font-semibold text-primary text-center pt-3">
            update food
          </h3>
          <form onSubmit={handleUpdateFood}>
            <input
              defaultValue={foodName}
              required
              className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
              type="text"
              name="foodName"
              placeholder="Food Name"
            />
            <input
              defaultValue={foodImage}
              required
              className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
              type="text"
              name="foodImage"
              placeholder="Food Image URL"
            />
            <input
              required
              defaultValue={donatorImage}
              className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
              type="text"
              name="donatorImage"
              placeholder="Donor Image"
            />
            <input
              required
              defaultValue={donatorName}
              className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
              type="text"
              name="donatorName"
              placeholder="Donor Name"
            />
            <input
              required
              defaultValue={foodQuantity}
              className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
              type="number"
              name="foodQuantity"
              placeholder="Food Quantity"
            />
            <input
              required
              defaultValue={pickupLocation}
              className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
              type="text"
              name="pickupLocation"
              placeholder="Pickup Location"
            />
            <input
              required
              defaultValue={expiredDateTime}
              className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
              type="date"
              name="expiredDateTime"
              placeholder="Expiry Date"
            />
            <input
              required
              defaultValue={additionalNotes}
              className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
              type="text"
              name="additionalNotes"
              placeholder="Additional Notes"
            />
            <input
              disabled
              defaultValue={donerEmail}
              className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
              type="email"
              name="donerEmail"
              placeholder="Donor Email"
            />
            <input
              required
              defaultValue={status}
              className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
              type="text"
              name="foodStatus"
              placeholder="Status- available / delivered"
            />
            <input
              className=" hover:bg-secondary rounded-md w-full bg-primary  py-4 text-white my-4"
              type="submit"
              value="Update Food"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;
