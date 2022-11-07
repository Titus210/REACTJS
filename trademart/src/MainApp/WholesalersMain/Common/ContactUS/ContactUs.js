import React from 'react'

import "./ContactUS.css"
function ContactUs() {
  const Details = [
    {
      userStreet: "NGL-112, off View Street",
      userEmail: "Sofastore@gmail.com",
      userPhone: "+254-20311728"
    }
  ]
  return (
    <>
      <section className="contact">
        <div className="content">
          <h3>Contact Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Repellat minima, consectetur excepturi odio assumenda laborum totam exercitationem
            atque sapiente. Aut, sint. Maxime at laudantium ex, quaerat dicta molestias? Non, perferendis?
          </p>
        </div>{
          Details.map((value) => {
            return (
              <div className="container">
                <div className="contactInfo">
                  <div className="box">
                    <div className="icon"><i className="fa fa-map-marker"></i></div>
                    <div className="text">
                      <h3> Address</h3>
                      <p>{value.userStreet}</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="icon"><i className="fa fa-phone"></i></div>
                    <div className="text">
                      <h3> Phone</h3>
                      <p>{value.userPhone}</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="icon"><i className="fa fa-envelope"></i></div>
                    <div className="text">
                      <h3> Email</h3>
                      <p>{value.userEmail}</p>
                    </div>
                  </div>
                </div>
                {/* Contact Form */}

                <div className="contactForm">
                  <form action="">
                    <h2>Send Message</h2>
                    <div className="inputBox">
                      <input type="text" required="required"  />
                      <span>Full Name</span>
                    </div>
                    <div className="inputBox">
                      <input type="text" required="required" />
                      <span>Email</span>
                    </div>
                    <div className="inputBox">
                      <textarea required="required"></textarea>
                      <span>Type your Message here</span>
                    </div>
                    <div className="button">
                      <input type="submit" value = "Send"/>
                    </div>
                  </form>
                </div>
              </div>
            )
          })}
      </section>
    </>
  )
}

export default ContactUs