import "./main.css"
import {FontAwesomeIcon} from"@fortawesome/react-fontawesome";
import {faShoppingCart} from"@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CartWidget() {
    return(
        <div className="cart">
            <Link to="/"><FontAwesomeIcon className="cartSet" icon={faShoppingCart}/></Link>
        </div>
    )
}

export default CartWidget;