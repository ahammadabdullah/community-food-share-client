import { Outlet } from "react-router-dom";
import NavComp from "../Components/Navbar/Navbar";
import FooterBar from "../Components/Footer/FooterBar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Toaster />
      <NavComp />
      <Outlet />
      <FooterBar />
    </div>
  );
};

export default MainLayout;
