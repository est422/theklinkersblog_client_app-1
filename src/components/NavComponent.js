import { Routes, Route, Link } from "react-router-dom";
import ConstructionChemicals from "./ConstructionChemicals";
import HomeComponent from "./HomeComponent";
import IndexComponent from "./IndexComponent";
import PostsComponent from "./PostsComponent";
import ProductsComponent from "./ProductsComponent";


function NavComponent () {

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
              
              <a href="index.html"><img src="assets/images/logo-2.png" className="img-fluid"  alt=""/></a>
            </div>

            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="active" href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="ProductsComponent.html">Products</a></li>
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

        <div className="carousel slide" data-bs-ride="carousel">
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
                <a href="#" className="theme-btn">Our Products</a>
                <a href="#" className="theme-btn-s2">More about us</a>
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
                <a href="#" className="theme-btn">Our Products</a>
                <a href="#" className="theme-btn-s2">More about us</a>
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

        <Routes>
            <Route path="/" element={<IndexComponent />} />
            <Route path="/products" element={<ProductsComponent />} />
            <Route path="/constructionproducts" element={<ConstructionChemicals />} />
            <Route path="/blogs" element={<PostsComponent />} />
        </Routes>
        </>
    )
}

export default NavComponent;