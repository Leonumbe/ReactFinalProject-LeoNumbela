import React from "react";
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
        <div className="max-width">
            <div className="d-grid gap-2 d-sm-flex justify-content-st-center">
                <button onClick={clickDecrease} className="btn btn-secondary btn-sm " type="button">-</button>
                    <h1>{count}</h1>
                <button onClick={clickIncrease} className="btn btn-secondary btn-sm" type="button">+</button>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-st-center btn-sm mt-2" >
                <button onClick={addCart} type="button" className="btn btn-outline-dark">Add Cart</button> 
            </div>
        </div>
    );
}

export default ItemCount;