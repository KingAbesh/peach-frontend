import React from "react";
import { CoreStacks } from "./CoreStacks";
import styled from "styled-components";
import reactlogo from "../../Peach/React.svg";
import vuelogo from "../../Peach/Vue.png";
import laravellogo from "../../Peach/Laravel.png";
import javalogo from "../../Peach/Java.png";

const Styles = styled.section`
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  margin-top: 4em;
  padding: 3vw;
  .core__stacks {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 5em;
    grid-row-gap: 2em;
    width: 97vw;
    height: 100%;
    overflow: hidden;
    grid-template-areas:
      "core aside"
      "card-flex blog";

    .card__flex {
      display: grid;
      grid-template-columns: repeat(4, 150px);
      justify-content: space-around;
      grid-area: card-flex;
    }

    h3 {
      display: inline-block;
      color: #3b7dd8;
      margin-top: 50px;
    }

    .aside {
      grid-area: aside;
    }

    .core {
      grid-area: core;
    }

    .blog {
      grid-area: blog;
    }

    .button {
      background: #3b7dd8 !important;
    }
  }
  
  @media only screen and (max-width: 1067px) {
    .core__stacks {
      grid-template-columns: 1fr;
      width: 100vw;
      height: 100%;
      grid-template-areas:
      "core"
      "card-flex"
      "aside"
      "blog";
      .card__flex {
        grid-template-columns: repeat(2, 300px);
        justify-content: space-around;
        .corestacks {
          margin: 0 2em 3em 0;
        }
      }
        }
      }
    @media only screen and (max-width: 760px) {
      .core__stacks {
        grid-template-columns: 1fr;
        width: 100vw;
        height: 100%;
        grid-template-areas:
        "core"
        "card-flex"
        "aside"
        "blog";
    .card__flex {
        grid-template-columns: 300px;
        justify-content: space-around;
        .corestacks {
          margin: 0 0 3em 0;
        }
        }
      }
    }
  }
    `;

const stacks = [
  { icon: `${reactlogo}`, text: "React" },
  { icon: `${vuelogo}`, text: "Vue" },
  { icon: `${laravellogo}`, text: "Laravel" },
  { icon: `${javalogo}`, text: "Java" }
];

export const CoreStack = () => (
  <Styles>
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
        <button className="btn btn-primary button">Read More</button>
      </div>
    </div>
  </Styles>
);
