import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import './BottomNav.css';
import { FaSearch, FaUser } from 'react-icons/fa';

const BottomNav = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-black">
            <div class="container-fluid">
                {/* logo left side */}
                <Link class="navbar-brand" href="#"><img src={logo} alt="logo" className='logo' /></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
                    {/* Left side menu items */}
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold text-white">
                        <li class="nav-item">
                            <a class="nav-link text-white active" aria-current="page" href="#">US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">World</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white " aria-disabled="true">Politics</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-disabled="true">Business</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-disabled="true">Opinions</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white " aria-disabled="true">Health</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-disabled="true">Entertainment</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-disabled="true">Style</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-disabled="true">Travel</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-disabled="true">Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-disabled="true">Video</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-disabled="true">Research</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-disabled="true">Education</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" aria-disabled="true">Foods</a>
                        </li>
                    </ul>
                    {/* Right nav bar */}
                    <div>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#">Audio</a> 
                            </li>
                            <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#">Live TV</a> 
                            </li>
                            <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#"><FaSearch/></a> 
                            </li>
                            <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#"><FaUser/></a> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default BottomNav;