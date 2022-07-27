import "./main.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' // <-- import styles to be used
import { faInstagram } from '@fortawesome/free-brands-svg-icons' // <-- import styles to be used



function Footer(){
    return(
        <footer>
            <span>Create by <a href="#">LeoN.</a> | <span className="far fa-copyright"></span> 2022 All right reserved.</span>
            <div className="social">
                <a href="http://www.linkedin.com/in/leonardo-numbela-63942254" target="_blank">
                    <FontAwesomeIcon className="i" icon={faLinkedin} /> 
                </a>
                <a href="https://www.instagram.com/leonumbela/" target="_blank">
                    <FontAwesomeIcon className="i" icon={faInstagram}/>
                </a>
            </div>
            


        </footer > 
    )
}

export default Footer;