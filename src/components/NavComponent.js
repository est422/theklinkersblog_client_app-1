import { Routes, Route, Link } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import PostsComponent from "./PostsComponent";


function navComponent () {

    return(
        <>
        {/* <header id="header" className="fixed-top d-flex align-items-center ">
            <div className="container d-flex justify-content-between align-items-center">

            <div className="logo">
                <h1 className="text-light"><a href="index.html"><span>Moderna</span></a></h1>
                <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>
            </div>

            <nav id="navbar" className="navbar">
                <ul>
                <li><Link className="" href="index.html">Home</Link></li>
                <li><Link className="active" href="blog.html">Blog</Link></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>

            </div>
        </header> */}
        <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/blogs" element={<PostsComponent />} />
        </Routes>
        </>
    )
}