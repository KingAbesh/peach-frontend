import React from 'react';
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBIcon
} from 'mdbreact';

export const CoreStacks = ({ icon, style, text }) => (
  <MDBCol>
    <MDBCard>
      <MDBCardBody className="text-center">
        <MDBCardTitle />
        <MDBIcon fab icon={icon} style={style} />
        <MDBCardText>{text}</MDBCardText>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
);
