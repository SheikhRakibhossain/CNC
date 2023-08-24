import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const {logIn} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
        .then(res =>{
            const loggedUser = res.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error)
        })
        navigate('/')


    }
    return (
      <>
       <Container className='w-50 mx-auto '>
        <h2>Login Please !</h2>
                <Form onSubmit={handleLogin}>
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