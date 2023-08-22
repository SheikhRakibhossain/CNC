import React from 'react';
import './Footer.css'
import { FaClock, FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMap, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 about-footer">
                            <h3> Find On Us  </h3>
                            <ul>
                                <li><a href="tel:(+88)01637503636" ><FaPhone/><span className='ps-2'>(+88) 01637503636</span></a></li>
                                <li>
                                    <span className='pe-2'><FaMap/></span> 1 / 105 Bay Lights,
                                    <br />Manikganj,Dhaka
                                    <br />Uttara, 1201/c-Block
                                </li>
                            </ul>
                            <a href="" className="btn red-btn">Contact Now</a>
                        </div>
                        <div className="col-md-6 col-lg-2 page-more-info">
                            <div className="footer-title">
                                <h4>Main Page links</h4>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Testimonial</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div className="col-md-6 col-lg-3 page-more-info">
                            <div className="footer-title">
                                <h4>More Info</h4>
                            </div>
                            <ul>
                                <li><a href="#">Terms and Condition</a></li>
                                <li><a href="#">Membership Policy</a></li>
                                <li><a href="#">My Dashboard </a></li>
                                <li><a href="#">Our News Forum</a></li>
                                <li><a href="#">Our Team Members</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 open-hours">
                            <div className="footer-title">
                                <h4>Open hours</h4>
                                {/* <ul className="footer-social">
                                    <li><a href="" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>

                                </ul> */}
                            </div>
                            <table className="table">
                                <tbody>
                                    <tr scope="row">
                                        <td>Monday Thursday</td>
                                        <td>9:00am - 5:00pm</td>
                                    </tr>
                                    <tr scope="row">
                                        <td>Friday</td>
                                        <td>9:00am - 4:00pm</td>
                                    </tr>
                                    <tr scope="row">
                                        <td>Saturday</td>
                                        <td>9:00am - 1:30pm</td>
                                    </tr>
                                    <tr scope="row">
                                        <td>Sunday</td>
                                        <td>9:30am - 12:00pm</td>
                                    </tr>
                                </tbody>
                            </table>
                            <hr/>
                                <div className="footer-logo">

                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className='fs-1 ml-2'><FaFacebook/></td>
                                                <td className='fs-1 ms-4'><FaTwitter/></td>
                                                <td className='fs-1'><FaLinkedin/></td>
                                                <td className='fs-1'><FaYoutube/></td>
                                                <td className='fs-1'><FaInstagram/></td>
                                                </tr>
                                        </tbody>
                                    </table>
                                </div>
                        </div>
                    </div>
                </div>
                <hr/>
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-sm-4">
                                <a href="https://www.upwork.com/freelancers/mdrakibh10">Developed By <strong className='text-warning fst-italic text-decoration-underline'>Rakib.io</strong></a>
                            </div>
                            <div className="col-sm-8">
                                <p>React.Js & Next.js Developer &copy; 2018-2024 All rights reserved</p>
                            </div>
                        </div>
                    </div>
            </div>
        </footer>
    );
};

export default Footer;