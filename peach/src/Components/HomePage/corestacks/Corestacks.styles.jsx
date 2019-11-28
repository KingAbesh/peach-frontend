import styled from "styled-components";


export const CorestacksWrapper = styled.article`
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


export const CorestackWrapper = styled.section`
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