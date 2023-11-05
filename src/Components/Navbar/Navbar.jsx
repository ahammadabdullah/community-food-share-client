import { Button, Navbar } from "flowbite-react";
import logo from "../../assets/logo-sticky-header-retina.png";
const NavComp = () => {
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
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">Available Foods</Navbar.Link>
        <Navbar.Link href="#">Add Food</Navbar.Link>
        <Navbar.Link href="#">Manage My Food</Navbar.Link>
        <Navbar.Link href="#">My Food Request</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavComp;
