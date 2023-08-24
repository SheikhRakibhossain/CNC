import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [checked, setChecked] = useState(false)
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, password, email, photo)
        createUser(email, password)
        .then(result=>{
            const createdUser = result.user;
            console.log(createdUser)
        })
        .catch(error=>{
            console.log(error)
        })

    }
    const handleTerms = event =>{
        const checked= event.target.checked;
        setChecked(checked)
        
    }
    return (
        <>
            <Container className='w-50 mx-auto '>
                <Form onSubmit={handleRegister} >
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control
                                required
                                name="name"
                                type="text"
                                placeholder="Write your name"
                                defaultValue="Rakib"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="12" >
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control
                                required
                                name="photoURL"
                                type="text"
                                placeholder="Photo Link"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
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
                    
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            onClick={handleTerms}
                            name="terms"
                            label="Agree to our terms and conditions !"
                            feedback="You must agree before submitting."
                            feedbackType="invalid"
                        />
                    </Form.Group>
                    <Button type="submit" disabled={!checked} className='btn btn-warning border-none btn-sm'>Submit</Button>
                </Form>
            </Container>
        </>
    );
};

export default Register;