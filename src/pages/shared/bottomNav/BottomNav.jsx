import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import './BottomNav.css';
import { FaSearch, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';

const BottomNav = () => {
    const {user} = useContext(AuthContext)
    return (
        <nav className="navbar navbar-expand-lg bg-black sticky-top">
            <div className="container-fluid">
                {/* logo left side */}
                <Link className="navbar-brand" href="#"><img src={logo} alt="logo" className='logo' /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
                    {/* Left side menu items */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold text-white">
                        <li className="nav-item">
                            <a className="nav-link text-white active" aria-current="page" href="#"><Link to='/home'>Home</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white active" aria-current="page" href="#">US</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">World</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white " aria-disabled="true">Politics</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-disabled="true">Business</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-disabled="true">Opinions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white " aria-disabled="true">Health</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-disabled="true">Entertainment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-disabled="true">Style</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-disabled="true">Travel</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-disabled="true">Sports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-disabled="true">Video</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-disabled="true">Research</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-disabled="true">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" aria-disabled="true">Foods</a>
                        </li>
                    </ul>
                    {/* Right nav bar */}
                    <div>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Audio</a> 
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">Live TV</a> 
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#"><FaSearch/></a> 
                            </li>
                            <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="#">{user ? <Link to='' className='text-white'>Logout</Link>:<FaUser/>}</a> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default BottomNav;