/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col, Progress } from "reactstrap";


// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import profile from "assets/img/brand/profile.jpeg";
import CardHeader from "reactstrap/lib/CardHeader";
import CardBody from "reactstrap/lib/CardBody";
import ProgressBar from 'react-bootstrap/ProgressBar';

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-primary alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={profile}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="sm"
                        >
                          Message
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">1x</span>
                          <span className="description">AWS Certified</span>
                        </div>
                        <div>
                          <span className="heading">3</span>
                          <span className="description">Deployed Sites</span>
                        </div>
                        <div>
                          <span className="heading">8 yrs</span>
                          <span className="description">Military Service</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Quentin P Young III{" "}
                      <span className="font-weight-light">, 30</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Seattle, WA
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Software Developer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of New Hampshire
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      Code Fellows
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          From working my family farm in Vermont to serving in Naval Aviation I have learned to value clean, versatile design and procedure.  I carry those values in the software I write, in addition to my leadership experience and even-keeled demeanor.
                        </p>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Show more
                        </a>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
          <section className="section">
            <Row className="justify-content-md-center">
              <Col className="order-lg-2" lg="3" >
                <Card className="card-plain shadow">
                  <CardHeader>
                    Languages
                  </CardHeader>
                  <CardBody>
                    <Container>
                      <Row>
                        <Col>
                          <p>Javascript</p>
                          <ProgressBar now={90} variant="secondary" />
                          <p>React.js</p>
                          <ProgressBar now={70} variant="secondary" />
                          <p>HTML</p>
                          <ProgressBar now={90} variant="secondary" />
                          <p>CSS</p>
                          <ProgressBar now={80} variant="secondary" />
                        </Col>
                      </Row>
                    </Container>
                  </CardBody>
                </Card>
              </Col>
              <Col className="order-lg-2" lg="3" >
                <Card className="card-plain shadow">
                  <CardHeader>
                    Tools
                  </CardHeader>
                  <CardBody>
                    <Container>


                      <Row>
                        <Col>
                          <p>JSON</p>
                          <ProgressBar now={80} variant="secondary" />
                          <p>AWS</p>
                          <ProgressBar now={40} variant="secondary" />
                          <p>Git</p>
                          <ProgressBar now={60} variant="secondary" />
                        </Col>
                      </Row>
                    </Container>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
