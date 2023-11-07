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
import ManageRequest from "../Pages/ManageRequest";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/availablefoods",
        element: (
          <PrivateRoute>
            <AvailableFoods />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:3500/availablefoods"),
      },
      {
        path: "/addfood",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/managemyfoods",
        element: (
          <PrivateRoute>
            <ManageMyFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/myfoodrequest",
        element: (
          <PrivateRoute>
            <MyFoodRequest />
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <DetailedFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/availablefoods/foods/:id",
        element: <DetailedFood />,
      },
      {
        path: "/updatefood/:id",
        element: (
          <PrivateRoute>
            <UpdateFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/managemyfoods/managerequest/:id",
        element: (
          <PrivateRoute>
            <ManageRequest />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
