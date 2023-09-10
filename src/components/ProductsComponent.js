import { Link } from "react-router-dom";

function ProductsComponent () {

    return(
        <>
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
                      <span><Link to={"/ppr"} type="button" className="btn-view-more">Read More...</Link></span>
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
                      <h4>PAINT PRODUCTS</h4>
                      <span><p>EKT CERAMICS® is the Official Distributor for JOTUN one of the world’s leading paints and coatings manufacturers,</p></span>
                      <span><Link to={"/ppr"} type="button" className="btn-view-more">Read More...</Link></span>
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
                      <span><Link to={"/ppr"} type="button" className="btn-view-more">Read More...</Link></span>
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
                      <span><Link to={"/ppr"} type="button" className="btn-view-more">Read More...</Link></span>
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
                      <span><Link to={"/ppr"} type="button" className="btn-view-more">Read More...</Link></span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
        </>
    )
}

export default ProductsComponent;