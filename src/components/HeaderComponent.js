function HeaderComponent () {

    return(
        
        <header id="header" className="site-header header-style-2">
                <div className="topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col col-sm-3">
                                <div className="social-icons">
                                    <ul>
                                        <li><a href="#"><i className="ti-facebook"></i></a></li>
                                       
                                        <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                       
                                        <li><a href="#"><i className="ti-youtube"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col col-sm-9">
                                <div className="contact-info">
                                    <ul>
                                        <li><i className="ti-email"></i> info@theklinkers.et</li>
                                       
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navigation navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="open-btn">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html"><img src="assets/images/logo-2.png" /></a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse navigation-holder">
                            <button className="close-navbar"><i className="ti-close"></i></button>
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="index.html">Home</a> </li>
                                <li><a href="about.html">About Us</a></li>
                                
                                <li className="active menu-item-has-children">
                                    <a href="products.html">Products</a>
                                    <ul className="sub-menu">
                                        <li><a href="PPR-Pipe.html">PPR PIPE &amp; FITTING</a></li>
                                        <li><a href="sanitary-ware.html">SANITARY WARE</a></li>
                                        <li className="menu-item-has-children"><a href="Construction-chemical.html">CONSTRUCTION CHEMICAL</a>
                                            <ul className="sub-menu">
                                                <li><a href="water-proofing.html">Water Proofing</a></li>
                                                <li><a href="refurbishment.html">Refurbishment</a></li>
                                                <li><a href="roofing.html">Roofing</a></li>
                                                <li><a href="sealing and bonding.html">Sealing and Bonding</a></li>
                                                <li><a href="concrete.html">Concrete</a></li>
                                                <li><a href="flooring.html">Flooring</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="paint.html">PAINT</a></li>
                                        <li><a href="door-locks.html">DOOR LOCKS</a></li>
                                        <li><a href="Ceramics-tiles.html">CERAMICS TILES</a></li>
                                        <li><a href="ceiling.html">SPC ,UV Board &amp; PVC CEILING</a></li>
                                    </ul>
                                </li>
                                <li><a href="projects.html">Projects</a>  </li>
                                <li><a href="news.html">News</a>  </li>
                                
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
    
                        <div className="search-contact">
                           
                            <div className="contact">
                                <div className="call">
                                    <i className="fi flaticon-call"></i>
                                    <p>Call us </p>
                                    <h5>+251 116 61 0160</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
        </header>
        
    )
}

export default HeaderComponent;