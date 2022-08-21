import "./main.css"
import {FontAwesomeIcon} from"@fortawesome/react-fontawesome";
import {faShoppingCart} from"@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import React, {useContext, useState} from "react";
import { cartContext } from "../../../context/cartContext";



function CartWidget() {
    const {cart, Badge} = useContext(cartContext)
    return(
        <div className="cart">
            <Link to="/cart"><FontAwesomeIcon className="cartSet" icon={faShoppingCart}/></Link>
        {(cart == 0)? false : <span>{Badge()}</span>}
        </div>
    )
}

export default CartWidget;