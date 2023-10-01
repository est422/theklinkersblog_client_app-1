import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

function CeramicTilesComponent () {

    return(
        <>
        <HeaderComponent />
        <section id="blog" className="blog py-5">
            <div className="container" data-aos="fade-up">

                <div className="row">

                    <div className="col-lg-12 entries">

                        <article className="entry entry-single">

                        <div className="entry-img">
                            <img src="assets/images/project-single/img-6.jpg" alt="" className="img-fluid" />
                        </div>

                        <div className="entry-title">
                            <h2 href="#">CERAMICS TILES PRODUCTS</h2>
                        </div>

                        <div className="entry-meta">
                            <ul>
                            {/* <li className="d-flex align-items-center"><i className="bi bi-person"></i> <a href="blog-single.html">John Doe</a></li>
                            <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <a href="blog-single.html"><time datetime="2020-01-01">Jan 1, 2020</time></a></li>
                            <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <a href="blog-single.html">12 Comments</a></li> */}
                            </ul>
                        </div>

                        <div className="entry-content">
                        <p>When it comes to finding the perfect tiles to go with your new bathroom, kitchen, living area or outdoor space, EKT CERAMICS® has you covered with over 18 years of tile knowledge, we are passionate about bringing you the latest tiling trends and accessories. <br/> 
								   We are supplying tiles both locally produced and imported. 
								   Our product range categorized as below.</p>
							<p><li>1. Imported Porcelain Tile: Different size with Thickness 8-12 mm, both Matt and polished finish. Certified (European standard)</li>
								<li> 2. Ceramic floor tile: 30x30, 40x40,50x50 and 60x60 locally produced ceramic tiles.</li>
								<li> 3. Internal wall tile: 20x30,30x45,30x60</li>
								<li>4. External wall tile: 6x24 </li>
								<li>5. Wooden tiles: 15x60,15x80,15x90,20x100,20x120 and others</li> </p>
							     
									<h3>Product Category</h3>
                                		 <p>
											 <ul>
												 <li>Imported </li> 
												  <li><i className="ti-check"></i>Porcelain</li>
											 <li><i className="ti-check"></i>Matt</li>
											 <li><i className="ti-check"></i>Polished</li>
											 <li><i className="ti-check"></i>Wooden Color ceramics</li>
											 <li><i className="ti-check"></i>PVC Tile </li>
												  <li><i className="ti-check"></i> Local</li>
												  <li><i className="ti-check"></i>Internal Wall Tile </li>
												  <li><i className="ti-check"></i>Floor Tiles </li>
							
							
							
							
							</ul>								
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

export default CeramicTilesComponent;