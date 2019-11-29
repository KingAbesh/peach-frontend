import React from "react";


import { CoreStacks } from "./core-stacks.component";
import {CorestackWrapper} from "./Corestacks.styles"

import reactlogo from "../../../Peach/React.svg";
import vuelogo from "../../../Peach/Vue.png";
import laravellogo from "../../../Peach/Laravel.png";
import javalogo from "../../../Peach/Java.png";

const stacks = [
  { icon: `${reactlogo}`, text: "React" },
  { icon: `${vuelogo}`, text: "Vue" },
  { icon: `${laravellogo}`, text: "Laravel" },
  { icon: `${javalogo}`, text: "Java" }
];

export const CoreStack = () => (
  <CorestackWrapper>
    <div className="core__stacks">
      <div className="core">
        <h3>Core Stacks</h3>
        <p>
          Here are a few packages our engineers work with to ensure an excellent
          & problem solving project is achieved
        </p>
      </div>
      <h3 className="aside">Blog</h3>
      <div className="card__flex">
        {stacks.map((stack, i) => (
          <CoreStacks {...stack} key={i} />
        ))}
      </div>
      <div className="blog">
        <span>Aug 6, 2019</span>
        <h4>
          Figma Uyo Meetup <br /> -Techpoint
        </h4>
        <p>
          On Wednesday, 27th June, a Figma Uyo Meetup was held in the University
          of Uyo organized by Mfonobong Umondia who is...
        </p>
        <br />
        <br />
        <span>Aug 6, 2019</span>
        <h4>
          Figma Uyo Meetup <br /> -Techpoint
        </h4>
        <p>
          On Wednesday, 27th June, a Figma Uyo Meetup was held in the University
          of Uyo organized by Mfonobong Umondia who is...
        </p>
        <button className="btn btn-outline-primary button mt-4">Read More</button>
      </div>
    </div>
  </CorestackWrapper>
);
