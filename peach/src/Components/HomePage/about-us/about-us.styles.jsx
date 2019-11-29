import styled from "styled-components";

export const AboutUsWrapper = styled.section`
  padding: 0 80px;

  h2 {
    margin-top: 10rem;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 45px;
    /* identical to box height */
    color: #3a7190;
  }
  p {
      font-style: normal !important;
      font-weight: bold !important;
      line-height: 26px !important;
      color: #6e6e6e !important;
    }

  & > div {
    margin: 7rem 0;
    background: #fafafa !important;
    box-shadow: 0px 8px 11px rgba(0, 0, 0, 0.25) !important;
    
    div.bottom-text {
        display: flex !important;
        justify-content: space-between !important;

        img {
            width: 70px;
            height: 70px;
        }
    }
  }

  div:nth-child(2),
  div:nth-child(4) {
    display: block !important;
    right: -58% !important;
  }

  @media (max-width: 768px){
      display: grid;
      grid-template-columns: 1fr;
      min-width: 100%;
      padding: 0 30px;

      h2 {
          margin-top: 5rem;
      }

      div:nth-child(2),
  div:nth-child(4) {
    display: inherit !important;
    right: 0 !important;
  }

  & > div {
      width: inherit;
      margin: 4.5rem 0;
      height: 70%;
      max-height: 70%;
  }
  }
`;
