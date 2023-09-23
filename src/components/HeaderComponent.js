import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { authSlice } from '../slices/authSlice'

function HeaderComponent () {

    const isLoggedIn = useSelector((state) => state.authSlice.loggedIn)
    const [isNavExpanded, setIsNavExpanded] = useState(false)


    useEffect(() => {
          
    }, [isLoggedIn])

    return(
      <>
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
                <i className="bi bi-envelope d-flex align-items-center"><a href="#">info@theklinkers.et</a></i>
                <i className="bi bi-phone d-flex align-items-center ms-4"><span>+251 116 61 0160</span></i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="youtube"><i className="bx bxl-youtube"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
        </div>
      </section>
      <header id="header">
            <div className="container d-flex align-items-center justify-content-between">

            <div className="logo">
                <h1><Link to={"/"}><img src="assets/images/logo-2.png" alt="" className="img-fluid" /></Link></h1>
                
            </div>

            <nav id="navbar" className={ isNavExpanded ? "navbar-mobile" : "navbar" }>
              <ul>
                <li><Link to={"/"} className="nav-link">Home</Link></li>
                <li><Link to={"/about"} className="nav-link">About Us</Link></li>
                <li className="dropdown"><Link to={"/products"}><span>Products</span> <i className="bi bi-chevron-down"></i></Link>
                    <ul>
                    <li><Link to={"/ppr"}>PPR PIPE &amp; FITTING</Link></li>
                    <li><Link to={"/sanitary"}>SANITARY WARE</Link></li>
                    <li className="dropdown"><Link to={"/construction"}><span>CONSTRUCTION CHEMICAL</span> <i className="bi bi-chevron-right"></i></Link>
                        <ul>
                        <li><Link to={"/waterproofing"}>Water Proofing</Link></li>
                        <li><Link to={"/refurbishment"}>Refurbishment</Link></li>
                        <li><Link to={"/roofing"}>Roofing</Link></li>
                        <li><Link to={"/sealing"}>Sealing &amp; Bonding</Link></li>
                        <li><Link to={"/concrete"}>Concrete</Link></li>
                        <li><Link to={"/flooring"}>Flooring</Link></li>
                        </ul>
                    </li>
                    <li><Link to={"/paint"}>PAINT</Link></li>
                    <li><Link to={"/doorlocks"}>DOOR LOCKS</Link></li>
                    <li><Link to={"/ceramics"}>CERAMICS TILES</Link></li>
                    <li><Link to={"/spc"}>SPC ,UV Board &amp; PVC CEILING</Link></li>
                    </ul>
                </li>
                <li><Link to={"/projects"} className="nav-link">Projects</Link></li>
                <li className="dropdown"><Link to={"/blogs"}>Blog</Link>
                  <ul>
                    {isLoggedIn ? <li><Link to={"/addpost"}>Add New Post</Link></li> : ""}
                  </ul>
                </li>
                <li><Link to={"/contact"} className="nav-link">Contact Us</Link></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle" onClick={() => {setIsNavExpanded(!isNavExpanded)}}></i>
            </nav>

            </div>
        </header>
      {/* <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">

          <div className="logo">
              <Link to={"/"}><img src="assets/images/logo-2.png" alt="" className="img-fluid" /></Link>
          </div>
          <nav id="navbar" className={ isNavExpanded ? "nav-mobile" : "navbar"}>
              <ul>
              <li><Link to={"/"} className="nav-link">Home</Link></li>
              <li><Link to={"/about"} className="nav-link">About Us</Link></li>
              <li className="dropdown"><Link to={"/products"}><span>Products</span> <i className="bi bi-chevron-down"></i></Link>
                  <ul>
                  <li><Link to={"/ppr"}>PPR PIPE &amp; FITTING</Link></li>
                  <li><Link to={"/sanitary"}>SANITARY WARE</Link></li>
                  <li className="dropdown"><Link to={"/construction"}><span>CONSTRUCTION CHEMICAL</span> <i className="bi bi-chevron-right"></i></Link>
                      <ul>
                      <li><Link to={"/waterproofing"}>Water Proofing</Link></li>
                      <li><Link to={"/refurbishment"}>Refurbishment</Link></li>
                      <li><Link to={"/roofing"}>Roofing</Link></li>
                      <li><Link to={"/sealing"}>Sealing &amp; Bonding</Link></li>
                      <li><Link to={"/concrete"}>Concrete</Link></li>
                      <li><Link to={"/flooring"}>Flooring</Link></li>
                      </ul>
                  </li>
                  <li><Link to={"/paint"}>PAINT</Link></li>
                  <li><Link to={"/doorlocks"}>DOOR LOCKS</Link></li>
                  <li><Link to={"/ceramics"}>CERAMICS TILES</Link></li>
                  <li><Link to={"/spc"}>SPC ,UV Board &amp; PVC CEILING</Link></li>
                  </ul>
              </li>
              <li><Link to={"/projects"} className="nav-link">Projects</Link></li>
              <li className="dropdown"><Link to={"/blogs"}>Blog</Link>
                <ul>
                  {isLoggedIn ? <li><Link to={"/addpost"}>Add New Post</Link></li> : ""}
                </ul>
              </li>
              <li><Link to={"/contact"} className="nav-link">Contact Us</Link></li>
              </ul>
              <button className="bi bi-list mobile-nav-toggle" onClick={() => {setIsNavExpanded(!isNavExpanded)}}></button>
          </nav>

        </div>
      </header> */}
      
      </>  
    )
}

export default HeaderComponent;