import "./main.css";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram  } from '@fortawesome/free-brands-svg-icons' ;
import { faCopyright } from '@fortawesome/free-solid-svg-icons' ;


export default function Footer(){
    return(
        <footer>
            <span>Create by <Link to="/">LeoN.</Link> | <span><FontAwesomeIcon icon={faCopyright} /></span> 2022 All right reserved.</span>
            <div className="social">
                <Link to="http://www.linkedin.com/in/leonardo-numbela-63942254" target="blank">
                    <FontAwesomeIcon className="i" icon={faLinkedin} /> 
                </Link>
                <Link to="https://www.instagram.com/leonumbela/" target="blank">
                    <FontAwesomeIcon className="i" icon={faInstagram}/>
                </Link>
            </div>
        </footer > 
    )
}
