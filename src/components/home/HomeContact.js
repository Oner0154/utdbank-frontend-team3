import React from "react"

const HomeContact = () => {
  return (
    <section className="home-quick-contact-section section-minus-margin">
      <div className="container">
        <div className="home-quick-contact blue-gradient">
          <div className="logo-bg-icon">
            <div className="logo-bg-item">
              <img src="assets/images/circle.png" alt="icon" />
            </div>
            <div className="logo-bg-item">
              <img src="assets/images/square.png" alt="icon" />
            </div>
          </div>
          <div className="quick-contact-inner">
            <h2>
              What's thinking? <br />
              don't worry! get connected us
            </h2>
            <p>*We're willingly is here to answer your question about Aila</p>
            <ul className="section-button">
              <li>
                <a
                  href="contact-us.html"
                  className="btn1 orange-gradient btn-with-image"
                >
                  <i className="flaticon-agenda"></i>
                  <i className="flaticon-agenda"></i>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeContact
