import { Button, Navbar } from "flowbite-react";
import logo from "../../assets/logo-sticky-header-retina.png";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-hot-toast";

const NavComp = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logged out successfully");
      })
      .catch((err) => toast.error(err));
  };

  return (
    <Navbar fluid rounded className="max-w-7xl mx-auto">
      <Navbar.Brand>
        <img
          src={logo}
          className="mr-3 h-6 sm:h-9"
          alt="community food share logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user ? (
          <Button
            onClick={handleLogout}
            className="hover:!bg-secondary bg-primary "
          >
            Log Out
          </Button>
        ) : (
          <Link to={"/login"}>
            <Button className="hover:!bg-secondary bg-primary ">Log in</Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to={"/"}>
          <Navbar.Link
            className={`${
              location.pathname === "/" ? "!text-primary" : ""
            } hover:!text-primary `}
          >
            Home
          </Navbar.Link>
        </Link>
        <Link to={"/availablefoods"}>
          <Navbar.Link
            className={`${
              location.pathname === "/availablefoods" ? "!text-primary" : ""
            } hover:!text-primary `}
          >
            Available Foods
          </Navbar.Link>
        </Link>
        <Link to={"/managemyfoods"}>
          <Navbar.Link
            className={`${
              location.pathname === "/availablefoods" ? "!text-primary" : ""
            } hover:!text-primary `}
          >
            Manage My Foods
          </Navbar.Link>
        </Link>
        <Link to={"/addfood"}>
          <Navbar.Link
            className={`${
              location.pathname === "/addfood" ? "!text-primary" : ""
            } hover:!text-primary `}
          >
            Add Food
          </Navbar.Link>
        </Link>
        <Link to={"/myfoodrequest"}>
          <Navbar.Link
            className={`${
              location.pathname === "/myfoodrequest" ? "!text-primary" : ""
            } hover:!text-primary `}
          >
            My Food Requests
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavComp;
