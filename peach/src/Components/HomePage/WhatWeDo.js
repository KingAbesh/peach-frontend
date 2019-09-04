import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { MDBIcon } from 'mdbreact';
import styled from 'styled-components';

const Styles = styled.div`
  .whatwedo {
    font-family: 'Quicksand', sans-serif;
    font-weight: bold;
    position: static;
    // height: 200px !important;
    width: 100%;
    margin-top: 100px;
    display: block;
    overflow: hidden;
    left: 0px;
    // margin-top: 25rem !important;
    background: white;
    padding-top: 20px;
  }

  h2 {
    // margin: 150px;
    margin-bottom: 20px;
    color: #3b7dd8;
  }
`;

const WhatWeDo = () => {
  return (
    <Container>
      <Styles>
        <section>
          <Row className="whatwedo">
            <h2>What We Do</h2>
            <Row className="text-center">
              <Col
                style={{
                  marginLeft: 50,
                  verticalAlign: 'center',
                  alignSelf: 'center',
                  width: 100
                }}
              >
                <MDBIcon
                  icon="hands-helping"
                  style={{
                    marginTop: 30,
                    marginLeft: 40,
                    fontSize: 50,
                    color: '#3b7dd8'
                  }}
                />
                <br />
                <p className="mt-2 ml-5">Product Design and Strategy</p>
              </Col>
              <Col
                style={{
                  marginLeft: 50,
                  verticalAlign: 'center',
                  alignSelf: 'center',
                  width: 100
                }}
              >
                <MDBIcon
                  icon="tv"
                  style={{
                    marginTop: 30,
                    marginLeft: 40,
                    fontSize: 50,
                    color: '#3b7dd8'
                  }}
                />
                <br />
                <p className="mt-2 ml-5">Product Development</p>
              </Col>
              <Col
                style={{
                  marginLeft: 50,
                  verticalAlign: 'center',
                  alignSelf: 'center',
                  width: 100
                }}
              >
                <MDBIcon
                  far
                  icon="lightbulb"
                  style={{
                    marginTop: 30,
                    marginLeft: 40,
                    fontSize: 50,
                    color: '#3b7dd8'
                  }}
                />
                <br />
                <p className="mt-2 ml-5">Technical Leadership</p>
              </Col>
            </Row>
          </Row>
        </section>
      </Styles>
    </Container>
  );
};

export default WhatWeDo;
