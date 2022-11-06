import React from 'react'

function ContactUs() {
  return (
    <>
      <section className="contact">
        <div className="content">
          <h3>Contact Us</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Repellat minima, consectetur excepturi odio assumenda laborum totam exercitationem
            atque sapiente. Aut, sint. Maxime at laudantium ex, quaerat dicta molestias? Non, perferendis?
          </p>
        </div>
        <div className="container contactInfo">
          <div className="box">
            <div className="icon"></div>
            <div className="text">
              <h3> Address</h3>
              <p></p>
            </div>
          </div>
          <div className="box">
            <div className="icon"></div>
            <div className="text">
              <h3> Phone</h3>
              <p></p>
            </div>
          </div>
          <div className="box">
            <div className="icon"></div>
            <div className="text">
              <h3> Email</h3>
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs