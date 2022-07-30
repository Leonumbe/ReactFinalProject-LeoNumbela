import "./main.css";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' ;
import { faCopyright } from '@fortawesome/free-solid-svg-icons' ;
import { faInstagram } from '@fortawesome/free-brands-svg-icons';



function Footer(){
    return(
        <footer>
            <span>Create by <Link to="/">LeoN.</Link> | <span><FontAwesomeIcon icon={faCopyright} /></span> 2022 All right reserved.</span>
            <div className="social">
                <a href="http://www.linkedin.com/in/leonardo-numbela-63942254" target="blank">
                    <FontAwesomeIcon className="i" icon={faLinkedin} /> 
                </a>
                <a href="https://www.instagram.com/leonumbela/" target="blank">
                    <FontAwesomeIcon className="i" icon={faInstagram}/>
                </a>
            </div>
        </footer > 
    )
}

export default Footer;