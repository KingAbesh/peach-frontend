import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import styled from 'styled-components';

const Styles = styled.div`
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  font-size: 20px;
  position: static;
  display: flex;
  justify-content: center;
  flex: 1;
  overflow: hidden;
  // top: 50rem;
  margin-top: 150px;
  padding: 30px;

  p,
  h3 {
    color: #3b7dd8;
  }
`;

const Philosophy = () => (
  <div className="px-auto" style={{ background: '#c8d7dc' }}>
    <MDBContainer>
      <Styles>
        <MDBRow>
          <MDBCol md="3" xs="12">
            <h3>Philosophy</h3>
            <h6>
              Peach remains steadfast & committed to progressive innovations for
              the benefit of one and all
            </h6>
          </MDBCol>
          <MDBCol md="3" xs="12">
            <h4>01</h4>
            <p>Reinventing the future</p>
          </MDBCol>
          <MDBCol md="3" xs="12">
            <h4>02</h4>
            <p>Built on cutting edge technology</p>
            <small>
              Promoting creativity and technology amongst African youths
              believing it is a key driver in Africa's socio-economic growth
            </small>
          </MDBCol>
          <MDBCol md="3" xs="12">
            <h4>03</h4>
            <p>Technical Leadership</p>
          </MDBCol>
        </MDBRow>
      </Styles>
    </MDBContainer>
  </div>
);

export { Philosophy };
