import "./main.css"

import Button from "../button/index";
import React, { useState } from "react";



export default function ItemCount(props) {

    const [count, setClicks] = useState(props.minStock);

    const handleIncrease = () => {
       return (count < props.Stock)? setClicks(count + 1): false;
    }
    const handleDecrease = () => {
        return (count > props.minStock)? setClicks(count - 1): false;
    }
   

    return(  
        <div className="counterCont">
            <div className="counterSelector">
                <h1 onClick={handleDecrease} className="btnCounterA " type="button">-</h1>
                    <h1>{count}</h1>
                <h1 onClick={handleIncrease} className="btnCounterB" type="button">+</h1>
            </div>
            <div className="counterBtn" >
                <Button onTouch={()=> props.onAddCart(count)} className="btnAdd" text1='Add Cart'/> 
            </div>
        </div>
    );
}
