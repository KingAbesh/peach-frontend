import React from "react";
import styled from "styled-components";
import childheaderimage from "../../Peach/undraw_creative_process_q6aw.svg";
import headerimage from "../../Peach/headerimage.svg";
import logo from "../../Peach/Group.svg";

const Styles = styled.header`
  .header {
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
    display: grid;
    min-width: 100vw;
    grid-template-columns: 350px 350px;
    color: white;
    min-height: 100vh;
    background-image: url(${headerimage});
    background-position: center;
    background-repeat: no-repeat;
    object-fit: cover;
    justify-content: space-around;
    overflow: hidden;
  }

  .header__div {
    min-width: 50vw;
    &:nth-child(1) {
      text-align: start;
      padding-top: 2em;
      h2 {
        font-size: 2.5rem;
      }
      &:nth-child(2){
        padding: 1em;
        img {
          width: 50vw;
          height: 100vh;
        }
      }
    }
    }
  }

  @media only screen and (max-width: 768px) {
    .header {
      grid-template-columns: 1fr;
      top: 0;
    }
    .header__div {
      justify-self: center;
      height: 100%;
      width: 100vw;
    }
  }
`;

export const Header = () => (
  <Styles>
    <div className="header">
      <div className="header__div">
        <div className="img__div">
          <img src={logo} alt="logo" />
        </div>
        <h2>
          Peach remains steadfast and committed to progressive innovations for
          the benefit of one and all
        </h2>
      </div>
      <div className="header__div div2">
        <img src={childheaderimage} alt="header_image" />
      </div>
    </div>
  </Styles>
);
