import { Button, Navbar } from "flowbite-react";
import logo from "../../assets/logo-sticky-header-retina.png";
import { Link, useLocation } from "react-router-dom";
const NavComp = () => {
  const location = useLocation();
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img
          src={logo}
          className="mr-3 h-6 sm:h-9"
          alt="community food share logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to={"/login"}>
          <Button className="hover:!bg-secondary bg-primary ">Log in</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to={"/"}>
          <Navbar.Link
            className="hover:!text-primary "
            active={location.pathname === "/"}
          >
            Home
          </Navbar.Link>
        </Link>
        <Link to={"/availablefoods"}>
          <Navbar.Link
            className="hover:!text-primary "
            active={location.pathname === "/availablefoods"}
          >
            Available Foods
          </Navbar.Link>
        </Link>
        <Link to={"/managemyfoods"}>
          <Navbar.Link
            className="hover:!text-primary "
            active={location.pathname === "/managemyfoods"}
          >
            Manage My Foods
          </Navbar.Link>
        </Link>
        <Link to={"/myfoodrequest"}>
          <Navbar.Link
            className="hover:!text-primary "
            active={location.pathname === "/myfoodrequest"}
          >
            My Food Requests
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavComp;
