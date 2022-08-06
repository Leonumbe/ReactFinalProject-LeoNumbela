import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import "./main.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ItemCount = ({minStock, maxStock}) => {

    const [count, setClicks] = React.useState(minStock);

    const clickIncrease = () => {
       return (count < maxStock)? setClicks(count + 1): false;
    }
    const clickDecrease = () => {
        return (count > minStock)? setClicks(count - 1): false;
    }
    const addCart = () => {
        toast.success('Great! You added '+ count +' unit/s', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    return(  
        <div className="">
            <div className="counterSelector">
                <h1 onClick={clickDecrease} className="btnCounterA " type="button">-</h1>
                    <h1>{count}</h1>
                <h1 onClick={clickIncrease} className="btnCounterB" type="button">+</h1>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-center" >
                <button onClick={addCart}  className="btnAdd">Add Cart</button> 
            </div>
        </div>
    );
}

export default ItemCount;