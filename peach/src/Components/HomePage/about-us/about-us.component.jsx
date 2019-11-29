import React from "react";
import { AboutUsWrapper } from "./about-us.styles";

export const AboutUs = () => (
  <AboutUsWrapper>
    <h2>What Clients Say About Us..</h2>
    <div class="card card-1 col-sm-5">
      <div class="card-body">
        <p class="card-text">
          “This is an agency which focuses on their clients, whether that be in
          terms of management style, or all the things which are done.”ional
          content.
        </p>
        <div className="bottom-text">
          <span>
            Kelechi Ajibade Okon <br />
            CEO, Limeshop
          </span>
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg"
            className="img-fluid z-depth-1 rounded-circle"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="card card-1 col-sm-5">
      <div class="card-body">
        <p class="card-text">
          “Amazing team to work with. Services are top notvh and excellence is
          ascertained.
        </p>
        <div className="bottom-text">
          <span>
            Bamidele Chukwudi <br />
            CEO, Groove Music
          </span>
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg"
            className="img-fluid z-depth-1 rounded-circle"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="card card-1 col-sm-5">
      <div class="card-body">
        <p class="card-text">
          “This is an agency which focuses on their clients, whether that be in
          terms of management style, or all the things which are done.”
        </p>
        <div className="bottom-text">
          <span>
            Kelechi Ajibade Okon <br />
            CEO, Limeshop
          </span>
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg"
            className="img-fluid z-depth-1 rounded-circle"
            alt=""
          />
        </div>
      </div>
    </div>
  </AboutUsWrapper>
);
