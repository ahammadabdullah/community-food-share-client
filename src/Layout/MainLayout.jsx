import { Outlet } from "react-router-dom";
import NavComp from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <NavComp />
      <Outlet />
    </div>
  );
};

export default MainLayout;
