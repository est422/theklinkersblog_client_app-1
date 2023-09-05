import { Link } from "react-router-dom";
import AboutUsComponent from "./AboutUsComponent";

function IndexComponent () {

    return(
      <>
      <div className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="img" src="assets/images/slider/slide-1.jpg"  />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>The Best Paint For Your Building.</h1>
                <p>We Provide JUTON Paint Products.</p>
                <a href="#" className="theme-btn">Our Products</a>
                <a href="#" className="theme-btn-s2">More about us</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="img" src="assets/images/slider/slide-2.jpg"  />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Official Distributor of Sika Products.</h1>
                <p>EKT CERAMICS® is the Official Distributor for Sika a Swiss concern specialty Chemicals Company.</p>
                <a href="#" className="theme-btn">Our Products</a>
                <a href="#" className="theme-btn-s2">More about us</a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="img" src="assets/images/slider/slide-3.jpg"  />

            <div className="container">
              <div className="carousel-caption text-start">
                <h1>High resistance to pressure.</h1>
                <p>Exclusive Country Representative in Ethiopia for aQuapa Brand produced.</p>
                <a href="#" className="theme-btn">Our Products</a>
                <a href="#" className="theme-btn-s2">More about us</a>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
      <main id="main">
          {/* <section className="features-section">
                  <div className="container">
                      <div className="row">
                          <div className="col col-xs-12">
                              <div className="feature-grids clearfix">
                                  <div className="grid">
                                      <div className="icon">
                                          <i className="bi bi-star"></i>
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
              </section> */}

              <AboutUsComponent />

              {/* <div className="album py-5 bg-light">
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
                          </div>
                        </div>
                        <div className="card-footer bg-white border-0">
                          <a href="product-details-ppr.html" type="button" className="btn-view-more">Read More...</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <section id="team" className="team">
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
                          <h4>PPR PIPE &amp; FITTING</h4>
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
                          <h4>SANITARY WARE PRODUCTS</h4>
                          <span><p>EKT CERAMICS® is the Exclusive Country Representative in Ethiopia for PC Brand.</p></span>
                          <span><a href="product-details-decorative-wall-panel.html" type="button" className="btn-view-more">Read More...</a></span>
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
                          <h4>CONSTRUCTION CHEMICALS</h4>
                          <span><p>EKT CERAMICS® is the Official Distributor for Sika a Swiss concern specialty Chemicals Company.</p></span>
                          <span><a href="product-details-decorative-wall-panel.html" type="button" className="btn-view-more">Read More...</a></span>
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
                          <h4>PAINT PRODUCTS</h4>
                          <span><p>EKT CERAMICS® is the Official Distributor for JOTUN one of the world’s leading paints and coatings manufacturers,</p></span>
                          <span><a href="product-details-decorative-wall-panel.html" type="button" className="btn-view-more">Read More...</a></span>
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
                          <h4>DOOR LOCK PRODUCTS</h4>
                          <span><p>EKT CERAMICS® is the Exclusive Country Representative in Ethiopia for TESA ASSA ABLOY.</p></span>
                          <span><a href="product-details-decorative-wall-panel.html" type="button" className="btn-view-more">Read More...</a></span>
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
                          <h4>CERAMICS TILES</h4>
                          <span><p>When it comes to finding the perfect tiles to go with your new bathroom, kitchen, living area or outdoor space. </p></span>
                          <span><a href="product-details-decorative-wall-panel.html" type="button" className="btn-view-more">Read More...</a></span>
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
                          <h4>SPC ,UV Board &amp; PVC CEILING</h4>
                          <span><p> of Hanbon Brand SPC (Stone Polymer Composite) flooring, uv board (Marble sheet) wall decorative sheets , PVC ceiling and skirting</p></span>
                          <span><a href="product-details-decorative-wall-panel.html" type="button" className="btn-view-more">Read More...</a></span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </section>

              <section id="services" className="services py-5">
                <div className="container">
                  <div className="section-title">
                    <span>Our Features</span>
                    <h2 className="pt-2">Why Choose Us!</h2>
                    <span><p>Throughout our experience in the business sector, it has been the priority of our company to engage in the supply of quality and modern materials to the construction industry.</p></span>
                  </div>

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

              <section id="clients" className="clients">
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
              
      
              {/* <section>
                <div className="cta-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6">
                          <h4>Lets Get in Touch!</h4>
                      </div>
                      <div className="col-lg-3">
                          <i className="fi flaticon-call"></i>
                          <h4>Call us</h4>
                          <p>+251 116 61 0160</p>
                      </div>
                      <div className="col-lg-3">
                          <i className="fi flaticon-contact"></i>
                          <h4>Email us</h4>
                          <p>sales@theklinkers.et</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}

              <section id="team" className="team  py-5">
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
        </main>
      </>
    )
}

export default IndexComponent;