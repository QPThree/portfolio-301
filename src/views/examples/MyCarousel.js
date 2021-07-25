import React from 'react';
import {
  Carousel,
  Container
}
  from 'react-bootstrap';
import project1img from '../../assets/img/projects/fantascribe.jpeg';
import project2img from '../../assets/img/projects/salmoncookies.jpeg';
import project3img from '../../assets/img/projects/gitstop.jpeg';

class MyCarousel extends React.Component {
  render() {
    return (
      <>

        <Container className="card shadow">
          <h2 className="display-3 text-center text-primary">Recent Projects</h2>
          <Carousel fade>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={project1img}
                alt="First slide"

              />
              <Carousel.Caption>
                <h3 className="text-primary text-uppercase">Fantascribe</h3>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={project2img}
                alt="Second slide"

              />
              <Carousel.Caption>
                <h3 className="text-primary text-uppercase">Gitstop</h3>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={project3img}
                alt="Third slide"

              />
              <Carousel.Caption>
                <h3 className="text-primary text-uppercase">Salmon Cookies</h3>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </>
    )
  }
}
export default MyCarousel;
