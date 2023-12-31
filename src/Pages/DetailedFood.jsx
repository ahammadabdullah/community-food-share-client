import axios from "axios";
import { Modal } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import moment from "moment";
import { toast } from "react-hot-toast";
import { Helmet } from "react-helmet";

const DetailedFood = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        `https://community-food-share-server.vercel.app/availablefoods/${id}`
      )
      .then((res) => setData(res.data));
  }, [id]);
  const {
    uid,
    foodImage,
    foodName,
    donatorName,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
    donerEmail,
    status,
  } = data;
  const { user } = useAuth();
  const handleFoodRequest = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodImageURL = form.foodImageURL.value;
    const donorEmail = form.donorEmail.value;
    const donorName = form.donorName.value;
    const userEmail = form.userEmail.value;
    const userImageURL = form.userImageURL.value;
    const userName = form.userName.value;
    const requestDate = form.requestDate.value;
    const expiryDate = form.expiryDate.value;
    const notes = form.notes.value;
    const donationAmount = form.donationAmount.value;
    const requestData = {
      uid,
      foodName,
      foodImageURL,
      donorEmail,
      donorName,
      userEmail,
      userImageURL,
      userName,
      requestDate,
      expiryDate,
      notes,
      donationAmount,
      pickupLocation,
      status,
    };
    axios
      .post(
        "https://community-food-share-server.vercel.app/request/food",
        requestData
      )
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Request Successful");
          navigate(-1);
        }
      })
      .catch((err) => toast.error(err));
    setOpenModal(false);
  };
  return (
    <div className="bg-gray-100 py-10">
      <Helmet>
        <title>{foodName}</title>
      </Helmet>
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
          {status === "delivered" ? (
            <button disabled className="py-2 px-3 text-white bg-primary mt-4">
              Delivered
            </button>
          ) : (
            <button
              onClick={() => setOpenModal(true)}
              className="py-2 px-3 text-white bg-primary hover:bg-secondary mt-4"
            >
              Request
            </button>
          )}
        </div>
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Details</Modal.Header>
          <Modal.Body>
            <form onSubmit={handleFoodRequest}>
              <label htmlFor="foodID">Food ID:</label> <br />
              <input
                disabled
                className="w-full border-gray-400 bg-gray-100 focus:ring-0 outline-none rounded-md mb-4"
                defaultValue={uid}
                type="text"
                id="foodID"
              />
              <br />
              <label htmlFor="foodname">Food Name:</label> <br />
              <input
                disabled
                className="w-full border-gray-400 bg-gray-100 focus:ring-0 outline-none rounded-md mb-4"
                defaultValue={foodName}
                type="text"
                id="foodName"
              />
              <br />
              <label htmlFor="foodImageURL">Food Image URL:</label> <br />
              <input
                disabled
                className="w-full border-gray-400 bg-gray-100 focus:ring-0 outline-none rounded-md mb-4"
                defaultValue={foodImage}
                type="text"
                id="foodImageURL"
              />
              <br />
              <label htmlFor="donorEmail"> Donor Email:</label> <br />
              <input
                disabled
                className="w-full border-gray-400 bg-gray-100 focus:ring-0 outline-none rounded-md mb-4"
                defaultValue={donerEmail}
                type="text"
                id="donorEmail"
              />
              <br />
              <label htmlFor="donorName"> Donor Name:</label> <br />
              <input
                disabled
                className="w-full border-gray-400 bg-gray-100 focus:ring-0 outline-none rounded-md mb-4"
                defaultValue={donatorName}
                type="text"
                id="donorName"
              />
              <br />
              <label htmlFor="userEmail"> User Email:</label> <br />
              <input
                disabled
                className="w-full border-gray-400 bg-gray-100 focus:ring-0 outline-none rounded-md mb-4"
                defaultValue={user?.email}
                type="text"
                id="userEmail"
              />
              <br />
              <label htmlFor="userImageURL"> User Image URL:</label> <br />
              <input
                disabled
                className="w-full border-gray-400 bg-gray-100 focus:ring-0 outline-none rounded-md mb-4"
                defaultValue={user?.photoURL}
                type="text"
                id="userImageURL"
              />
              <br />
              <label htmlFor="userName"> User Name:</label> <br />
              <input
                disabled
                className="w-full border-gray-400 bg-gray-100 focus:ring-0 outline-none rounded-md mb-4"
                defaultValue={user?.displayName}
                type="text"
                id="userName"
              />
              <br />
              <label htmlFor="requestDate"> Request Date:</label> <br />
              <input
                disabled
                className="w-full border-gray-400 bg-gray-100 focus:ring-0 outline-none rounded-md mb-4"
                defaultValue={moment().format("YYYY-MM-DD")}
                type="text"
                id="requestDate"
              />
              <br />
              <label htmlFor="pickupLocation"> Pickup Location:</label> <br />
              <input
                disabled
                className="w-full border-gray-400 bg-gray-100 focus:ring-0 outline-none rounded-md mb-4"
                defaultValue={pickupLocation}
                type="text"
                id="pickupLocation"
              />
              <br />
              <label htmlFor="expiryDate"> Expiry Date:</label> <br />
              <input
                disabled
                className="w-full border-gray-400 bg-gray-100 focus:ring-0 outline-none rounded-md mb-4"
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
              <label htmlFor="donationAmount"> Donation Money:</label> <br />
              <input
                defaultValue={0}
                className="w-full border-primary ring-primary focus:ring-0 outline-none rounded-md mb-4"
                type="number"
                placeholder="Donation Amount"
                id="donationAmount"
              />
              <button
                className="bg-primary hover:bg-secondary text-white py-2 px-3"
                type="submit"
              >
                Request
              </button>
            </form>
          </Modal.Body>
          {/* <Modal.Footer></Modal.Footer> */}
        </Modal>
      </div>
    </div>
  );
};

export default DetailedFood;
