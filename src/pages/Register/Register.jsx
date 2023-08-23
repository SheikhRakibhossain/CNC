import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Register = () => {
    return (
        <>
            <Container className='w-50 mx-auto '>
                <Form >
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Write your name"
                                defaultValue="Rakib"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Photo Link"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Write your email"
                                defaultValue="Rakib212@gmail.com"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Write your password"
                                defaultValue="@#aH!#12!_)()"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label="Agree to our terms and conditions !"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit" className='btn btn-warning border-none btn-sm'>Submit</Button>
                </Form>
            </Container>
        </>
    );
};

export default Register;