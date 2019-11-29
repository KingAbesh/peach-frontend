import styled from "styled-components";

export const PhilosophyWrapper = styled.section`
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
    padding: 0 25px;
    font-size: 1.3em;
    height: 100%;
    display: grid;
    width: 100%;
    background: #BFD6F6;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-evenly;
    overflow: hidden;
    align-content: center;
    div {
      height: 100%;
      word-break: normal;
      word-wrap: wrap;
      width: 100%;
      overflow: hidden;
      padding: 1em;
      transition: 0.5s;
      &:hover {
      background: #3b7dd8;
      color: #FFF;
      transform:scale(1.1);
      z-index: 45;
      h3, p {
        color: #FFF;
      }
      }
    }


  p,
  h3 {
    color: #3b7dd8;
    margin-bottom: 1em;
  }

  @media only screen and (max-width: 767px) {
      grid-template-columns: 1fr;
      div {
        margin: auto;
        text-align: center;
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
`