import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AvailableFoods from "../Pages/AvailableFoods";
import ManageMyFood from "../Pages/ManageMyFood";
import MyFoodRequest from "../Pages/MyFoodRequest";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <h3>Home</h3>,
      },
      {
        path: "/availablefoods",
        element: <AvailableFoods />,
      },
      {
        path: "/managemyfoods",
        element: <ManageMyFood />,
      },
      {
        path: "/myfoodrequest",
        element: <MyFoodRequest />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
