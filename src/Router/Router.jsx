import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AvailableFoods from "../Pages/AvailableFoods";
import ManageMyFood from "../Pages/ManageMyFood";
import MyFoodRequest from "../Pages/MyFoodRequest";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import DetailedFood from "../Pages/DetailedFood";
import AddFood from "../Pages/AddFood";
import UpdateFood from "../Pages/UpdateFood";

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
        loader: () => fetch("http://localhost:3500/availablefoods"),
      },
      {
        path: "/addfood",
        element: <AddFood />,
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
        path: "/foods/:id",
        element: <DetailedFood />,
      },
      {
        path: "/availablefoods/foods/:id",
        element: <DetailedFood />,
      },
      {
        path: "/updatefood/:id",
        element: <UpdateFood />,
      },
    ],
  },
]);

export default router;
