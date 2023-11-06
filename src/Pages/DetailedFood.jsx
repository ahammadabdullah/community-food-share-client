import axios from "axios";
import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const DetailedFood = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3500/availablefoods/${id}`)
      .then((res) => setData(res.data));
  }, [id]);
  const {
    _id,
    foodImage,
    foodName,
    donatorName,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
    donerEmail,
  } = data;
  const { user } = useAuth();
  console.log(user);
  const handleFoodRequest = () => {
    setOpenModal(false);
  };
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-center">
        <img className="w-[650px]" src={foodImage} alt={foodName} />
      </div>
      <div className="max-w-[650px] mx-auto">
        <h3 className="mt-5 font-semibold text-2xl text-primary">
          Donor Information:
        </h3>
        <h4>
          Donated by: <span className="font-medium">{donatorName}</span>
        </h4>
        <h4>
          Food Pickup Location:{" "}
          <span className="font-medium">{pickupLocation}</span>{" "}
        </h4>
        <h3 className="mt-5 font-semibold text-2xl text-primary">
          Food Information:
        </h3>
        <h4>
          Food Name: <span className="font-medium">{foodName}</span>
        </h4>
        <h4>
          Food Quantity: <span className="font-medium">{foodQuantity}</span>
        </h4>
        <h4>
          Expiry Date: <span className="font-medium">{expiredDateTime}</span>
        </h4>
        <button
          onClick={() => setOpenModal(true)}
          className="py-2 px-3 text-white bg-primary hover:bg-secondary mt-4"
        >
          Request
        </button>
      </div>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Details</Modal.Header>
        <Modal.Body>
          <div className="">
            <label htmlFor="foodname">Food Name:</label> <br />
            <input
              disabled
              className="w-full border-gray-400 focus:ring-0 outline-none rounded-md mb-4"
              defaultValue={foodName}
              type="text"
              id="foodname"
            />
            <br />
            <label htmlFor="foodImageURL">Food Image URL:</label> <br />
            <input
              disabled
              className="w-full border-gray-400 focus:ring-0 outline-none rounded-md mb-4"
              defaultValue={foodImage}
              type="text"
              id="foodImageURL"
            />
            <br />
            <label htmlFor="foodID">Food ID:</label> <br />
            <input
              disabled
              className="w-full border-gray-400 focus:ring-0 outline-none rounded-md mb-4"
              defaultValue={_id}
              type="text"
              id="foodID"
            />
            <br />
            <label htmlFor="donorEmail"> Donor Email:</label> <br />
            <input
              disabled
              className="w-full border-gray-400 focus:ring-0 outline-none rounded-md mb-4"
              defaultValue={donerEmail}
              type="text"
              id="donorEmail"
            />
            <br />
            <label htmlFor="donorName"> Donor Name:</label> <br />
            <input
              disabled
              className="w-full border-gray-400 focus:ring-0 outline-none rounded-md mb-4"
              defaultValue={donatorName}
              type="text"
              id="donorName"
            />
            <br />
            <label htmlFor="userEmail"> User Email:</label> <br />
            <input
              disabled
              className="w-full border-gray-400 focus:ring-0 outline-none rounded-md mb-4"
              defaultValue={user.email}
              type="text"
              id="userEmail"
            />
            <br />
            <label htmlFor="requestDate"> Request Date:</label> <br />
            <input
              disabled
              className="w-full border-gray-400 focus:ring-0 outline-none rounded-md mb-4"
              defaultValue={expiredDateTime}
              type="text"
              id="requestDate"
            />
            <br />
            <label htmlFor="expiryDate"> Expiry Date:</label> <br />
            <input
              disabled
              className="w-full border-gray-400 focus:ring-0 outline-none rounded-md mb-4"
              defaultValue={expiredDateTime}
              type="text"
              id="expiryDate"
            />
            <br />
            <label htmlFor="notes"> Additional Notes:</label> <br />
            <input
              className="w-full border-primary focus:ring-0 outline-none rounded-md mb-4"
              defaultValue={additionalNotes}
              type="text"
              id="notes"
            />
            <br />
            <label htmlFor="donationAmount"> Additional Notes:</label> <br />
            <input
              className="w-full border-primary ring-primary focus:ring-0 outline-none rounded-md mb-4"
              type="number"
              placeholder="Donation Amount"
              id="donationAmount"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="bg-primary hover:bg-secondary"
            onClick={handleFoodRequest}
          >
            Request
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DetailedFood;
