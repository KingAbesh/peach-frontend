import React from 'react';
import { CoreStacks } from './CoreStacks';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import styled from 'styled-components';

const Styles = styled.section`
  font-family: 'Quicksand', sans-serif;
  font-weight: bold;
  position: static;
  // margin-top: 70rem;
  display: block;
  width: 90%;
  height: 100%;
  margin-top: 150px;
  overflow: hidden;

  h3 {
    display: inline-block;
    color: #3b7dd8;
    margin-bottom: 50px;
  }

  .right {
    float: right;
    margin-right: 210px;
  }
`;

const stacks = [
  { icon: 'react', text: 'React', style: { fontSize: 50 } },
  { icon: 'vuejs', text: 'Vue', style: { fontSize: 50 } },
  { icon: 'laravel', text: 'Laravel', style: { fontSize: 50 } },
  { icon: 'java', text: 'Java', style: { fontSize: 50 } }
];

export const CoreStack = () => (
  <MDBContainer>
    <Styles>
      <h3>Core Stacks</h3>
      <h3 className="right">Blog</h3>
      <p>
        Here are a few packages our engineers work with to ensure <br /> an
        excellent & problem solving project is achieved
      </p>
      <MDBRow className="pr-5" xs="12">
        {stacks.map((stack, i) => (
          <CoreStacks {...stack} key={i} />
        ))}
        <MDBCol md="4" xs="12" className="pl-5" style={{marginRight: -50}}>
          <span>Aug 6, 2019</span>
          <h4>
            Figma Uyo Meetup <br /> -Techpoint
          </h4>
          <p>
            On Wednesday, 27th June, a Figma Uyo Meetup was held in the
            University of Uyo organized by Mfonobong Umondia who is...
          </p>
          <br />
          <br />
          <span>Aug 6, 2019</span>
          <h4>
            Figma Uyo Meetup <br /> -Techpoint
          </h4>
          <p>
            On Wednesday, 27th June, a Figma Uyo Meetup was held in the
            University of Uyo organized by Mfonobong Umondia who is...
          </p>
          <MDBBtn color="primary">Read More -></MDBBtn>
        </MDBCol>
      </MDBRow>
    </Styles>
  </MDBContainer>
);
