import styled from "styled-components";

export const WhatwedoWrapper = styled.section`
  margin: 0;
  margin-bottom: 5em;
  .whatwedo {
    font-family: "Quicksand", sans-serif;
    font-weight: bold;
    display: grid;
    padding: 0 40px;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-content: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    div {
      min-width: 30vw;
      height: 10em;
      margin: 0 auto;
      margin-top: 5em;
      text-align: center;
    }
  }

  img {
    display: block;
    left: 25%;
    margin: auto;
    margin-bottom: 2rem;
  }

  h2 {
    margin-top: 5em;
    margin-left: 40px;
    color: #3b7dd8;
    font-size: 30px;
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

        img {
          z-index: 1;
        }
      }
    }
    h2 {
      text-align: center;
      margin-left: 0;
      margin-bottom: 5rem;
      margin-top: 2rem;
    }
  }
`;
