import "./main.css";
import CartWidget from "./CartWidget/index";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(){
    const menu = [  {url:'/', title:'Products'},
                    {url:'/detail/4', title:'A Product'},
                    {url:'/category/Sneakers', title:'Sneakers'},
                    {url:'/category/Boot', title:'Boots'},
                    {url:'/category/Running', title:'Running'},
                ]
    
    return(
        <header>
            <nav id="" className="NavBar">
                <div className="max-width">
                    <div className="containerNavbar">
                        <div className="contNavB">
                        <div className="contLogo">
                            <Link to ="/">
                            <img className="logo" src="/LogoAdap.png" alt='bakers team logo'/>
                            </Link>
                        </div>
                        <Navbar  expand="md">
                            <Container fluid>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav className=" contMenu"
                                        style={{ maxHeight: '200px' }} navbarScroll>
                                            {menu.map((data => <Link to={data.url}> {data.title} </Link>))}
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