import { Helmet } from "react-helmet";
import MyTable from "../Components/MyTable";
import useAuth from "../Hooks/useAuth";

const ManageMyFood = () => {
  const { loading } = useAuth();
  if (loading) {
    return <h3>loading</h3>;
  }
  return (
    <div className="bg-gray-100">
      <Helmet>
        <title>Mange My Food</title>
      </Helmet>
      <div className="max-w-7xl mx-auto py-10">
        <h3 className="text-3xl py-4 font-semibold text-primary text-center">
          Manage My Food
        </h3>
        <div className="w-fit mx-auto">
          <MyTable />
        </div>
      </div>
    </div>
  );
};

export default ManageMyFood;
