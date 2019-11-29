import React from "react";
import {CorestacksWrapper} from "./Corestacks.styles"


export const CoreStacks = ({ icon, text }) => (
  
  <CorestacksWrapper>
    <div className="card corestacks">
      <div className="card-body">
        <div />
        <img src={icon} alt={text} />
        <p>{text}</p>
      </div>
    </div>
  </CorestacksWrapper>
);
