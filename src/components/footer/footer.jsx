import "./main.css";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram  } from '@fortawesome/free-brands-svg-icons' ;
import { faCopyright } from '@fortawesome/free-solid-svg-icons' ;


export default function Footer(){

const navbarFooter=[
    {url:'/home', title:'Home'},
    {url:'/About Us', title:'Baker Team'},
    {url:'/', title:'Our Products'},
    {url:'/contacUs', title:'Contact Us'},
]
    return(
        <footer id="" className="footer">
            <div className="max-width">
                <div className="containerFooter">
                    <div className="contentNavBarFooter">
                        {
                            navbarFooter.map((item) =>
                            <Link to={item.url} className="navbarFooter">{item.title}</Link>
                            )}
                    </div>
                    <div>

                    <div className="socialMedia">
                        <Link to="http://www.linkedin.com/in/leonardo-numbela-63942254" target="blank">
                            <FontAwesomeIcon className="i" icon={faLinkedin} /> 
                        </Link>
                        <Link to="https://www.instagram.com/leonumbela/" target="blank">
                            <FontAwesomeIcon className="i" icon={faInstagram}/>
                        </Link>
                    </div>
                    <div className="createName">
                        <span>Create by <Link to="/">LeoN.</Link></span>
                    </div>
                    <div className="copyFrase">
                        <span><FontAwesomeIcon icon={faCopyright} /> 2022 All right reserved.</span>
                    </div>
                    </div>

                </div>
            </div>
        </footer > 
    )
}
