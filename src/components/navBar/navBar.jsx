import "./main.css";
import CartWidget from "./cartWidget/cartWidget.jsx";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar(){
    const menu = [  {url:'/', title:'Products'},
                    {url:'/detail/d0dWbbSRfe8jreizMH3j', title:'Featured'},
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
                                <Link to ="/home">
                                <img className="logo" src="/LogoAdap.png" alt='bakers team logo'/>
                                </Link>
                            </div>
                            <Navbar  expand="md">
                                <Container fluid>
                                    <Navbar.Toggle aria-controls="navbarScroll" className="btnToggle"/>
                                    <Navbar.Collapse id="navbarScroll" >
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
                </div>
            </nav>
        </header>
    )
}

export default NavBar;