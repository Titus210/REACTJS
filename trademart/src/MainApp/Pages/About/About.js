import React from 'react'

function AboutUs() {
  return (
    <div class="section">
      <div class="container">
        <div class="cont-section">
          <div class="title">
            <h1>About Us</h1>
          </div>
          <div class="content">
            <h3>We are online based Eccomerce website</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ratione cum optio quod corporis fugit eveniet mollitia perspiciatis quos fuga aliquam.
              Esse minima quia tempora impedit, repellat quae aut dicta reprehenderit asperiores, dolorem
              porro!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, in.
            </p>
            <div class="button">
              <a href="/">Read More</a>
            </div>
          </div>


          <div class="social">
            <a href=""><i class="fa fab fa-facebook-f"></i></a>
            <a href=""><i class="fa fab fa-twitter"></i></a>
            <a href=""><i class="fa fab fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="image-section">
          <img src="business2.jpg" alt="About Image"/>
        </div>
      </div>
    </div>
  )
}

export default AboutUs