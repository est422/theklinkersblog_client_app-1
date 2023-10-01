import { Link } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

function ProjectsComponent () {

    return(
        <>
        <HeaderComponent />
        <section className="inner-page pt-3">
            <div id="team" className="team py-5">
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

            </div>
        </section>
        <FooterComponent />
        </>
    )
}

export default ProjectsComponent;