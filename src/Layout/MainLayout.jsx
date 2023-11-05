import { Outlet } from "react-router-dom";
import NavComp from "../Components/Navbar/Navbar";
import FooterBar from "../Components/Footer/FooterBar";

const MainLayout = () => {
  return (
    <div>
      <NavComp />
      <Outlet />
      <FooterBar />
    </div>
  );
};

export default MainLayout;
