//Damos acceso a context
import React, {useContext} from "react";
import { cartContext } from "../../context/cartContext";
import UserForm from "../UserForm";
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons' ;


export default function CartView(){
    const {cart, RemoveItem, Clear} = useContext(cartContext)
    // console.log(cart)
 
    
    return(
        <section className="title">
        <div className="max-width ">
            <h1 className="title">End your Purchase</h1>
            <Table striped="columns">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                { cart.map((items)=>{
                        return(
                            <>
                            {/* rating={items.rating}
                            category={items.category}
                            description={items.description}
                            stock={items.stock} */}
                          <tbody key={items.id}>
                            <tr>
                              <td>{items.id}</td>
                              <td>
                                <img src={items.image} className="img-fluid mx-auto d-block width-100px" alt="Sneaker"/>
                              </td>
                              <td>{items.name}</td>
                              <td>{items.price}</td>
                              <td>{items.quantity}</td>
                              <td><a href="#" className="text-dark" onClick={()=>{RemoveItem()}}>
                              <FontAwesomeIcon className="i" icon={faTrash} />
                              </a></td>
                            </tr>
                            
                            <tr>
                            <td>
                            </td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                          </>
                      );
                    }
                   
                )
            }
            </Table>
            <a href="#" className="text-dark" onClick={()=>{Clear()}}>
                            <FontAwesomeIcon className="i" icon={faTrash} />
                                </a>
     
        </div>
    </section>
    )

}