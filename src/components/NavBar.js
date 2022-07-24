import "./NavBar.css";

function NavBar(){
    return(
        <header>
            <nav id="" className="NavBar">
                <div className="max-width">
                    <div className="logo"><a href="#">Logo</a></div>
                    <ul className="menu">
                        <li><a href="" className="">Home</a></li>
                        <li><a href="" className="">About Us</a></li>
                        <li><a href="" className="">Products</a></li>
                        <li><a href="" className="">Faqs</a></li>
                        <li><a href="" className="">Contact Us</a></li>
                    </ul>
                    <div className="chart"><a href="">chart</a></div>

                </div>
            </nav>
        </header>
    )
}

export default NavBar;