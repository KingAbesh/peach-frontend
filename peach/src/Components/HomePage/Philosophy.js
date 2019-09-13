import React from "react";
import styled from "styled-components";

const Styles = styled.section`
  .philosophy {
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
    font-size: 1.5em;
    height: 100%;
    display: grid;
    width: 100vw;
    background: #BFD6F6
    padding-right: 3vw;
    grid-template-columns: repeat(4, 200px);
    justify-content: space-evenly;
    overflow: hidden;
    align-content: center;
    div {
      max-height: 100%;
      width: 150%;
      overflow: hidden;
      padding: 1em;
      transition: 0.5s;
      &:hover {
      width: 170%;
      background: #3b7dd8;
      color: #FFF;
      z-index: 45;
      h3, p {
        color: #FFF;
      }
      }
    }
  }

  p,
  h3 {
    color: #3b7dd8;
    margin-bottom: 1em;
  }

  @media only screen and (max-width: 1067px) {
    .philosophy {
      grid-template-columns: 1fr;
      div {
        margin-bottom:2em;
        width: 90%;
        padding-top: 1em;
        &:hover {
        z-index: 1;
        margin-bottom:2em;
        width: 90%;
        padding-top: 1em;
        }
      }
    }
  }
`;

const Philosophy = () => (
  <Styles>
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
  </Styles>
);

export { Philosophy };
