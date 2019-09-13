import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .corestacks {
    height: 150px;
    background: #3b7dd8;
    color: #FFF;
    box-shadow: 0px 8px 11px rgba(0, 0, 0, 0.25);
    display: flex !important;
    align-items: center;
    padding: 0;
    transition: 0.5s;
    &:hover {
      background: #E3E3E3;
      color: rgba(110, 110, 110, 0.6);
      color: #000;
    }
    p {
      position: absolute;
      bottom: 0;
      right: 40%;
    }

    div {
      width: 100%;
    }

    img {
      display: block;
      width: 50%;
      height: 70%;
      margin: 0 auto;
    }

  }
`;

export const CoreStacks = ({ icon, text }) => (
  <Styles>
    <div className="card corestacks">
      <div className="card-body">
        <div />
        <img src={icon} alt={text} />
        <p>{text}</p>
      </div>
    </div>
  </Styles>
);
