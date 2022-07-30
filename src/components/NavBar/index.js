import "./main.css";
import CartWidget from "./CartWidget/index";
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <header>
            <nav id="" className="NavBar">
                <div className="max-width">
                    <div className="containerNavbar">
                        <div className="contLogo">
                            <img className="logo" src="/LogoAdap.png" alt='bakers team logo'/>
                        </div>
                        <ul className="menu">
                            <li><Link to="/" className="">Home</Link></li>
                            <li><Link to="/" className="">About Us</Link></li>
                            <li><Link to="/" className="">Products</Link></li>
                            <li><Link to="/" className="">Faqs</Link></li>
                            <li><Link to="/" className="">Contact Us</Link></li>
                        </ul>
                        <CartWidget/>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;