import { Link } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import ProductsComponent from "./ProductsComponent";

function IndexComponent () {

    return(
      <>
      {/* <section id="topbar" className="d-flex align-items-center">
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
      </section> */}
      <HeaderComponent />
      <div className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="img-fluid" src="assets/images/slider/slide-1.jpg"  />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>The Best Paint For Your Building.</h1>
                <p>We Provide JUTON Paint Products.</p>
                <Link to={"/products"} className="theme-btn">Our Products</Link>
                <Link to={"/about"} className="theme-btn-s2">More about us</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="img-fluid" src="assets/images/slider/slide-2.jpg"  />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Official Distributor of Sika Products.</h1>
                <p>EKT CERAMICS® is the Official Distributor for Sika a Swiss concern specialty Chemicals Company.</p>
                <Link to={"/products"} className="theme-btn">Our Products</Link>
                <Link to={"/about"} className="theme-btn-s2">More about us</Link>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="img-fluid" src="assets/images/slider/slide-3.jpg"  />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>High resistance to pressure.</h1>
                <p>Exclusive Country Representative in Ethiopia for aQuapa Brand produced.</p>
                <Link to={"/products"} className="theme-btn">Our Products</Link>
                <Link to={"/about"} className="theme-btn-s2">More about us</Link>
              </div>
            </div>
          </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
      <section className="features-section">
                  <div className="container">
                      <div className="row">
                          <div className="col col-xs-12">
                              <div className="feature-grids clearfix">
                                  <div className="grid">
                                      <div className="icon">
                                          {/* <i className="bi bi-star"></i> */}
                                      </div>
                                      <span className="count">01.</span>
                                      <h4>CERTIFIED PRODUCTS</h4>
                                  </div>
                                  <div className="grid">
                                      <div className="icon">
                                          {/* <i className="fi flaticon-motivation"></i> */}
                                      </div>
                                      <span className="count">02.</span>
                                      <h4>BETTER REPUTATION</h4>
                                  </div>
                                  <div className="grid">
                                      <div className="icon">
                                          {/* <i className="fi flaticon-phone-call"></i> */}
                                      </div>
                                      <span className="count">03.</span>
                                      <h4>TECHNICAL SUPPORT</h4>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div> 
        </section>

              {/* <AboutUsComponent /> */}

              <div className="section-title">
                <h2>About us</h2>
              </div>
              <section id="about" className="about section-bg">
                <div className="container">

                  <div className="row">
                    

                    <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                      {/* <h4 data-aos="fade-up">About us</h4> */}
                      <h3 data-aos="fade-up">WE PROVIDE BEST SELECTIONS OF FINISHING MATERIALS &amp; CONSTRUCTION CHEMICALS</h3>
                      <p data-aos="fade-up">EKT CERAMICS® is a registered trade mark for The Klinkers Trading plc. The company has 18+ years of good reputation for delivering quality construction material solutions known with our mother company EKT Trade &amp; Investment Plc.<br /><br/>
                              Our mother company EKT Trade and investment is one of the pioneers in import &amp; export business in Ethiopia. Since its establishment it has got solid experience in importing &amp; distributing high-quality building finishing materials, and construction Chemicals.</p>

                              <div className="btns pt-5">
                                <a href="about.html" className="theme-btn">Read More</a>
                                <a href="contact.html" className="theme-btn-s3">Contact us</a>
                              </div>

                    </div>
                    <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative" data-aos="fade-right">
                      <a href="#" className="glightbox play-btn mb-4"></a>
                    </div>
                  </div>

                </div>
              </section>
              {/* <section className="about-us-section">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6">
                            <div className="details pt-5">
                              <h2>WE PROVIDE BEST SELECTIONS OF FINISHING MATERIALS &amp; CONSTRUCTION CHEMICALS</h2> <br/>
                              <p>EKT CERAMICS® is a registered trade mark for The Klinkers Trading plc. The company has 18+ years of good reputation for delivering quality construction material solutions known with our mother company EKT Trade &amp; Investment Plc.<br /><br/>
                              Our mother company EKT Trade and investment is one of the pioneers in import &amp; export business in Ethiopia. Since its establishment it has got solid experience in importing &amp; distributing high-quality building finishing materials, and construction Chemicals.</p>

                              <div className="btns pt-5">
                                <a href="about.html" className="theme-btn">Read More</a>
                                <a href="contact.html" className="theme-btn-s3">Contact us</a>
                              </div>
                            </div>
                        </div>
                        <div className="col col-md-6 d-flex">
                            <div className="right-col">
                              <div className="col col-md-12">
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
            </section> */}

            <section className="inner-page pt-3">
          <div id="team" className="team">
            <div className="container py-5">

              <div className="section-title">
                <h2 data-aos="fade-up">Our Industry Soutions</h2>
                {/* <p data-aos="fade-up">Our Industry Soutions.</p> */}
              </div>

              <div className="row">

                <div className="col-lg-6" data-aos="fade-up">
                  <div className="member">
                    <div className="member-img">
                      <img src="assets/images/services/img-1.jpg" className="img-fluid" alt="" />
                      {/* <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                      </div> */}
                    </div>
                    <div className="member-info">
                      <h2>PPR PIPE &amp; FITTING</h2>
                      <span><p>EKT CERAMICS® is the Exclusive Country Representative in Ethiopia for aQuapa Brand.</p></span>
                      <span><Link to={"/ppr"} type="button" className="btn-view-more">Read More...</Link></span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                  <div className="member">
                    <div className="member-img">
                      <img src="assets/images/services/img-2.jpg" className="img-fluid" alt="" />
                      {/* <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                      </div> */}
                    </div>
                    <div className="member-info">
                      <h2>SANITARY WARE PRODUCTS</h2>
                      <span><p>EKT CERAMICS® is the Exclusive Country Representative in Ethiopia for PC Brand.</p></span>
                      <span><Link to={"/sanitaryware"} type="button" className="btn-view-more">Read More...</Link></span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="member">
                    <div className="member-img">
                      <img src="assets/images/services/img-3.jpg" className="img-fluid" alt="" />
                      {/* <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                      </div> */}
                    </div>
                    <div className="member-info">
                      <h2>CONSTRUCTION CHEMICALS</h2>
                      <span><p>EKT CERAMICS® is the Official Distributor for Sika a Swiss concern specialty Chemicals Company.</p></span>
                      <span><Link to={"/construction"} type="button" className="btn-view-more">Read More...</Link></span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="member">
                    <div className="member-img">
                      <img src="assets/images/services/img-4.jpg" className="img-fluid" alt="" />
                      {/* <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                      </div> */}
                    </div>
                    <div className="member-info">
                      <h2>PAINT PRODUCTS</h2>
                      <span><p>EKT CERAMICS® is the Official Distributor for JOTUN one of the world’s leading paints and coatings manufacturers,</p></span>
                      <span><Link to={"/paint"} type="button" className="btn-view-more">Read More...</Link></span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="member">
                    <div className="member-img">
                      <img src="assets/images/services/img-5.jpg" className="img-fluid" alt="" />
                      {/* <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                      </div> */}
                    </div>
                    <div className="member-info">                    
                      <h2>DOOR LOCK PRODUCTS</h2>
                      <span><p>EKT CERAMICS® is the Exclusive Country Representative in Ethiopia for TESA ASSA ABLOY.</p></span>
                      <span><Link to={"/doorlocks"} type="button" className="btn-view-more">Read More...</Link></span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="member">
                    <div className="member-img">
                      <img src="assets/images/services/img-6.jpg" className="img-fluid" alt="" />
                      {/* <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                      </div> */}
                    </div>
                    <div className="member-info">                    
                      <h2>CERAMICS TILES</h2>
                      <span><p>When it comes to finding the perfect tiles to go with your new bathroom, kitchen, living area or outdoor space. </p></span>
                      <span><Link to={"/ceramictiles"} type="button" className="btn-view-more">Read More...</Link></span>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                  <div className="member">
                    <div className="member-img">
                      <img src="assets/images/services/img-7.jpg" className="img-fluid" alt="" />
                      {/* <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                      </div> */}
                    </div>
                    <div className="member-info">                    
                      <h2>SPC ,UV Board &amp; PVC CEILING</h2>
                      <span><p> of Hanbon Brand SPC (Stone Polymer Composite) flooring, uv board (Marble sheet) wall decorative sheets , PVC ceiling and skirting</p></span>
                      <span><Link to={"#"} type="button" className="btn-view-more">Read More...</Link></span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

            <div className="section-title">
              <span>Our Features</span>
                <h2 className="pt-2">Why Choose Us!</h2>
                <span><p>Throughout our experience in the business sector, it has been the priority of our company to engage in the supply of quality and modern materials to the construction industry.</p></span>
            </div>

            <section id="services" className="services py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="icon-box">
                      <div className="icon"><i className="bi bi-person"></i></div>
                      <h4><a href="">RELATIONSHIP</a></h4>
                      <p>Through your whole journey with us the inherent practice in each activity we do we care for a long-lasting relationship and partnership.</p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="icon-box">
                      <div className="icon"><i className="bi bi-award"></i></div>
                      <h4><a href="">CERTIFIED QUALITY PRODUCTS</a></h4>
                      <p>All our products are quality certified and all of our imported products are European Standard certified.</p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="icon-box mt-4">
                      <div className="icon"><i className="bi bi-cpu"></i></div>
                      <h4><a href="">BETTER REPUTATION</a></h4>
                      <p>Through the 18+ years’ experience we build an outstanding reputation with in a consistent &amp; customer centric services and expertise.</p>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="icon-box mt-4">
                      <div className="icon"><i className="bi bi-clock"></i></div>
                      <h4><a href="">TECHNICAL SUPPORT</a></h4>
                      <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                    </div>
                  </div>

                </div>

              </div>
            </section>

            <section id="clients" className="clients pt-5">
              <div className="section-title">
                <h2 data-aos="fade-up">Partners</h2>
                {/* <p data-aos="fade-up">Explore What We've Done</p> */}
              </div>
              <div className="container">

                <div className="row">

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

            <section id="team" className="team py-5">
              <div className="section-title">
                <h2 data-aos="fade-up">Featured Projects</h2>
                  <p data-aos="fade-up">Explore What We've Done.</p>
              </div>
              <div className="container">

                <div className="row">

                  <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                    <div className="member">
                      <div className="member-img">
                        <img src="assets/images/team/img-1.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="member-info">
                        <h4>Wegagen Bank HQ Project</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                    <div className="member">
                      <div className="member-img">
                        <img src="assets/images/team/img-2.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="member-info">
                        <h4>Dashen Bank HQ Project</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                    <div className="member">
                      <div className="member-img">
                        <img src="assets/images/team/img-3.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="member-info">
                        <h4>Bahir Dar President Office Building Project</h4>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                    <div className="member">
                      <div className="member-img">
                        <img src="assets/images/team/img-4.jpg" className="img-fluid" alt="" />
                      </div>
                      <div className="member-info">
                        <h4>Prosperity Party HQ Project</h4>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </section>
            <FooterComponent />
      </>
    )
}

export default IndexComponent;