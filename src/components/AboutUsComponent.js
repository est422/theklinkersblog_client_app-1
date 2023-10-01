import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

function AboutUsComponent () {

    return(
        <>
        <HeaderComponent />
        <section className="about-us-section section-padding pt-3">
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

              {/* <section id="team" className="team  py-5">
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
        </section> */}
        <FooterComponent />
        </>
    )
}

export default AboutUsComponent;