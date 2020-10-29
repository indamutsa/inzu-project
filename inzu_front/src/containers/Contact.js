import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        {/* inner page banner */}
        <section className="innerpage_banner py-5">
          <div className="dot1"></div>
        </section>
        {/* //inner page banner */}
        <section className="contact_form py-5">
          <div className="container">
            <div className="heading">
              <h1 className="heading text-capitalize mb-5 pb-3">
                <span>Contact</span> Us
              </h1>
              <h4 className="position cont">CONTACT</h4>
            </div>
            <form action="#" method="post">
              <div className="input-w3ls w3ls-left">
                <input
                  type="text"
                  className="name"
                  name="First Name"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="input-w3ls w3ls-rght">
                <input
                  type="text"
                  className="name"
                  name="Last Name"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="input-w3ls w3ls-left">
                <input
                  type="email"
                  className="name"
                  name="Email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="input-w3ls w3ls-rght">
                <input
                  type="text"
                  className="name"
                  name="Subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="input-w3ls">
                <textarea
                  placeholder="Your Message"
                  required
                  defaultValue={""}
                />
              </div>
              <div className="input-w3ls">
                <input type="submit" defaultValue="Send Message" />
              </div>
            </form>
          </div>
        </section>
        {/* contact */}
        <section className="contact">
          <iframe
            title="myFrame"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555687309!2d-122.50815494344963!3d37.75781499229416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1486123800256"
            className="map"
          />
          <div className="container-fluid">
            <div className="row contact_info">
              <div className="col-md-4 col-sm-6 contact-grid1">
                <div className="row contact_inner_grid1 my-3">
                  <div className="col-2 p-0">
                    <span className="fas fa-home" />
                  </div>
                  <div className="col-10">
                    <h3 className="mb-3">head quarters</h3>
                    <p>234H Berlin street.</p>
                    <p>Caldin Merid, HC 0096</p>
                    <p>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 contact-grid1">
                <div className="row contact_inner_grid1 my-3">
                  <div className="col-2 p-0">
                    <span className="fas fa-ticket-alt" />
                  </div>
                  <div className="col-10">
                    <h3 className="mb-3">Sales</h3>
                    <p>Hitachi estate group</p>
                    <p>BH Developers </p>
                    <p>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 contact-grid1">
                <div className="row contact_inner_grid1 my-3">
                  <div className="col-2 p-0">
                    <span className="fas fa-share-square" />
                  </div>
                  <div className="col-10">
                    <h3 className="mb-3">Social </h3>
                    <a href="/#">
                      <span className="fab fa-facebook-square" />
                      Facebook
                    </a>
                    <a href="/#">
                      <span className="fab fa-twitter-square" />
                      Twitter
                    </a>
                    <a href="/#">
                      <span className="fab fa-linkedin" />
                      Linked-in
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 contact-grid1">
                <div className="row contact_inner_grid1 my-3">
                  <div className="col-2 p-0">
                    <span className="fas fa-users" />
                  </div>
                  <div className="col-10">
                    <h3 className="mb-3">Careers </h3>
                    <a href="/#">Sales executive</a>
                    <a href="/#">Marketing manager</a>
                    <a href="/#">Senior executive</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 contact-grid1">
                <div className="row contact_inner_grid1 my-3">
                  <div className="col-2 p-0">
                    <span className="fas fa-phone" />
                  </div>
                  <div className="col-10">
                    <h3 className="mb-3">Contact numbers </h3>
                    <p>+49 173 890 4394</p>
                    <p>+49 177 688 9134.</p>
                    <p>+49 421 568 7560</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact */}
      </div>
    );
  }
}

export default Contact;
