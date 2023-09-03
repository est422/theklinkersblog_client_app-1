import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import HeroComponent from "./HeroComponent";
import PartnersComponent from "./PartnersComponent";
import PostsComponent from "./PostsComponent";

function HomeComponent () {

    return(
        
        <div className="page-wrapper">
    
            
            <div className="preloader">
                <div className="loader">
                    <div className="gear two">
                        
                        <svg viewBox="0 0 100 100" fill="#2D3A8C">
                            <path d="M97.6,55.7V44.3l-13.6-2.9c-0.8-3.3-2.1-6.4-3.9-9.3l7.6-11.7l-8-8L67.9,20c-2.9-1.7-6-3.1-9.3-3.9L55.7,2.4H44.3l-2.9,13.6      c-3.3,0.8-6.4,2.1-9.3,3.9l-11.7-7.6l-8,8L20,32.1c-1.7,2.9-3.1,6-3.9,9.3L2.4,44.3v11.4l13.6,2.9c0.8,3.3,2.1,6.4,3.9,9.3      l-7.6,11.7l8,8L32.1,80c2.9,1.7,6,3.1,9.3,3.9l2.9,13.6h11.4l2.9-13.6c3.3-0.8,6.4-2.1,9.3-3.9l11.7,7.6l8-8L80,67.9      c1.7-2.9,3.1-6,3.9-9.3L97.6,55.7z M50,65.6c-8.7,0-15.6-7-15.6-15.6s7-15.6,15.6-15.6s15.6,7,15.6,15.6S58.7,65.6,50,65.6z"></path>
                        </svg> 
                    </div>
                    
                </div>
            </div>
            
            <HeaderComponent />
            <HeroComponent />

            <section className="hero-slider hero-style-2">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                         <div className="swiper-slide">
                            <div className="slide-inner slide-bg-image" style={{backgroundImage: `url("assets/images/slider/slide-1.jpg")`}}>
                                <div className="container">
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2>The Best Paint For Your Building</h2>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p>We Provide JUTON Paint Products</p>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div data-swiper-parallax="500" className="slide-btns">
                                        <a href="products.html" className="theme-btn">Our Products</a> 
                                        <a href="about.html" className="theme-btn-s2">More about us</a> 
                                    </div>
                                </div>
                            </div> 
                        </div> 
                         <div className="swiper-slide">
                            <div className="slide-inner slide-bg-image" style={{backgroundImage: `url("assets/images/slider/slide-2.jpg")`}}>
                                <div className="container">
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2>Official Distributor of Sika Products</h2>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p>EKT CERAMICS® is the Official Distributor for Sika a Swiss concern speci Chemicals Company</p>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div data-swiper-parallax="500" className="slide-btns">
                                        <a href="products.html" className="theme-btn">Our Products</a> 
                                        <a href="about.html" className="theme-btn-s2">More about us</a> 
                                    </div>
                                </div>
                            </div> 
                        </div> 
                        <div className="swiper-slide">
                            <div className="slide-inner slide-bg-image" style={{backgroundImage: `url("assets/images/slider/slide-3.jpg")`}}>
                                <div className="container">
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2>High resistance to pressure.</h2>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p>Exclusive Country Representative in Ethiopia for aQuapa Brand produced</p>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div data-swiper-parallax="500" className="slide-btns">
                                        <a href="products.html" className="theme-btn">Our Products</a> 
                                        <a href="about.html" className="theme-btn-s2">More about us</a> 
                                    </div>
                                </div>
                            </div> 
                        </div> 
    
                        <div className="swiper-slide">
                            <div className="slide-inner slide-bg-image" style={{backgroundImage: `url("assets/images/slider/slide-4.jpg")`}}>
                                <div className="container">
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2>The Best Sanitary Wares</h2>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p>All Our products are certified.</p>
                                    </div>
                                    <div className="clearfix"></div>
                                    <div data-swiper-parallax="500" className="slide-btns">
                                        <a href="products.html" className="theme-btn">Our Products</a> 
                                        <a href="about.html" className="theme-btn-s2">More about us</a> 
                                    </div>
                                </div>
                            </div> 
                        </div> 
                    </div>
                    
    
                    
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </section>
            
    
    
            
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
            
            <section className="about-us-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6">
                            <div className="section-title">
                                <span>About us</span>
                                <h2>WE PROVIDE BEST SELECTIONS OF FINISHING MATERIALS &amp; CONSTRUCTION CHEMICALS</h2>
                            </div>
                            <div className="details">
                                <p>EKT CERAMICS® is a registered trade mark for The Klinkers Trading plc. The company has 18+ years of good reputation for delivering quality construction material solutions known with our mother company EKT Trade &amp; Investment Plc.<br/>
                                Our mother company EKT Trade and investment is one of the pioneers in import &amp; export business in Ethiopia. Since its establishment it has got solid experience in importing &amp; distributing high-quality building finishing materials, and construction Chemicals.</p>
                               
                                <div className="btns">
                                    <a href="about.html" className="theme-btn">Read More</a>
                                    <a href="contact.html" className="theme-btn-s3">Contact us</a>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-6">
                            <div className="right-col">
                                <div className="img-holder">
                                    <img src="assets/images/about.png" />
                                </div>
                                <div className="video-holder">
                                    <a href="products.html" className="hero-video-btn video-btn"  data-type="iframe" tabIndex="0"><i className="fi flaticon-play-button"></i>Read More About our Products</a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
    
            
            <section className="service-section-s2 section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-md-6">
                            <div className="section-title-s2">
                                <span>Our Products</span>
                                <h2>Our Industry Solutions</h2>
                            </div>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="service-grids clearfix">
                                <div className="grid">
                                    <img src="assets/images/services/img-1.jpg" />
                                    <h4><a href="pprproducts.html">PPR PIPE &amp; FITTING</a></h4>
                                    <p> EKT CERAMICS® is the Exclusive Country Representative in Ethiopia for aQuapa Brand </p>
                                    <a href="pprproducts.html" className="read-more">Read More <i className="fi flaticon-next"></i></a>
                                </div>
                                <div className="grid">
                                    <img src="assets/images/services/img-2.jpg" />
                                    <h4><a href="sanitary-ware.html">SANITARY WARE PRODUCTS</a></h4>
                                    <p> EKT CERAMICS® is the Exclusive Country Representative in Ethiopia for PC Brand.</p>
                                    <a href="sanitary-ware.html" className="read-more">Read More <i className="fi flaticon-next"></i></a>
                                </div>
                                <div className="grid">
                                    <img src="assets/images/services/img-3.jpg" />
                                    <h4><a href="Construction-chemical.html">CONSTRUCTION CHEMICALS</a></h4>
                                    <p>EKT CERAMICS® is the Official Distributor for Sika a Swiss concern speci Chemicals Company</p>
                                    <a href="Construction-chemical.html" className="read-more">Read More <i className="fi flaticon-next"></i></a>
                                </div>
                                <div className="grid">
                                    <img src="assets/images/services/img-4.jpg" />
                                    <h4><a href="paint.html">PAINT PRODUCTS</a></h4>
                                    <p>EKT CERAMICS® is the Official Distributor for JOTUN one of the world’s leading paints and coatings manufacturers,</p>
                                    <a href="paint.html" className="read-more">Read More <i className="fi flaticon-next"></i></a>
                                </div>
                                <div className="grid">
                                    <img src="assets/images/services/img-5.jpg" />
                                    <h4><a href="door-locks.html">DOOR LOCK PRODUCTS</a></h4>
                                    <p> EKT CERAMICS® is the Exclusive Country Representative in Ethiopia for TESA ASSA ABLOY</p>
                                    <a href="door-locks.html" className="read-more">Read More <i className="fi flaticon-next"></i></a>
                                </div>
                                <div className="grid">
                                    <img src="assets/images/services/img-6.jpg" />
                                    <h4><a href="Ceramics-tiles.html">CERAMICS TILES </a></h4>
                                    <p> When it comes to finding the perfect tiles to go with your new bathroom, kitchen, living area or outdoor space</p>
                                    <a href="Ceramics-tiles.html" className="read-more">Read More <i className="fi flaticon-next"></i></a>
                                </div>
                                <div className="grid">
                                    <img src="assets/images/services/img-6.jpg" />
                                    <h4><a href="ceiling.html">SPC ,UV Board &amp; PVC CEILING </a></h4>
                                    <p> of Hanbon Brand SPC (Stone Polymer Composite) flooring, uv board (Marble sheet) wall decorative sheets , PVC ceiling and skirting</p>
                                    <a href="ceiling.html" className="read-more">Read More <i className="fi flaticon-next"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
            
    
    
            
            <section className="why-choose-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
                            <div className="section-title-s3">
                                <span>Our Features</span>
                                <h2>Why Choose Us!</h2>
                                <p>Throughout our experience in the business sector, it has been the priority of our company to engage in the supply of quality and modern materials to the construction industry.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="why-choose-grids clearfix">
                                <div className="grid">
                                    <i className="fi flaticon-network-1"></i>
                                    <h3>RELATIONSHIP</h3>
                                    <p>Through your whole journey with us the inherent practice in each activity we do we care for a long-lasting relationship and partnership.</p>
                                </div>
                                <div className="grid">
                                    <i className="fi flaticon-circular-label-with-certified-stamp"></i>
                                    <h3>CERTIFIED QUALITY PRODUCTS</h3>
                                    <p>All our products are quality certified and all of our imported products are European Standard certified.</p>
                                </div>
                                <div className="grid">
                                    <i className="fi flaticon-chip"></i>
                                    <h3>BETTER REPUTATION</h3>
                                    <p>Through the 18+ years’ experience we build an outstanding reputation with in a consistent &amp; customer centric services and expertise.</p>
                                </div>
                                <div className="grid">
                                    <i className="fi flaticon-24-hours"></i>
                                    <h3>TECHNICAL SUPPORT</h3>
                                    <p>We offer a technical assistance through the whole process starting from selecting the right product and on application.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
            
    
    
            
            
            <section className="team-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
                            <div className="section-title-s5">
                                <span>Featured Projects</span>
                                <h2>Explore What We've Done</h2>
                               
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="team-grids">
                                 
                                <div className="grid">
                                    <div className="img-social">
                                        <div className="img-holder">
                                            <img src="assets/images/team/img-1.jpg" />
                                        </div>
                                        
                                    </div>
                                    <div className="details">
                                        <h3>Wegagen Bank HQ Project </h3>
                                       
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="img-social">
                                        <div className="img-holder">
                                            <img src="assets/images/team/img-2.jpg" />
                                        </div>
                                        
                                    </div>
                                    <div className="details">
                                        <h3>Dashen Bank HQ Project</h3>
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="img-social">
                                        <div className="img-holder">
                                            <img src="assets/images/team/img-3.jpg" />
                                        </div>
                                       
                                    </div>
                                    <div className="details">
                                        <h3>Bahir Dar President Office Building Project</h3>
                                       
                                    </div>
                                </div>
                                <div className="grid">
                                    <div className="img-social">
                                        <div className="img-holder">
                                            <img src="assets/images/team/img-5.jpg" />
                                        </div>
                                        
                                    </div>
                                    <div className="details">
                                        <h3>Prosperity Party HQ Project</h3>
                                        
                                    </div>
                                </div>
                                
                                 <div className="col col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2">
                                        <div className="section-title-s5">
                                       
                                        <a href="products.html" className="theme-btn">Read More About Our Projects</a>
                               
                                    </div>
                        </div>
                                
                            </div>
                        </div>
                    </div>
                </div> 
            </section>

            <PartnersComponent />
            
            <section className="cta-section">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-6 col-md-6">
                            <div className="cta-text">
                                <h3>Lets Get in Touch!</h3>
                            </div>
                        </div>
                        <div className="col col-lg-5 col-lg-offset-1 col-md-6">
                            <div className="contact-info">
                                <div>
                                    <i className="fi flaticon-call"></i>
                                    <h4>Call us</h4>
                                    <p>+251 116 61 0160</p>
                                </div>
                                <div>
                                    <i className="fi flaticon-contact"></i>
                                    <h4>Email us</h4>
                                    <p>sales@theklinkers.et</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>            
    
        <FooterComponent />
    
        </div>
        )
        
    
        {/* <main id="main">
            <PostsComponent />
        </main> */}
    {/* ) */}
}

export default HomeComponent;