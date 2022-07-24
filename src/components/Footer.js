import "./Footer.css";

function Footer(){
    return(
        <footer>
            <span>Create by <a href="#">LeoN.</a> | <span className="far fa-copyright"></span> 2022 All right reserved.</span>
            <div className="social">
                <a href="http://www.linkedin.com/in/leonardo-numbela-63942254" target="_blank">
                    <i className="fa-brands fa-linkedin"></i> 
                </a>
                <a href="https://www.instagram.com/leonumbela/" target="_blank">
                <i className="fa-brands fa-instagram"></i>
                </a>
            </div>
        </footer > 
    )
}

export default Footer;