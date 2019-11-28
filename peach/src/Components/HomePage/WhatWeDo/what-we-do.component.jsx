import React from "react";
import firstLogo from "../../../Peach/tap.png";
import secondLogo from "../../../Peach/Group.png";
import thirdLogo from "../../../Peach/Vector.png";
import {WhatwedoWrapper} from './what-we-do.styles';

const WhatWeDo = () => {
  return (
    <WhatwedoWrapper>
      <h2>What We Do</h2>
      <div className="whatwedo">
        <div>
          <img src={firstLogo} alt="first_logo" />
          <p>Product Design and Strategy</p>
        </div>
        <div>
          <img src={secondLogo} alt="second_logo" />
          <p>Product Development</p>
        </div>
        <div>
          <img src={thirdLogo} alt="third_logo" />
          <p>Technical Leadership</p>
        </div>
      </div>
    </WhatwedoWrapper>
  );
};

export default WhatWeDo;
