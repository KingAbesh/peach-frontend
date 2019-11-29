import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import {IntegrationsWrapper} from "./integration.styles"




export const Integrations = () => (
  <section className="px-auto" style={{ background: 'rgb(213, 215, 216)' }}>
    <MDBContainer>
      <IntegrationsWrapper>
        <h2>Our integrations</h2>
        <br />
        <hr />
        <br />
        <MDBRow className="integ">
          <MDBCol md="3" className="my-5">
            <h4>Creativity</h4>
            <p>Our Imagination is never limited to our immediate environment</p>
          </MDBCol>
          <MDBCol md="3" xs="12" className="my-5">
            <h4>Technology</h4>
            <p>
              We build user friendly products using your own technology &
              process
            </p>
          </MDBCol>
          <MDBCol md="3" xs="12" className="my-5">
            <h4>Interaction</h4>
            <p>
              Interacting with our clients results in being a few steps to
              excellence
            </p>
          </MDBCol>
          <MDBCol md="3" xs="12" className="my-5">
            <h4>Goal Setting</h4>
            <p>
              Time wasted is never recovered. Set goals are targeted to be
              achieved.
            </p>
          </MDBCol>
        </MDBRow>
      </IntegrationsWrapper>
    </MDBContainer>
  </section>
);
