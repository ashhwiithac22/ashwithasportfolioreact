import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <h1 className="display-4 fw-bold mb-4">
              Hi, I'm Ashwitha 👋
            </h1>
            <p className="lead mb-4">
              Welcome to my portfolio! I'm a passionate Computer Science student with a love for 
              programming, data science, and technology. I enjoy building innovative solutions 
              and constantly learning new technologies.
            </p>
            <Button 
              variant="outline-light" 
              size="lg"
              href="#about"
              className="me-3"
            >
              Learn More About Me
            </Button>
            <Button 
              variant="light" 
              size="lg"
              href="#contact"
            >
              Get In Touch
            </Button>
          </Col>
          <Col lg={6} className="text-center">
            <div className="animated-element">
              <h2 className="mb-3">🚀 Building the Future</h2>
              <p className="fs-5">
                With code, creativity, and passion
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;