import FooterComponent from "./FooterComponent";

function IndexComponent () {

    return(
        <>
        <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="social-links d-none d-md-flex align-items-center">
                {/* <a href="#" className="twitter"><i className="bi bi-twitter"></i></a> */}
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="youtube"><i className="bi bi-youtube"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
                <div className="contact-info d-flex align-items-center">
                <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">info@theklinkers.et</a></i>
                {/* <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i> */}
                </div>
            </div>
        </section>

        <header id="header" className="d-flex align-items-center">
          <div className="container d-flex justify-content-between align-items-center">

            <div className="logo">
              {/* <h1><a href="index.html">Lorem</a></h1> */}
              
              <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
            </div>

            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="active" href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="services.html">Services</a></li>
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
        </header>

        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        {/* <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}
            <img className="img" src="assets/images/slider/slide-1.jpg"  />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>The Best Paint For Your Building.</h1>
                <p>We Provide JUTON Paint Products.</p>
                <a className="theme-btn" href="#">Our Products</a>
                <a className="theme-btn-s2" href="#">More about us</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}
            <img className="img" src="assets/images/slider/slide-2.jpg"  />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Official Distributor of Sika Products.</h1>
                <p>EKT CERAMICS® is the Official Distributor for Sika a Swiss concern specialty Chemicals Company.</p>
                <a className="theme-btn" href="#">Our Products</a>
                <a className="theme-btn-s2" href="#">More about us</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}
            <img className="img" src="assets/images/slider/slide-3.jpg"  />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>High resistance to pressure.</h1>
                <p>Exclusive Country Representative in Ethiopia for aQuapa Brand produced.</p>
                <a className="theme-btn" href="#">Our Products</a>
                <a className="theme-btn-s2" href="#">More about us</a>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      
        <section className="features-section">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="feature-grids clearfix">
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-star"></i>
                                </div>
                                <span className="count">01.</span>
                                <h4>CERTIFIED PRODUCTS</h4>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-motivation"></i>
                                </div>
                                <span className="count">02.</span>
                                <h4>BETTER REPUTATION</h4>
                            </div>
                            <div className="grid">
                                <div className="icon">
                                    <i className="fi flaticon-phone-call"></i>
                                </div>
                                <span className="count">03.</span>
                                <h4>TECHNICAL SUPPORT</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
        
    <main id="main">
      <section className="about-us-section section-padding">
          <div className="container">
              <div className="row">
                  <div className="col col-md-6">
                      <div className="section-title">
                      <h2>About us</h2>
                      {/* <h2>WE PROVIDE BEST SELECTIONS OF FINISHING MATERIALS &amp; CONSTRUCTION CHEMICALS</h2> */}
                      </div>
                      <div className="details">
                        <h2>WE PROVIDE BEST SELECTIONS OF FINISHING MATERIALS &amp; CONSTRUCTION CHEMICALS</h2> <br/>
                        <p>EKT CERAMICS® is a registered trade mark for The Klinkers Trading plc. The company has 18+ years of good reputation for delivering quality construction material solutions known with our mother company EKT Trade &amp; Investment Plc.<br /><br/>
                        Our mother company EKT Trade and investment is one of the pioneers in import &amp; export business in Ethiopia. Since its establishment it has got solid experience in importing &amp; distributing high-quality building finishing materials, and construction Chemicals.</p>

                        <div className="btns">
                            <a href="about.html" className="theme-btn">Read More</a>
                            <a href="contact.html" className="theme-btn-s3">Contact us</a>
                        </div>
                      </div>
                  </div>
                  <div className="col col-md-6">
                      <div className="right-col">
                        <div className="col col-md-6">
                          <div className="right-col">
                              <div className="img-holder">
                                  <img src="assets/images/about.png" alt="" />
                              </div>
                              <div className="video-holder">
                                  <a href="products.html" className="hero-video-btn video-btn"  data-type="iframe" tabIndex="0"><i className="fi flaticon-play-button"></i>Read More About our Products</a> 
                              </div>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div> 
        </section>

        <div className="album py-5 bg-light">
          <div className="container">
            <div className="col col-md-6">
              <div className="section-title-s2">
                  <span>Our Products</span>
                  <h2>Our Industry Solutions</h2>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img src="assets/images/services/img-1.jpg" className="img-fluid" alt=""/>
      
                  <div className="card-body">
                    <h4 className="card-title"><span>PPR PIPE &amp; FITTING</span></h4>
                    <p className="card-text">EKT CERAMICS® is the Exclusive Country Representative in Ethiopia for aQuapa Brand.</p>
                    {/* <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <a href="product-details-DECORATIVE-WOOD-WALL-PANELING.html" type="button" className="btn btn-sm btn-outline-secondary">Read More...</a>
                      </div>
                    </div> */}
                  </div>
                  <div className="card-footer bg-white border-0">
                    <a href="product-details-decorative-wall-panel.html" type="button" className="btn-view-more">Read More...</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img src="assets/images/services/img-2.jpg" className="bd-placeholder-img card-img-top" alt=""/>      
                  <div className="card-body">
                    <h4 className="card-title"><span>SANITARY WARE PRODUCTS</span></h4>
                    <p className="card-text">EKT CERAMICS® is the Exclusive Country Representative in Ethiopia for PC Brand.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      {/* <div className="btn-group">
                        <a href="products-Chemicals.html" type="button" className="btn btn-sm btn-outline-secondary">Read More...</a>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                      </div> */}
                    </div>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <a href="products-chemicals.html" type="button" className="btn-view-more">Read More...</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img src="assets/images/services/img-3.jpg" className="bd-placeholder-img card-img-top" alt=""/>
      
                  <div className="card-body">
                    <h4 className="card-title"><span>CONSTRUCTION CHEMICALS</span></h4>
                    <p className="card-text">EKT CERAMICS® is the Official Distributor for Sika a Swiss concern specialty Chemicals Company.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      {/* <div className="btn-group">
                        <a href="product-ceramic-tile.html" type="button" className="btn-view-more">Read More...</a>
                        <button type="button" className="btn-view-more">Edit</button>
                      </div> */}
                    </div>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <a href="product-ceramic-tile.html" type="button" className="btn-view-more">Read More...</a>
                  </div>
                </div>
              </div>
      
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img src="assets/images/services/img-4.jpg" className="bd-placeholder-img card-img-top" alt=""/>
                  <div className="card-body">
                    <h4 className="card-title"><span>PAINT PRODUCTS</span></h4>
                    <p className="card-text">EKT CERAMICS® is the Official Distributor for JOTUN one of the world’s leading paints and coatings manufacturers,</p>
                    <div className="d-flex justify-content-between align-items-center">
                      {/* <div className="btn-group">
                        <a href="product-details-Sanitary-Ware.html" type="button" className="btn-view-more">Read More...</a>
                        <button type="button" className="btn-view-more">Edit</button>
                      </div> */}
                    </div>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <a href="product-details-sanitary-ware.html" type="button" className="btn-view-more">Read More...</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img src="assets/images/services/img-5.jpg" className="bd-placeholder-img card-img-top" alt="product-image-5"/>
      
                  <div className="card-body">
                    <h4 className="card-title"><span>DOOR LOCK PRODUCTS</span></h4>
                    <p className="card-text">EKT CERAMICS® is the Exclusive Country Representative in Ethiopia for TESA ASSA ABLOY.</p>
                    <div className="d-flex justify-content-between align-items-center">
                      {/* <div className="btn-group">
                        <a href="product-details-Spc.html" type="button" className="btn-view-more">Read More...</a>
                        <button type="button" className="btn-view-more">Edit</button>
                      </div> */}
                    </div>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <a href="product-spc.html" type="button" className="btn-view-more">Read More...</a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img src="assets/images/services/img-6.jpg" className="bd-placeholder-img card-img-top" alt=""/>      
                  <div className="card-body">
                    <h4 className="card-title"><span>CERAMICS TILES</span></h4>
                    <p className="card-text">When it comes to finding the perfect tiles to go with your new bathroom, kitchen, living area or outdoor space. </p>
                    <div className="d-flex justify-content-between align-items-center">
                      {/* <div className="btn-group">
                        <a href="product-details-Ppr.html" type="button" className="btn-view-more">Read More...</a>
                        <button type="button" className="btn-view-more">Edit</button>
                      </div> */}
                    </div>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <a href="product-details-ppr.html" type="button" className="btn-view-more">Read More...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="clients" className="clients section-bg">
          <div className="container">

            <div className="row no-gutters clients-wrap clearfix wow fadeInUp">

              <div className="col-lg-2 col-md-4 col-6">
                <div className="client-logo">
                  <img src="assets/images/partners/img-1.jpg" className="img-fluid" alt="" data-aos="flip-right"/>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-6">
                <div className="client-logo">
                  <img src="assets/images/partners/img-2.jpg" className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="100"/>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-6">
                <div className="client-logo">
                  <img src="assets/images/partners/img-3.jpg" className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="200"/>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-6">
                <div className="client-logo">
                  <img src="assets/images/partners/img-4.jpg" className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="300"/>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-6">
                <div className="client-logo">
                  <img src="assets/images/partners/img-5.jpg" className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="400"/>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-6">
                <div className="client-logo">
                  <img src="assets/images/partners/img-6.jpg" className="img-fluid" alt="" data-aos="flip-right" data-aos-delay="500"/>
                </div>
              </div>

            </div>

          </div>
        </section>
    </main>
    <FooterComponent />
    </>
    )
}

export default IndexComponent;