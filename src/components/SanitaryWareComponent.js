import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

function SanitaryWareComponent () {

    return(
        <>
        <HeaderComponent />
        <section id="blog" className="blog py-5">
            <div className="container" data-aos="fade-up">

                <div className="row">

                    <div className="col-lg-12 entries">

                        <article className="entry entry-single">

                        <div className="entry-img">
                            <img src="assets/images/project-single/img-2.jpg" alt="" className="img-fluid" />
                        </div>

                        <div className="entry-title">
                            <h2 href="#">SANITARY WARE PRODUCTS</h2>
                        </div>

                        <div className="entry-meta">
                            <ul>
                            {/* <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-single.html">John Doe</a></li>
                            <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                            <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li> */}
                            </ul>
                        </div>

                        <div className="entry-content">
                        <p>EKT CERAMICS® is the Exclusive Country Representative in Ethiopia for PRIMACERA (PC) Brand. All products are certified.</p>
										
							     
							<h3>Product Category</h3>
                                		 <p>
											 
											 <li><i className="ti-check"></i>Two Piece Toilet (WC) </li>
											  <li><i className="ti-check"></i>One Piece Toilet (WC) </li>
											  <li><i className="ti-check"></i>Intelligent Toilet </li>
											  <li><i className="ti-check"></i>Pedestal Basin (Hand Wash Basin) </li>
											  <li><i className="ti-check"></i>Counter Top Basin (Hand Wash Basin) </li>
											 <li><i className="ti-check"></i>Squatting Pan (Turkish Type) </li>
											  <li><i className="ti-check"></i>Urinal </li>
											  <li><i className="ti-check"></i>Faucets </li>
											  <li><i className="ti-check"></i>Bathroom Accessories </li>
											 <li><i className="ti-check"></i>Shower Tray </li>
											  
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

export default SanitaryWareComponent;