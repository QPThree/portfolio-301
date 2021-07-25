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
import MyCarousel from "./MyCarousel";
// nodejs library that concatenates classes
import classnames from "classnames";
import project1img from '../../assets/img/projects/fantascribe.jpeg';
import project2img from '../../assets/img/projects/salmoncookies.jpeg';
import project3img from '../../assets/img/projects/gitstop.jpeg';

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Carousel,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import CardHeader from "reactstrap/lib/CardHeader";
import mapleandi from '../../assets/img/brand/mapleandi.jpeg'


class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-primary">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Innovation & Collaboration{" "}
                        Through<span className="text-primary text-uppercase"> Leadership</span>
                      </h1>
                      <p className="lead text-white">
                        Together, let's better the world through technology, efficiency, and sustainability.
                      </p>
                      <div className="btn-wrapper">
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
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
                    className="fill-primary"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
                
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            {/* carousel here */}'
            

          </section>
          
         
          <section className="section section-lg pt-lg-0 mt--200">
          
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardHeader>
                          <CardImg className="img-fluid" src={project1img} alt='fantascribe'>

                          </CardImg>
                        </CardHeader>
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Fantascribe
                          </h6>
                          <p className="description mt-3">
                            Create create, sorte, and edit notes on all of your targeted fantasy football players. Notes can be assigned teams and positions, and subsequently ranked.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Javascript
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              CSS
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://github.com/QPThree/fantasy-player-notes"
                            onClick={e => e.preventDefault()}
                          >
                            View on Github
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardHeader>
                          <CardImg className="img-fluid" src={project2img} alt='gitstop'>

                          </CardImg>
                        </CardHeader>
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Gitstop
                          </h6>
                          <p className="description mt-3">
                            Play games and compete with the leaderboard at Gitstop!
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Javascript
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              CSS
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://earth-fire-water.github.io/gitstop/"
                            onClick={e => e.preventDefault()}
                          >
                            View on GitHub
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardHeader>
                          <CardImg className="img-fluid" src={project3img} alt='salmon cookies'>

                          </CardImg>
                        </CardHeader>
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Salmon Cookies
                          </h6>
                          <p className="description mt-3">
                            Store management site. Stores are rendered as objects. Form to add stores.  Store data sales-info is automatically calculated. Algorithm ranks the stores daily based on sales.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Javascript
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              HTML
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              CSS
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://github.com/QPThree/cookie-stand"
                            onClick={e => e.preventDefault()}
                          >
                            View on GitHub
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Coming soon
                          </h6>
                          <p className="description mt-3">
                            Come back soon!
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              TBD
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              TBD
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              TBD
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://github.com/QPThree/cookie-stand"
                            onClick={e => e.preventDefault()}
                          >
                            View on GitHub
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={mapleandi}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-secondary shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>My Background</h3>
                    <p>
                      My name is Quentin Young, I grew up on a dairy farm in the hills of Vermont.
                      In 2013, I enlisted in the Navy directly after graduating from the University of New Hampshire.
                      I've always been attracted to math and logic.
                      I decided to pursue software and not only start a career in development, but to eventually pursue my masters in engineering.
                      <br></br>
                      <br></br>
                      Outside of software, I'm a marathoner (Boston Marathon qualifier), summit mountains (Whitney, highest in lower 48), and ski!
                      Im currently training for an Ultra Marathon in the Olympic mountains this fall.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="primary"
                            >
                              <i className="ni ni-user-run" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              2020 Boston Marathon Qualifier
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="primary"
                            >
                              <i className="ni ni-compass-04" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Ultra-Marathoner</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="primary"
                            >
                              <i className="ni ni-diamond" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Spartan Race Winner - Boston, MA 2012
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>

          <section className="section section-lg bg-gradient-primary">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">My Truths</h2>
                  <p className="lead text-white">
                   My vision and guidance. I carry these oaths with me in my work, relationships, and life. 
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Compassion</h5>
                  <p className="text-white mt-3">
                    Our paths are walked differently. You might never know what other's have been through. Respect, empathy, and kindness is due to those on all sides of you. 
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Impeccable with my word</h5>
                  <p className="text-white mt-3">
                    Speak with integrity. Own your words. Not to be used to speak down on others.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Composure</h5>
                  <p className="text-white mt-3">
                    Stress and downfall will occur. Remaining focused and guided when chaos is around you is what separates a leader. 
                  </p>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-secondary"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Let's work together</h4>
                      <p className="mt-0">
                        Or at least talk about it over a coffee.
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Your name"
                            type="text"
                            onFocus={() => this.setState({ nameFocused: true })}
                            onBlur={() => this.setState({ nameFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email address"
                            type="email"
                            onFocus={() => this.setState({ emailFocused: true })}
                            onBlur={() => this.setState({ emailFocused: false })}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Type a message..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      </>
    );
  }
}

export default Landing;
