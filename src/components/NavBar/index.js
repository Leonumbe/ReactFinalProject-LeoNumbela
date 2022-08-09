import "./main.css";
import CartWidget from "./CartWidget/index";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar(){
    return(
        <header>
            <nav id="" className="NavBar">
                <div className="max-width">
                    <div className="containerNavbar">
                        <div className="contNavB">
                        <div className="contLogo">
                            <img className="logo" src="/LogoAdap.png" alt='bakers team logo'/>
                        </div>
                        <Navbar  expand="md">
                         <Container fluid>
                         <Navbar.Toggle aria-controls="navbarScroll" />
                         <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav.Link href="#action1">About Us</Nav.Link>
                                <Nav.Link href="#action2">Products</Nav.Link>
                                <Nav.Link href="#action2">Faqs</Nav.Link>
                                <Nav.Link href="#action2">Contact Us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    </div>

                       <div>
                        <CartWidget/>
                       </div>
                    </div>
                    <div>
                    
                    </div>
                   
                    <div>
                   
                            <Form className="d-flex">
                                <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
  



                    </div>



                </div>
            </nav>
        </header>
    )
}

export default NavBar;