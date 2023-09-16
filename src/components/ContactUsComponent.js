import FooterComponent from "./FooterComponent";

function ContactUsComponent () {

    return(
        <>
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-title">
                <h2 data-aos="fade-up">Contact</h2>
                {/* <p data-aos="fade-up">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                </div>

                <div className="row justify-content-center">

                <div className="col-xl-3 col-lg-4 mt-4" data-aos="fade-up">
                    <div className="info-box">
                    <i className="bx bx-map"></i>
                    <h3>Our Address</h3>
                    <p>Infront of Sahelete Meheret Square, Drar Mall 9th Floor, Addis Ababa, Ethiopia </p>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="100">
                    <div className="info-box">
                    <i className="bx bx-envelope"></i>
                    <h3>Email Us</h3>
                    <p>sales@theklinkers.et</p>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="info-box">
                    <i className="bx bx-phone-call"></i>
                    <h3>Call Us</h3>
                    <p>+251 116 61 0160</p>
                    </div>
                </div>
                </div>

                <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
                <div className="col-xl-9 col-lg-12 mt-4">
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="row">
                        <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                    </div>
                    <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                    </div>
                    <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>

                </div>

            </div>
        </section>
        <FooterComponent />
        </>
    )
}

export default ContactUsComponent;