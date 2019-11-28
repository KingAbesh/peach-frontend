import headerimage from "../../../Peach/headerimage.svg";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  .header {
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    color: white;
    min-height: 100vh;
    background-image: url(${headerimage});
    background-position: center center;
    background-repeat: no-repeat;
    object-fit: cover;
    justify-content: space-evenly;
    overflow: hidden;
  }

  .header__div {
    min-width: 50vw;
    &:nth-child(1) {
      text-align: center;
      padding-top: 2em;
      left: 3rem;
      }
      h2 {
        font-size: 2rem;
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
`