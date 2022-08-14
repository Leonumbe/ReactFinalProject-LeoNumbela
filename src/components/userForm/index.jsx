import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function UserForm(){

    return(
    <>
     <section className="title" id="Home">
        <div className="max-width ">
            <Form>

            <Form.Group  controlId="form">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Warren" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridSurname">
                <Form.Label>Surname</Form.Label>
                <Form.Control type="text" placeholder="Buffet" />
            </Form.Group>

            <Form.Group  controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                </Form.Group>
            </Row>
        
            <Form.Label>Choose a topic</Form.Label>
            <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">Buy</option>
            <option value="2">Deliver</option>
            <option value="3">Refund</option>
            <option value="3">Other</option>
            </Form.Select>


            <Form.Label htmlFor="textarea">Write us</Form.Label>
            <Form.Control
                type="password"
                id="inputPassword5"
                aria-describedby="passwordHelpBlock"
                />
            
                <Button className="btnBack" type="submit">
                    Submit
                </Button>

                <Button className="btnBack" type="reset">
                    Reset
                </Button>
            </Form>

        </div>
    </section>
    </>
    );
}