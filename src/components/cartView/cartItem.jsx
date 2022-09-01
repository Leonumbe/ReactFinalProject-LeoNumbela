import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons' ;
import React from 'react';
import  "./main.css";

const mW={
    maxWidth: "540px",

  }



export default function CartItem({key,id,image,name,price,stock,count, Indice, RemoveItem}){





    return(
        <div>
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
                            <button  className="cartItemRemove" onClick={()=>RemoveItem(id)}>
                                <FontAwesomeIcon className="i" icon={faTrash} />
                            </button>
                        </div>
            </div>
       
        </div>
    )
}

// return(
//     <tr>
//         <td>{Indice}</td>
//         <td>
//             <img src={image} className="img-fluid mx-auto d-block width-100px" alt="Sneaker"/>
//         </td>
//         <td>{name}</td>
//         <td>u$s{price}.-</td>
//         <td>{count}</td>
//         <td>
//             <Link to={"#"} className="text-dark" onClick={()=>RemoveItem(id)}>
//                 <FontAwesomeIcon className="i" icon={faTrash} />
//             </Link>
//         </td>
//     </tr>
// )