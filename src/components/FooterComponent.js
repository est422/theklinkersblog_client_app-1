import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom"
import { authSlice, userLogout } from '../slices/authSlice'


function FooterComponent () {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.authSlice.loggedIn)

    const handleLogout = (event) => {
        event.preventDefault()
        dispatch(userLogout())

    }

    return(
        <>
        <footer id="footer">
            {/* <div className="footer-newsletter">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-6">
                        <h4>Our Newsletter</h4>
                        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    </div>
                    <div className="col-lg-6">
                        <form action="" method="post">
                        <input type="email" name="email" /><input type="submit" value="Subscribe" />
                        </form>
                    </div>
                    </div>
                </div>
            </div> */}

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <Link to={"/about"}>About Us</Link></li>
                            <li><i className="bx bx-chevron-right"></i> <Link to={"/products"}>Products</Link></li>
                            <li><i className="bx bx-chevron-right"></i> <Link to={"/contact"}>Contact Us</Link></li>
                            { !isLoggedIn ? <li><i className="bx bx-chevron-right"></i> <Link to={"/login"}>Login</Link></li> : <li><i className="bx bx-chevron-right"></i> <a onClick={handleLogout}>Logout</a></li>}
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-contact">
                            <h4>Our Address</h4>
                            <p>
                            Infront of Sahelete Meheret Square, Drar Mall 9th Floor, Addis Ababa, Ethiopia <br /><br />
                            <strong>Phone:</strong> +251 116 61 0160<br />
                            <strong>Email:</strong> sales@theklinkers.et<br />
                            </p>

                        </div>

                        <div className="col-lg-4 col-md-6 footer-info">
                            <h4>About Us</h4>
                            <p>Our mother company EKT Trade and investment is one of the pioneers in import & export business in Ethiopia.</p>
                            <div className="social-links mt-3">
                            <a href="#" className="youtube"><i className="bx bxl-youtube"></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                </div>
                </div>
            </div>

                <div className="container">
                <div className="copyright text-center">
                    <strong><span>Design By</span></strong> Dawit Bahre
                </div>
                </div>
        </footer>

        {/* <footer className="site-footer">
        <div className="upper-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col col-lg-3 col-md-3 col-sm-6">
                                <div className="widget about-widget">
                                    <div className="logo widget-title">
                                        <img src="assets/images/Logo-01.png" />
                                    </div>
                                    
                                    <div className="social-icons">
                                        <ul>
                                            <li><a href="#"><i className="ti-facebook"></i></a></li>
                                           
                                            <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                            <li><a href="#"><i className="ti-youtube"></i></a></li>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                             <div className="col col-lg-3 col-md-3 col-sm-6">
                                <div className="widget newsletter-widget">
                                     <div className="widget-title">
                                        <h3>Usefull Links</h3>
                                    </div>
                                    <p>Our mother company EKT Trade and investment is one of the pioneers in import &amp; export business in Ethiopia.</p>
                                   
                                </div>
                            </div>
                            <div className="col col-lg-3 col-md-3 col-sm-6">
                                <div className="widget link-widget">
                                    <div className="widget-title">
                                        <h3>Usefull Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="about.html">About us</a></li>
                                        <li><a href="products.html">Products</a></li>
                                        <li><a href="projects.html">Projects</a></li>
                                        <li><a href="contact.html">Contact us</a></li>
                                        
                                    </ul>
                                   
                                </div>
                            </div>
                            
                            <div className="col col-lg-3 col-md-3 col-sm-6">
                                <div className="widget contact-widget service-link-widget">
                                    <div className="widget-title">
                                        <h3>Our Address</h3>
                                    </div>
                                    <ul>
                                        <li>Infront of Sahelete Meheret Square, Drar Mall 9th Floor, Addis Ababa, Ethiopia
                                            </li>
                                        <li><span>Phone:</span> +251 116 61 0160</li>
                                        <li><span>Email:</span> sales@theklinkers.et</li>
                                        
                                    </ul>
                                </div>
                            </div>
                           
                        </div>
                    </div> 
                </div>
                <div className="lower-footer">
                    <div className="container">
                        <div className="row">
                            <div className="separator"></div>
                            <div className="col col-xs-12">
                                <p className="copyright"><a href="dawitbahre.net">Design By Dawit Bahre</a></p>
                                <div className="extra-link">
                                    <ul>
                                        <li><a href="dawitbahre.net">Design By Dawit Bahre</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </footer> */}
        </>
    )
}

export default FooterComponent;