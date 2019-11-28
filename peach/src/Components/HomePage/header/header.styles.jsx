import headerimage from "../../../Peach/headerimage.svg";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
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
 
  .header__div {
      padding: 50px;
      min-width: 50vw;
      text-align: center;
      padding-top: 2em;
      margin: auto;
      h2 {
        font-size: 1.7rem;
        
      }
      img {
        display: block;
        position: absolute;
        top: 15px;
      }
      &:nth-child(2){
        img {
          width: 35vw;
          height: 100vh;
        }
      }
    }
  @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      width: 100%;
      .header__div {
      margin: 10rem auto;
      min-width: 90vw;
      text-align: center;
      padding: 0 1rem;
      top: -50rem;
      h2 {
        font-size: 1.4rem;
        width: 100%;
        
      }
      img {
        height: 40px;
      }
      &:nth-child(2){
        img {
          margin-top: 300px;
          height: inherit;
          width: 50%;
        }
      }
    }
    }
`