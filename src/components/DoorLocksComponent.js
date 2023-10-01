import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

function DoorLocksComponent () {

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
                            <h2 href="#">SDOOR LOCK PRODUCTS</h2>
                            <span>Exclusive Country’s Representative for...<img style="width: 150px" src="assets/images/partners/img-4.jpg" alt=""/></span>
                        </div>

                        <div className="entry-meta">
                            <ul>
                            {/* <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-single.html">John Doe</a></li>
                            <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                            <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li> */}
                            </ul>
                        </div>

                        <div className="entry-content">
                        <p>in Ethiopia for TESA ASSA ABLOY the leading Spanish manufacturer of locking and access control solutions for the residential and institutional market.<br/>
Worldwide TESA ASSA ABLOY has a long and proven track record beginning from 1941 which is in the market for more than 80 Successful years.<br/>
TESA ASSA ABLOY is renowned for its quality, innovation and the application of the latest technology in its products.<br/>
Our solutions are tested and certified according to EN Standards (with marking) and are compatible with environmental requirements.<br/>
We offer a complete range of access solutions that make people feel safe in a simple and easy to use way in any kind of building and environment.</p>
							
							     
							<h3>Product Category</h3>
                                		 <p>
											 <li><i className="ti-check"></i>Security locks</li>
											 <li><i className="ti-check"></i>Patented Locks</li>
											 <li><i className="ti-check"></i>Master Keyed Cylinders</li>
											 <li><i className="ti-check"></i>Door Closers and Hinges</li>
											 <li><i className="ti-check"></i>Smartair Electronic Door Locking Solutions</li>
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

export default DoorLocksComponent;