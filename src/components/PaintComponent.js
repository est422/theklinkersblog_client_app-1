import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

function PaintComponent () {

    return(
        <>
        <HeaderComponent />
        <section id="blog" className="blog py-5">
            <div className="container" data-aos="fade-up">

                <div className="row">

                    <div className="col-lg-12 entries">

                        <article className="entry entry-single">

                        <div className="entry-img">
                            <img src="assets/images/project-single/img-6.jpg" alt="" className="img-fluid" />
                        </div>

                        <h2 className="entry-title">
                            <h2 href="#">PAINT PRODUCTS</h2><br/>
                            <span>Official Distributor for...<img style={{width: "150px"}} src="assets/images/partners/img-5.jpg" alt=""/></span>
                        </h2>

                        <div className="entry-meta">
                            <ul>
                            {/* <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-single.html">John Doe</a></li>
                            <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                            <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li> */}
                            </ul>
                        </div>

                        <div className="entry-content">
                        <p>EKT CERAMICS® is the Official Distributor for JOTUN one of the world’s leading paints and coatings manufacturers,<br/>
								<span>“Paint is a beautifier, Protector of homes &amp; Buildings.”</span><br/>
								Depending on their function paints are broadly characterized as either Interior or Exterior. <br/>
							    Exterior Paints are exposed to all types of varying weather conditions; therefore, it requires to protect against UV (Radiation of the sun), fungal growth, fade resistance &amp; Water resistance. They are also supposed to be flexible for not easily crack on expansion &amp; contraction.<br/>
								Whereas Interior paints are more to do aesthetics &amp; decoration, so they are supposed to have easy maintenance, washability and dampness prevention. <br/>
								In addition, to those interior paints need to be low or Zero VOC in preventing air quality &amp; stain resistance for hiding brush &amp; roller marks.</p>
							
							     
							<h3>We Supply &amp; Apply</h3>
                                		 <p>
											 <li><i className="ti-check"></i>Building Interior Paints</li>
											 <li><i className="ti-check"></i>Decorative Paints</li>
											 <li><i className="ti-check"></i>Building Exterior Paints</li>
											 <li><i className="ti-check"></i>Stucco</li>
											 <li><i className="ti-check"></i>Internal &amp; External Wall Primer coat</li>
										 </p>

                        </div>

                        {/* <div className="entry-footer">
                            <i className="bi bi-folder"></i>
                            <ul className="cats">
                            <li><a href="#">Business</a></li>
                            </ul>

                            <i className="bi bi-tags"></i>
                            <ul className="tags">
                            <li><a href="#">Creative</a></li>
                            <li><a href="#">Tips</a></li>
                            <li><a href="#">Marketing</a></li>
                            </ul>
                        </div> */}

                        </article>

                </div>
            </div>
            </div>
        </section>
        <FooterComponent />
        </>
    )
}

export default PaintComponent;