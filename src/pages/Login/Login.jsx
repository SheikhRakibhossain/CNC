import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Login = () => {
    return (
      <>
       <Container className='w-50 mx-auto '>
        <h2>Login Please !</h2>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                name="email"
                                type="email"
                                placeholder="Write your email"
                                defaultValue="Rakib212@gmail.com"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                name="password"
                                type="password"
                                placeholder="Write your password"
                                defaultValue="@#aH!#12!_)()"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit" className='btn btn-warning border-none btn-sm'>Submit</Button>
                </Form>
            </Container>
      </>
    );
};

export default Login;