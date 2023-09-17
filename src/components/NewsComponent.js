import FooterComponent from "./FooterComponent";

function NewsComponent () {

    return(
        <>
        <section id="values" className="values">
          <div className="container py-5">

            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                <div className="card" style={{backgroundImage: "url(assets/images/services/img-6.jpg)"}}>
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Our Mission</a></h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                    <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="100">
                <div className="card" style={{backgroundImage: "url(assets/images/services/img-6.jpg)"}}>
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Our Plan</a></h5>
                    <p className="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>
                    <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
                  </div>
                </div>

              </div>
              <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="200">
                <div className="card" style={{backgroundImage: "url(assets/images/services/img-6.jpg)"}}>
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Our Vision</a></h5>
                    <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
                    <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay="300">
                <div className="card" style={{backgroundImage: "url(assets/images/services/img-6.jpg)"}}>
                  <div className="card-body">
                    <h5 className="card-title"><a href="">Our Care</a></h5>
                    <p className="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>
                    <div className="read-more"><a href="#"><i className="bi bi-arrow-right"></i> Read More</a></div>
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

export default NewsComponent;