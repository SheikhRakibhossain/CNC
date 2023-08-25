import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import './BottomNav.css';
import {FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const BottomNav = () => {
    const { user, logOut } = useContext(AuthContext);
    // const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Navbar expand="lg" className="bg-black">
            <Container fluid>
                <Navbar.Brand href="/"><img src={logo} alt="logo" className='logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 text-white  fs-6"
                        style={{ maxHeight:'200px'}}
                        navbarScroll
                    >
                       <Link to='/'className='text-white p-1'>Home</Link>
                       <Link to='/us'className='text-white p-1'>US</Link>
                       <Link to='/world'className='text-white p-1'>World</Link>
                       <Link to='/politics'className='text-white p-1'>Politics</Link>
                       <Link to='/business'className='text-white p-1'>Business</Link>
                       <Link to='/opinion'className='text-white p-1'>Opinion</Link>
                       <Link to='/health'className='text-white p-1'>Health</Link>
                       <Link to='/entertainment' className='text-white p-1'>Entertainment</Link>
                       <Link to='/style'className='text-white p-1'>Style</Link>
                       <Link to='/travel'className='text-white p-1'>Travel</Link>
                       <Link to='/sports'className='text-white p-1'>Sports</Link>
                       <Link to='/video'className='text-white p-1'>Video</Link>
                       
                    </Nav>
                    <div className="d-flex">
                    <Link to='/audio'className='text-white p-1'>Audio</Link>
                    <Link to='/livetv' className='text-white p-1'>Live TV </Link>

                        {user ? <Button onClick={handleLogOut} variant="warning" style={{padding:'5px 10px'}}>Logout</Button>:<Link to='/login' className='text-white ps-1'> <FaUserCircle/> </Link>}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BottomNav;