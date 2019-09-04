import React from 'react';
import { MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import styled from 'styled-components';

const Styles = styled.header`
  .header {
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    position: relative;
    display: flex;
    padding: 0 !important;
    overflow: hidden;
    // height: 100%;
    left: 0px;
    margin: 0px !important;
    // top: -200px;y
    color: white;
    background: #3b7dd8;
    background-size: cover !important;
    // box-shadow: 0px 8px 11px #a7cafb;
    z-index: 1;
  }

  h2 {
    margin-left: 100px !important;
    margin-top: 140px !important;
  }

  .Btn {
    border-radius: 100px !important;
    float: right;
    margin-right: 50px;
    margin-top: 30px !important;
  }

  @media only screen and (max-width: 529px) {
    .peach {
      display: block;
      text-align: center;
      margin-left: -50px;
    }

    .Btn {
    display: flex;
    width: 50%
    margin-bottom: 40px;
    align-self: center;
    }
    }
`;

export const Header = () => (
  <Styles>
    <MDBRow className="header">
      <MDBCol md="6" xs="12" className='peach'>
        <h2 className="mb-5">
          Peach remains steadfast and committed to progressive innovations for
          the benefit of one and all
        </h2>
      </MDBCol>
      <MDBCol md="6">
        <MDBBtn color="danger" className="Btn">
          Register
        </MDBBtn>
      </MDBCol>
    </MDBRow>
  </Styles>
);
