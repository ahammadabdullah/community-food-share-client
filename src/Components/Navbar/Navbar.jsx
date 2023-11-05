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
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span> */}
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Log in</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to={"/"}>
          <Navbar.Link active={location.pathname === "/"}>Home</Navbar.Link>
        </Link>
        <Link to={"/availablefoods"}>
          <Navbar.Link active={location.pathname === "/availablefoods"}>
            Available Foods
          </Navbar.Link>
        </Link>
        <Link to={"/managemyfoods"}>
          <Navbar.Link active={location.pathname === "/managemyfoods"}>
            Manage My Foods
          </Navbar.Link>
        </Link>
        <Link to={"/myfoodrequest"}>
          <Navbar.Link active={location.pathname === "/myfoodrequest"}>
            My Food Requests
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavComp;
