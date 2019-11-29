import styled from 'styled-components';

export const IntegrationsWrapper = styled.section`
  font-family: 'Quicksand', sans-serif;
  font-weight: 10px;
  margin-top: 80px;
  padding-bottom: 50px;
  h2 {
    bottom: 70px;
    padding-top: 50px;
    color: #3b7dd8;
    font-size: 30px;
  }

  h4 {
    font-weight: 1000;
    margin-bottom: 1.5rem;
  }

  .integ {
    display: flex;
    top: 50px;
    justify-content: center;
  }

  @media (max-width: 768px){
    text-align: center;
  }
`;