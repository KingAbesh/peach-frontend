import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn
} from "mdbreact";
import { ContactFormWrapper } from "../contact-form/contact-form.styles";

export const ContactForm = () => (
  <ContactFormWrapper>
    <div>
      <h2>Bring that idea to reality!</h2>
      <span>
        Let’s hear that amazing idea of yours, work hand-in-hand and make that
        idea a reality and a success
      </span>
    </div>
    <MDBContainer>
      <MDBRow className="mx-auto">
        <MDBCol md="8" className="mx-auto">
          <MDBCard>
            <MDBCardBody>
              <form>
                {/* <p className="h4 text-center py-4">Share your idea with us</p> */}
                <div className="grey-text mx-auto">
                  <MDBInput
                    label="Full Name"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    className="mx-auto"
                  />
                  <MDBInput
                    label="Company Email"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    className="mx-auto"
                  />
                  <MDBInput
                    label="Phone Number"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    className="mx-auto"
                  />
                  <MDBInput
                    label="Country"
                    group
                    type="password"
                    validate
                    className="mx-auto"
                  />
                  <MDBInput
                    type="textarea"
                    rows="2"
                    label="Describe your idea"
                    className="mx-auto"
                  />
                </div>
                <div className="text-center py-4 mt-3 mx-auto">
                  <MDBBtn
                  color="blue" type="submit">
                    Submit
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </ContactFormWrapper>
);
