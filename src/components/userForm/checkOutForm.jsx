import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState, useContext } from "react";
import { cartContext } from "../../context/cartContext";
//Import to firebase
import firestoreDB from "../../services/firebase";
import { addDoc, collection, } from "firebase/firestore";


//styles
const contButtons={
    display: "flex",
    justifyContent: "space-between"
}

export default function CheckOutForm(){

    const [userData, setUserData]= useState({
        Name:"", Surname:"", Email:"", Phone:""
    });

    const {cart, Clear,  TotalPrice} = useContext(cartContext)

    const [purchaseSucess, setPurchaseSucess] = useState(false)

    const purchaseTicket = {
        buyer: {...userData},
        items:[...cart],
        total: TotalPrice(),
        date: new Date()
    }

    async function  handleSubmit(event){
         event.preventDefault();
         console.log(purchaseTicket);
         setUserData({Name:"", Surname:"", Email:"", Phone:"",});

    const collectionRef = collection(firestoreDB, "purchaseOrders") ;
    const docRef = await  addDoc(collectionRef, purchaseTicket);
    setPurchaseSucess(docRef.id)
    console.log(purchaseSucess)
}

    function handleReset(e){
        e.preventDefault();
        setUserData({Name:"", Surname:"", Email:"", Phone:"",
        });
    }

    function handleOnChange(evt){
        const inputOnchange = evt.target

        const value= inputOnchange.value;
        const inputName = inputOnchange.name 
 
        let copyUserData= {...userData}
        copyUserData[inputName] = value;
        setUserData(copyUserData);
    }
    if(purchaseSucess){
        return(
            <>
            <h1 className="display-3">Thank You!</h1> 
            <p>Your purchase was successfully processed</p>
            <p>Your code: {purchaseSucess}</p>
            <p className="lead"><strong>Please check your email</strong> for further instructions on how to complete your shopping</p>
            
            <button onClick={()=>{Clear()}} className={"btnAdd"} >
            Confirn
            </button>
            </>
        )
    }
    return(
        <>
            <Form onSubmit={handleSubmit} onReset={handleReset}>
                <Form.Group >
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={handleOnChange} name="Name" value={userData.id} type="text" placeholder="Warren" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label >Surname</Form.Label>
                    <Form.Control onChange={handleOnChange} name="Surname" value={userData.Surname} type="text" placeholder="Buffet" />
                </Form.Group>
                <Form.Group >
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={handleOnChange} name="Email" value={userData.Email} type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Cellphone</Form.Label>
                    <Form.Control onChange={handleOnChange} name="Phone" value={userData.Phone}  placeholder="112334455" />
                </Form.Group>
                
                <div style={contButtons} >

                <Button className="btnBack" type="reset">
                    Reset
                </Button>
                <Button className="btnAddB" type="submit">
                    Submit
                </Button>
                </div>

            </Form>
        </>
    );
}



