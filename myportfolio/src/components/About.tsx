import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';


const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">About Me</h2>
            <p className="lead text-muted">
              Get to know more about my background and journey
            </p>
          </Col>
        </Row>
        
        <Row className="align-items-center">
          <Col lg={5} className="text-center mb-4 mb-lg-0">
            <img 
              src="/Ashwitha C.jpeg" 
              alt="Ashwitha Profile" 
              className="profile-img"
            />
          </Col>
          
          <Col lg={7}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h3 className="fw-bold mb-3">Hello! I'm Ashwitha</h3>
                <p className="mb-3">
                 I am currently pursuing my M.Sc. in Decision and Computing Sciences at Coimbatore Institute of Technology. I have a strong interest in technology and innovation, and I enjoy learning new programming languages and tools. Through my studies, I am building skills in computing and problem-solving to prepare for real-world challenges.
                </p>
                <p className="mb-3">
                 My journey in computer science is driven by curiosity and a passion for solving real-world problems through technology. I am especially interested in data analytics, full stack web development, and problem solving, and I enjoy working on projects that challenge me to think creatively and build impactful solutions.
                </p>
                
                <div className="mb-4">
                  <h5 className="fw-bold mb-3">Academic Achievement</h5>
                  <Badge bg="primary" className="fs-6 p-2">
                    CGPA: 8.97 (till 4th semester)
                  </Badge>
                </div>
                
                <Button 
                  variant="primary" 
                  size="lg"
                  href="/Ashwitha.C - Resume.pdf" 
                  target="_blank"
                  className="me-3"
                >
                  <FaDownload className="me-2" />
                  View Resume
                </Button>
                
                <Button 
                  variant="outline-primary" 
                  size="lg"
                  href="#projects"
                >
                  View My Work
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;