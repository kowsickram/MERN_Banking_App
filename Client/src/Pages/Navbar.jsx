import "./pagestyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./bgnobg.png";
import { Navbar, Nav } from "react-bootstrap";

export default function Navebar() {
  const isLoggedIn=false 


  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="animated-navbar">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="60"
            width="60"
            className="d-inline-block align-top"
            alt="Bad Bank Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/home/">Home</Nav.Link>
            <Nav.Link href="#/account/">Account</Nav.Link>
            {isLoggedIn && (
              <>
                
                <Nav.Link href="#/deposit/">Deposit</Nav.Link>
                <Nav.Link href="#/withdraw/">Withdraw</Nav.Link>
              </>
            )}
            <Nav.Link href="#/alldata/">All Data</Nav.Link>
            <Nav.Link href="#/customercare/">Customer Care</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
      
    </>
  );
}