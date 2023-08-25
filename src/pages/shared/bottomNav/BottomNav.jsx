import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import './BottomNav.css';
import { FaSearch, FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const BottomNav = () => {
    const { user, logOut } = useContext(AuthContext);
    // const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        // <nav className="navbar navbar-expand-lg bg-black sticky-top">
        //     <div className="container-fluid">
        //         {/* logo left side */}
        //         <Link to='/' className="navbar-brand"><img src={logo} alt="logo" className='logo' /></Link>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
        //             {/* Left side menu items */}
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold text-white">
        //                 <li className="nav-item">
        //                     <Link to='/' className="nav-link text-white active" aria-current="page" ><Link to='/home' className='text-white'>Home</Link></Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/' className="nav-link text-white active" aria-current="page" href="#">US</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/' className="nav-link text-white" href="#">World</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/' className="nav-link text-white " aria-disabled="true">Politics</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/' className="nav-link text-white" aria-disabled="true">Business</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/' className="nav-link text-white" aria-disabled="true">Opinions</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/' className="nav-link text-white " aria-disabled="true">Health</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/' className="nav-link text-white" aria-disabled="true">Entertainment</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/' className="nav-link text-white" aria-disabled="true">Style</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/travel' className="nav-link text-white" aria-disabled="true">Travel</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/sports' className="nav-link text-white" aria-disabled="true">Sports</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/video' className="nav-link text-white" aria-disabled="true">Video</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/' className="nav-link text-white" aria-disabled="true">Research</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/' className="nav-link text-white" aria-disabled="true">Education</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link to='/' className="nav-link text-white" aria-disabled="true">Foods</Link>
        //                 </li>
        //             </ul>
        //             {/* Right nav bar */}
        //             <div>
        //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                     <li className="nav-item">
        //                     <Link to='/' className="nav-link active text-white" aria-current="page" href="#">Audio</Link> 
        //                     </li>
        //                     <li className="nav-item">
        //                     <Link to='/' className="nav-link active text-white" aria-current="page" href="#">Live TV</Link> 
        //                     </li>
        //                     <li className="nav-item">
        //                     <Link to='/' className="nav-link active text-white" aria-current="page" href="#"><FaSearch/></Link> 
        //                     </li>
        //                     <li className="nav-item">
        //                     <Link to='/' className="nav-link active text-white" aria-current="page">{user ? <Button onClick={handleLogOut} variant="warning" size="sm" style={{padding:'5px 10px'}}>Logout</Button>:<Link to='/login' className='text-white'><FaUserCircle/></Link>}</Link> 
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </nav>

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BottomNav;