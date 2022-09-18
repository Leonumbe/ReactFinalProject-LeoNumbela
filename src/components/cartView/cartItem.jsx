import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons' ;
import React from 'react';
import  "./main.css";

export default function CartItem({key,id,image,name,price,stock,count, Indice, RemoveItem}){
    return(
        <div class="cartItemContent" >
            <div className="CartItemImage">
                <img className="cartItemImage"  src={image}  alt="ss"/>
            </div>
            <div className="cardItemBody">
                <p className="cardItemText">Nro: {Indice}</p>
                <p className="cardItemText">Name: {name}</p>
                <p className="cardItemText">Price: u$s{price}.-</p>
                <p className="cardItemText">Quantity:{count}</p>
                <p className="cardItemText">Subtotal: u$s {count * price}.-</p>
                <button  className="btnRemove" onClick={()=>RemoveItem(id)}>
                    <FontAwesomeIcon className="i" icon={faTrash} />
                </button>
            </div>
        </div>
    )
}

