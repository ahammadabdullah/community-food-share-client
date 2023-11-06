import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AvailableFoods from "../Pages/AvailableFoods";
import ManageMyFood from "../Pages/ManageMyFood";
import MyFoodRequest from "../Pages/MyFoodRequest";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import DetailedFood from "../Pages/DetailedFood";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
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
      {
        path: "/availablefoods/:id",
        element: <DetailedFood />,
      },
    ],
  },
]);

export default router;
