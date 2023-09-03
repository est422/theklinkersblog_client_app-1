function FooterComponent () {

    return(
        <>
        <footer id="footer">
            <div className="footer-newsletter">
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
            </div>

            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                            <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                            A108 Adam Street <br />
                            New York, NY 535022<br />
                            United States <br /><br />
                            <strong>Phone:</strong> +1 5589 55488 55<br />
                            <strong>Email:</strong> info@example.com<br />
                            </p>

                        </div>

                        <div className="col-lg-3 col-md-6 footer-info">
                            <h3>About Us</h3>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                            <div className="social-links mt-3">
                            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                            <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                </div>
                </div>
            </div>

                <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>Lorem</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                    All the links in the footer should remain intact. 
                    You can delete the links only if you purchased the pro version. 
                    Licensing information: https://bootstrapmade.com/license/ 
                    Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/eterna-free-multipurpose-bootstrap-template/ 
                    Designed by <a href="https://bootstrapmade.com/">Lorem ipsum dolor sit</a> 
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