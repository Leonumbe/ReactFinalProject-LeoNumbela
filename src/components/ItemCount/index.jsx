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
        toast.success('Great! You add '+count+' unit/s', {
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
            <div>
                <button onClick={clickDecrease}>-</button>
                <h1>{count}</h1>
                <button onClick={clickIncrease}>+</button>
            </div>
            <div>
                <button onClick={addCart}>AddCart</button>
            </div>
        </div>
    );
}

export default ItemCount;