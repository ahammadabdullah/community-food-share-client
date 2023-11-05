import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

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
      },
      {
        path: "/managemyfoods",
      },
      {
        path: "/myfoodrequest",
      },
    ],
  },
]);

export default router;
