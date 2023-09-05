import { Routes, Route, Link } from "react-router-dom";
import ConstructionChemicals from "./ConstructionChemicals";
import HomeComponent from "./HomeComponent";
import PostsComponent from "./PostsComponent";
import ProductsComponent from "./ProductsComponent";


function NavComponent () {

    return(
        <>
        <header id="header" className="d-flex align-items-center">
          <div className="container d-flex justify-content-between align-items-center">

            <div className="logo">
              {/* <h1><a href="index.html">Lorem</a></h1> */}
              
              <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
            </div>

            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="active" href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><Link to={"/products"}>Products</Link></li>
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

        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/products" element={<ProductsComponent />} />
            <Route path="/constructionproducts" element={<ConstructionChemicals />} />
            <Route path="/blogs" element={<PostsComponent />} />
        </Routes>
        </>
    )
}

export default NavComponent;