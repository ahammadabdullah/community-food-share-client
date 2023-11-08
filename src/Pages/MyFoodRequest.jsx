import { Table } from "flowbite-react";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Lottie from "lottie-react";
import circle from "../../public/circleanimation.json";
import { useRef } from "react";
import { Helmet } from "react-helmet";

const MyFoodRequest = () => {
  // const [data, setData] = useState([]);
  const { user } = useAuth();
  const lottieRef = useRef();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myfoodrequest"],
    queryFn: async () =>
      await axios
        .get(`http://localhost:3500/requestedfood?email=${user?.email}`, {
          withCredentials: true,
        })
        .then((res) => {
          return res.data;
        }),
  });

  const handleReqCancel = ({ _id, status }) => {
    if (status === "available") {
      axios
        .delete(`http://localhost:3500/requestedfood?id=${_id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            toast.success("Cancelled Successfully");
            refetch();
          }
        });
    } else {
      toast.error("Food Already Delivered");
    }
  };
  if (isLoading) {
    return (
      <div className="w-[300px] mx-auto">
        <Lottie lottieRef={lottieRef} animationData={circle} />
      </div>
    );
  }
  return (
    <div>
      <Helmet>
        <title>My Food Request</title>
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <Table>
          <Table.Head>
            <Table.HeadCell>Donor Name</Table.HeadCell>
            <Table.HeadCell>Pickup Location</Table.HeadCell>
            <Table.HeadCell>Expiry Date</Table.HeadCell>
            <Table.HeadCell>Request Date</Table.HeadCell>
            <Table.HeadCell>Donation Amount</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Cancel</span>
            </Table.HeadCell>
          </Table.Head>
          {data?.map((item) => (
            <Table.Row
              key={item._id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {item.donorName}
              </Table.Cell>
              <Table.Cell>{item.pickupLocation}</Table.Cell>
              <Table.Cell>{item.expiryDate}</Table.Cell>
              <Table.Cell>{item.requestDate}</Table.Cell>
              <Table.Cell>{item.donationAmount}</Table.Cell>
              <Table.Cell>{item.status}</Table.Cell>
              <Table.Cell>
                {item.status === "delivered" ? (
                  <button disabled className="p-2 bg-primary text-white">
                    Delivered
                  </button>
                ) : (
                  <button
                    onClick={() => handleReqCancel(item)}
                    className="p-2 bg-primary text-white"
                  >
                    Cancel
                  </button>
                )}
              </Table.Cell>
            </Table.Row>
          ))}
          <Table.Body className="divide-y"></Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default MyFoodRequest;
// const {
//   donorName,
//   requestDate,
//   expiryDate,
//   donationAmount,
//   pickupLocation,
//   status,
// } = data;
