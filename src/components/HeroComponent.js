function HeroComponent () {

    return(
        <section id="hero">
            <div className="hero-container">
            <div id="heroCarousel" data-bs-interval="5000" className="carousel slide carousel-fade" data-bs-ride="carousel">

                <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

                <div className="carousel-inner" role="listbox">

                <div className="carousel-item active" style={{backgroundImage: `url(assets/imgages/slider/slide-1.jpg)`}}>
                    <div className="carousel-container">
                    <div className="carousel-content">
                        <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Eterna</span></h2>
                        <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                        <a href="" className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
                    </div>
                    </div>
                </div>

                <div className="carousel-item" style={{backgroundImage: `url(assets/imgages/slider/slide-2.jpg)`}}>
                    <div className="carousel-container">
                    <div className="carousel-content">
                        <h2 className="animate__animated fanimate__adeInDown">Lorem <span>Ipsum Dolor</span></h2>
                        <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                        <a href="" className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
                    </div>
                    </div>
                </div>

                <div className="carousel-item" style={{backgroundImage: `url(assets/imgages/slider/slide-3.jpg)`}}>
                    <div className="carousel-container">
                    <div className="carousel-content">
                        <h2 className="animate__animated animate__fadeInDown">Sequi ea <span>Dime Lara</span></h2>
                        <p className="animate__animated animate__fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
                        <a href="" className="btn-get-started animate__animated animate__fadeInUp">Read More</a>
                    </div>
                    </div>
                </div>

                </div>

                <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                </a>

                <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                </a>

            </div>
        </div>
    </section>
    )
}

export default HeroComponent;