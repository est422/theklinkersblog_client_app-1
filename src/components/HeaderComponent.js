import { Link } from "react-router-dom";

function HeaderComponent () {

    return(
        
        <>
        <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-envelope d-flex align-items-center"><a href="#">info@theklinkers.et</a></i>
                    <i className="bi bi-phone d-flex align-items-center ms-4"><span>+251 116 61 0160</span></i>
                </div>
                <div className="social-links d-none d-md-flex align-items-center">
                  <a href="#" className="youtube"><i className="bx bxl-youtube"></i></a>
                  <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
        </section>
        <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <Link to={"/"}><img src="assets/images/logo-2.png" alt="" className="img-fluid" /></Link>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                    <li><Link to={"/"} className="nav-link">Home</Link></li>
                    <li><Link to={"/about"} className="nav-link">About Us</Link></li>
                    {/* <li><Link to={"/products"} className="nav-link ">Products</Link></li> */}
                    <li className="dropdown"><Link to={"/products"}><span>Products</span> <i className="bi bi-chevron-down"></i></Link>
                        <ul>
                        <li><Link to={"/ppr"}>PPR PIPE &amp; FITTING</Link></li>
                        <li><Link to={"/sanitary"}>SANITARY WARE</Link></li>
                        <li className="dropdown"><Link to={"/construction"}><span>CONSTRUCTION CHEMICAL</span> <i className="bi bi-chevron-right"></i></Link>
                            <ul>
                            <li><Link to={"/waterproofing"}>Water Proofing</Link></li>
                            <li><Link to={"/refurbishment"}>Refurbishment</Link></li>
                            <li><Link to={"/roofing"}>Roofing</Link></li>
                            <li><Link to={"/sealing"}>Sealing &amp; Bonding</Link></li>
                            <li><Link to={"/concrete"}>Concrete</Link></li>
                            <li><Link to={"/flooring"}>Flooring</Link></li>
                            </ul>
                        </li>
                        <li><Link to={"/paint"}>PAINT</Link></li>
                        <li><Link to={"/doorlocks"}>DOOR LOCKS</Link></li>
                        <li><Link to={"/ceramics"}>CERAMICS TILES</Link></li>
                        <li><Link to={"/spc"}>SPC ,UV Board &amp; PVC CEILING</Link></li>
                        </ul>
                    </li>
                    <li><Link to={"/projects"} className="nav-link">Projects</Link></li>
                    <li><Link to={"/blogs"}>Blog</Link></li> 
                    <li><Link to={"/contact"} className="nav-link">Contact Us</Link></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
        {/* <section id="topbar" className="d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
              <div className="social-links d-none d-md-flex align-items-center">
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="youtube"><i className="bi bi-youtube"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
                <div className="contact-info d-flex align-items-center">
                <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">info@theklinkers.et</a></i>
              </div>
          </div>
        </section>
        <header id="header" className="d-flex align-items-center">
          <div className="container d-flex justify-content-between align-items-center">

            <div className="logo">
              
              <a href="index.html"><img src="assets/images/logo-2.png" className="img-fluid"  alt=""/></a>
            </div>

            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="active" href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><Link to={"/products"}>Products</Link></li>
                <li><a href="portfolio.html">Portfolio</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li className="dropdown"><a href="#"><span>Our Products</span> <i className="bi bi-chevron-down"></i></a>
                  <ul>
                    <li><a href="#">DECORATIVE WOOD WALL PANELING</a></li>
                    <li className="dropdown"><a href="#"><span>CONSTRUCTION CHEMICALS</span> <i className="bi bi-chevron-right"></i></a>
                      <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                      </ul>
                    </li>
                    <li><a href="#">WATER PROOFING</a></li>
                    <li><a href="#">TILE ADHESIVES</a></li>
                  </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>

          </div>
        </header> */}

        </>
        // <header id="header" className="site-header header-style-2">
        //         <div className="topbar">
        //             <div className="container">
        //                 <div className="row">
        //                     <div className="col col-sm-3">
        //                         <div className="social-icons">
        //                             <ul>
        //                                 <li><a href="#"><i className="ti-facebook"></i></a></li>
                                       
        //                                 <li><a href="#"><i className="ti-linkedin"></i></a></li>
                                       
        //                                 <li><a href="#"><i className="ti-youtube"></i></a></li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                     <div className="col col-sm-9">
        //                         <div className="contact-info">
        //                             <ul>
        //                                 <li><i className="ti-email"></i> info@theklinkers.et</li>
                                       
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <nav className="navigation navbar navbar-default">
        //             <div className="container">
        //                 <div className="navbar-header">
        //                     <button type="button" className="open-btn">
        //                         <span className="sr-only">Toggle navigation</span>
        //                         <span className="icon-bar"></span>
        //                         <span className="icon-bar"></span>
        //                         <span className="icon-bar"></span>
        //                     </button>
        //                     <a className="navbar-brand" href="index.html"><img src="assets/images/logo-2.png" /></a>
        //                 </div>
        //                 <div id="navbar" className="navbar-collapse collapse navigation-holder">
        //                     <button className="close-navbar"><i className="ti-close"></i></button>
        //                     <ul className="nav navbar-nav">
        //                         <li className="active"><a href="index.html">Home</a> </li>
        //                         <li><a href="about.html">About Us</a></li>
                                
        //                         <li className="active menu-item-has-children">
        //                             <a href="products.html">Products</a>
        //                             <ul className="sub-menu">
        //                                 <li><a href="PPR-Pipe.html">PPR PIPE &amp; FITTING</a></li>
        //                                 <li><a href="sanitary-ware.html">SANITARY WARE</a></li>
        //                                 <li className="menu-item-has-children"><a href="Construction-chemical.html">CONSTRUCTION CHEMICAL</a>
        //                                     <ul className="sub-menu">
        //                                         <li><a href="water-proofing.html">Water Proofing</a></li>
        //                                         <li><a href="refurbishment.html">Refurbishment</a></li>
        //                                         <li><a href="roofing.html">Roofing</a></li>
        //                                         <li><a href="sealing and bonding.html">Sealing and Bonding</a></li>
        //                                         <li><a href="concrete.html">Concrete</a></li>
        //                                         <li><a href="flooring.html">Flooring</a></li>
        //                                     </ul>
        //                                 </li>
        //                                 <li><a href="paint.html">PAINT</a></li>
        //                                 <li><a href="door-locks.html">DOOR LOCKS</a></li>
        //                                 <li><a href="Ceramics-tiles.html">CERAMICS TILES</a></li>
        //                                 <li><a href="ceiling.html">SPC ,UV Board &amp; PVC CEILING</a></li>
        //                             </ul>
        //                         </li>
        //                         <li><a href="projects.html">Projects</a>  </li>
        //                         <li><a href="news.html">News</a>  </li>
                                
        //                         <li><a href="contact.html">Contact</a></li>
        //                     </ul>
        //                 </div>
    
        //                 <div className="search-contact">
                           
        //                     <div className="contact">
        //                         <div className="call">
        //                             <i className="fi flaticon-call"></i>
        //                             <p>Call us </p>
        //                             <h5>+251 116 61 0160</h5>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </nav>
        // </header>
        
    )
}

export default HeaderComponent;