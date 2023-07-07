import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

export const Login = () => {
    return (
        <Container>
            <br></br>
            <h3 >Login</h3>
            <div className='row'>
                <div className='col-lg-6'>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Mobile number" />
                        </Form.Group>
                    </Form>
                    <Button variant="primary">Save</Button>
                </div>
            </div>

        </Container>
    );
}