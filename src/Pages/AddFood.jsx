import useAuth from "../Hooks/useAuth";

const AddFood = () => {
  const { user } = useAuth();
  const handleAddFood = (e) => {
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
    console.log(foodData);
  };
  return (
    <div className="bg-gray-100 py-10">
      <div className=" w-2/3 mx-auto bg-white rounded-lg px-5">
        <h3 className="text-3xl font-semibold text-primary text-center pt-3">
          Add food
        </h3>
        <form onSubmit={handleAddFood}>
          <input
            required
            className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
            type="text"
            name="foodName"
            placeholder="Food Name"
          />
          <input
            required
            className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
            type="text"
            name="foodImage"
            placeholder="Food Image URL"
          />
          <input
            defaultValue={user.photoURL}
            className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
            type="text"
            name="donatorImage"
            placeholder="Donor Image"
          />
          <input
            defaultValue={user.displayName}
            className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
            type="text"
            name="donatorName"
            placeholder="Donor Name"
          />
          <input
            className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
            type="number"
            name="foodQuantity"
            placeholder="Food Quantity"
          />
          <input
            className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
            type="text"
            name="pickupLocation"
            placeholder="Pickup Location"
          />
          <input
            className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
            type="date"
            name="expiredDateTime"
            placeholder="Expiry Date"
          />
          <input
            className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
            type="text"
            name="additionalNotes"
            placeholder="Additional Notes"
          />
          <input
            disabled
            defaultValue={user.email}
            className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
            type="email"
            name="donerEmail"
            placeholder="Donor Email"
          />
          <input
            defaultValue={"available"}
            className="w-full bg-gray-100 py-5 pl-5 my-4 rounded-lg text-primary focus:border-primary  focus:outline-none focus:ring-0 "
            type="text"
            name="foodStatus"
            placeholder="Status- available / delivered"
          />
          <input
            className=" hover:bg-secondary rounded-md w-full bg-primary  py-4 text-white my-4"
            type="submit"
            value="Add Food"
          />
        </form>
      </div>
    </div>
  );
};

export default AddFood;
