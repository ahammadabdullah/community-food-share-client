import axios from "axios";
import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";

const ManageRequest = () => {
  const { id } = useParams();
  console.log("name", id);
  const [data, setData] = useState([]);
  const [delivered, setDelivered] = useState(!true);
  useEffect(() => {
    axios
      .get(`http://localhost:3500/managerequest?foodName=${id}`)
      .then((res) => setData(res.data));
  }, [id, delivered]);
  const handleDelivered = (item) => {
    console.log(item);
    const updatedData = {
      status: "delivered",
    };
    axios
      .put(`http://localhost:3500/requestedfood/${item.uid}`, updatedData)
      .then((res) => {
        if (res.data.modifiedCount) {
          setDelivered(!delivered);
          toast.success("delivered successfully");
          return;
        }
        toast.error("Something went wrong");
      });
  };
  console.log(data);
  return (
    <div className="max-w-7xl mx-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Requester Image</Table.HeadCell>
          <Table.HeadCell>Requester Name</Table.HeadCell>
          <Table.HeadCell>Requester Email</Table.HeadCell>
          <Table.HeadCell>Request Date</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Action</span>
          </Table.HeadCell>
        </Table.Head>
        {data?.map((item) => (
          <Table.Row
            key={item._id}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <img className="w-10" src={item.userImageURL} alt="" />
            </Table.Cell>
            <Table.Cell>{item.userName}</Table.Cell>
            <Table.Cell>{item.userEmail}</Table.Cell>
            <Table.Cell>{item.requestDate}</Table.Cell>
            <Table.Cell>{item.status}</Table.Cell>
            <Table.Cell>
              {item.status === "delivered" ? (
                <button disabled className="p-2 bg-primary text-white">
                  Delivered
                </button>
              ) : (
                <button
                  onClick={() => handleDelivered(item)}
                  className="p-2 bg-primary text-white"
                >
                  Deliver
                </button>
              )}
            </Table.Cell>
          </Table.Row>
        ))}
        <Table.Body className="divide-y"></Table.Body>
      </Table>
    </div>
  );
};

export default ManageRequest;
