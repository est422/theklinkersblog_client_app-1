import { Routes, Route, Link } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import PostsComponent from "./PostsComponent";


function navComponent () {

    return(
        <>
        <header id="header" className="fixed-top d-flex align-items-center ">
            <div className="container d-flex justify-content-between align-items-center">

            <div className="logo">
                <h1 className="text-light"><a href="index.html"><span>Moderna</span></a></h1>
                <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
            </div>

            <nav id="navbar" className="navbar">
                <ul>
                <li><Link className="" href="index.html">Home</Link></li>
                {/* <li><Link href="about.html">About</Link></li>
                <li><Link href="services.html">Services</Link></li>
                <li><Link href="portfolio.html">Portfolio</Link></li>
                <li><Link href="team.html">Team</Link></li> */}
                <li><Link className="active" href="blog.html">Blog</Link></li>
                {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                    <ul>
                    <li><a href="#">Drop Down 1</a></li>
                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                        <ul>
                        <li><a href="#">Deep Drop Down 1</a></li>
                        <li><a href="#">Deep Drop Down 2</a></li>
                        <li><a href="#">Deep Drop Down 3</a></li>
                        <li><a href="#">Deep Drop Down 4</a></li>
                        <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Drop Down 2</a></li>
                    <li><a href="#">Drop Down 3</a></li>
                    <li><a href="#">Drop Down 4</a></li>
                    </ul>
                </li>
                <li><a href="contact.html">Contact Us</a></li> */}
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>

            </div>
        </header>
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/blogs" element={<PostsComponent />} />
        </Routes>
        </>
    )
}