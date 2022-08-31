import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from "react";


const form={
    padding: "2rem",
}
const contButtons={
    display: "flex",
    justifyContent: "space-between"
}

export default function CheckOutForm(){

    const [userData, setUserData]= useState({
        name:"", Surname:"", Email:"", Cellphone:""
    });

    function handleSubmit(event){
         event.preventDefault();
         console.log(userData);
         setUserData({name:"", Surname:"", Email:"", Cellphone:""});
    }
    function handleReset(e){
        e.preventDefault();
        setUserData({name:"", Surname:"", Email:"",Cellphone:"",
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
    return(
        <>
            <Form onSubmit={handleSubmit} onReset={handleReset} style={form}>
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
                    <Form.Control onChange={handleOnChange} name="Cellphone" value={userData.Cellphone}  placeholder="4343434343" />
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



