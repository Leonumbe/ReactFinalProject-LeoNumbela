//Damos acceso a context
import React, {useContext, useState} from "react";
import { cartContext } from "../../context/cartContext";
import CheckOutForm from "../userForm/checkOutForm";
import Table from 'react-bootstrap/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons' ;
import { Link } from "react-router-dom";
import Button from "../button/button";
import  "./main.css";
//MODAL
import button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export default function CartView(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {cart, RemoveItem, Clear, TotalPrice, Badge} = useContext(cartContext)
    return(
        <section className="title">
        <div className="max-width ">
        {
            (cart.length == 0)
            ?
            <>
                <div className="emptyCartContent">
                <img src="https://i.ibb.co/fqDvSdf/Empty-Cart.png" alt="Empty-Cart" border="0" />
                    <h1 className="title">Your Cart is Empty!!!!</h1>
                    <h3 className="textAdapt">Look like you have not added anything to your Cart</h3>
                    <h3 className="textAdapt">Go ahead & explore our Categories</h3>
                    <Link to="/"  >
                        <Button className={"btnBack"} text={"Back to Home"}></Button>
                    </Link>
                </div>
            </>
            :
            <>
            <h1 className="title">Your Cart: {Badge()} product/s</h1>
            <Table striped="columns">
                <thead>
                    <tr>
                        <th>Nro</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
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
                              <td>{cart.indexOf(items)+1}</td>
                              <td>
                                <img src={items.image} className="img-fluid mx-auto d-block width-100px" alt="Sneaker"/>
                              </td>
                              <td>{items.name}</td>
                              <td>u$s{items.price}.-</td>
                              <td>{items.count}</td>
                              <td><Link to={"#"} className="text-dark" onClick={()=>RemoveItem(items.id)}>
                                <FontAwesomeIcon className="i" icon={faTrash} />
                              </Link>
                              </td>
                            </tr>
                          </tbody>
                          </>
                        );
                    })
                }
            </Table>


            <ul className="list-unstyled mb-1">
                        <li className="d-flex justify-content-start py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>:  $ {TotalPrice()}</strong></li>
                        <li className="d-flex justify-content-start py-3 border-bottom"><strong className="text-muted">Ship&Hand</strong><strong>: Free</strong></li>
                        <li className="d-flex justify-content-start py-3 border-bottom"><strong className="text-muted">Total </strong>
                            <h3 className="fw-bold">: ${TotalPrice()}</h3>
                        </li>
            </ul>


            <Link to="/cart" className="text-dark" onClick={()=>{Clear()}}>
                <FontAwesomeIcon className="i" icon={faTrash} />
                Empty Cart
            </Link>
            
            <button onClick={handleShow} className={"btnBack"} text={"Procceed to checkout"}>
            Procceed to checkout
            </button>
           
            <Modal show={show} onHide={handleClose} size="md">
            <Modal.Header closeButton>
            <Modal.Title>Procceed to checkout</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    autoFocus
                />
                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group> */}
            <CheckOutForm />
            </Modal.Body>
            <Modal.Footer>
            <button variant="secondary" onClick={handleClose} className={"btnBack"}>
                Close
            </button>
            
            </Modal.Footer>
        </Modal>
        

            </>
        }
        </div>
        </section>
    )
}


