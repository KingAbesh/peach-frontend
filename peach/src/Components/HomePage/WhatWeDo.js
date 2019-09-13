import React from "react";
import firstLogo from "../../Peach/tap.png";
import secondLogo from "../../Peach/Group.png";
import thirdLogo from "../../Peach/Vector.png";
import styled from "styled-components";

const Styles = styled.section`
    margin-bottom: 5em;
  .whatwedo {
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
    display: grid;
    grid-template-columns: repeat(3, 300px);
    justify-content: space-around;
    align-content: center;
    height: 100%;
    width: 97vw;
    overflow: hidden;
    div {
      min-width: 30vw;
      height: 10em;
      margin-top: 5em;
      text-align: center;
    }
  }

  h2 {
    margin-top: 5em;
    color: #3b7dd8;
    margin-left: 4em;
  }

  @media only screen and (max-width: 768px) {
    .whatwedo {
      grid-template-columns: 1fr;
      margin-top: 0;
      overflow: hidden;
      div {
        justify-self: center;
        align-self: center;
        text-align: center;
        margin-top: 0;
        margin-bottom: 4em;

        // &:nth-child(1){
        //   margin-top: 20em;
        // }
        img {
          z-index-1;
        }
      }
    }
    h2 {
      text-align: center;
      margin-left: 0;
      margin-bottom: 5em;
    }
  }
`;

const WhatWeDo = () => {
  return (
    <Styles>
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
    </Styles>
  );
};

export default WhatWeDo;
