import React from "react";
import {PhilosophyWrapper} from "./philosophy.styles"


const Philosophy = () => (
  <PhilosophyWrapper>
    <div className="philosophy">
      <div>
        <h3>Philosophy</h3>
        <h6>
          Peach remains steadfast & committed to progressive innovations for the
          benefit of one and all
        </h6>
      </div>
      <div>
        <h4>01</h4>
        <p>Reinventing the future</p>
      </div>
      <div>
        <h4>02</h4>
        <p>Built on cutting edge technology</p>
        <small>
          Promoting creativity and technology amongst African youths believing
          it is a key driver in Africa's socio-economic growth
        </small>
      </div>
      <div>
        <h4>03</h4>
        <p>Technical Leadership</p>
      </div>
    </div>
  </PhilosophyWrapper>
);

export { Philosophy };
