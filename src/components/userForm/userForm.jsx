import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from "react";


const form={
    padding: "2rem",
}




export default function UserForm(){

    const [userData, setUserData]= useState({
        name:"", Surname:"", Email:"", Address:"", City:"", State:"", ZipCode:"", Topic:"", Text:""
    });

    function handleSubmit(event){
         event.preventDefault();
         console.log(userData);
         setUserData({name:"", Surname:"", Email:"", Address:"",
         City:"", State:"", ZipCode:"", Topic:"", Text:""});
    }
    function handleReset(e){
        e.preventDefault();
        setUserData({name:"", Surname:"", Email:"", Address:"",
                 City:"", State:"", ZipCode:"", Topic:"", Text:""
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
    <div >
     <section className="title" id="Home">
     <div className="max-width ">
            <h1 className="title">Write Us</h1>
            <h3 className="subtitle mb-3">We want to know about you, write us ....</h3>
        
            <Form onSubmit={handleSubmit} onReset={handleReset} style={form}>
            <Row className="mb-2">
                <Form.Group as={Col} >
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={handleOnChange} name="Name" value={userData.id} type="text" placeholder="Warren" />
                </Form.Group>
                <Form.Group as={Col} >
                    <Form.Label >Surname</Form.Label>
                    <Form.Control onChange={handleOnChange} name="Surname" value={userData.Surname} type="text" placeholder="Buffet" />
                </Form.Group>
            </Row>
            <Row className="mb-2">
                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={handleOnChange} name="Email" value={userData.Email} type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group as={Col}     >
                    <Form.Label>Address</Form.Label>
                    <Form.Control onChange={handleOnChange} name="Address" value={userData.Addres}  placeholder="1234 Main St" />
                </Form.Group>
            </Row>

                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>City</Form.Label>
                        <Form.Control onChange={handleOnChange}  name="City" value={userData.City}/>
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label>State</Form.Label>
                        <Form.Control onChange={handleOnChange} name="State" value={userData.State}/>
                    </Form.Group>

                    <Form.Group as={Col} >
                        <Form.Label >Zip</Form.Label>
                        <Form.Control onChange={handleOnChange} name="ZipCode" value={userData.ZipCode}/>
                    </Form.Group>
                </Row>
            
                <Form.Group className="mb-3">
                <Form.Label>Choose a topic</Form.Label>
                <Form.Select onChange={handleOnChange} name="Topic" value={userData.Topic} aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="Buy">Buy</option>
                <option value="Deliver">Deliver</option>
                <option value="Refound">Refund</option>
                <option value="Other">Other</option>
                </Form.Select>
                </Form.Group>

                <Form.Group>
                <Form.Label>Write us</Form.Label>
                <Form.Control
                    type="textarea" onChange={handleOnChange}  name="Text" value={userData.Surname}
                    />
                </Form.Group>
                <Button className="btnBack" type="submit">
                    Submit
                </Button>

                <Button className="btnBack" type="reset">
                    Reset
                </Button>
            </Form>
        </div>
    </section>
    </div>
    );
}