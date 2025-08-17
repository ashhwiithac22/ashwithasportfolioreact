import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCode, FaChartBar, FaCloud, FaBug, FaRobot, FaBrain } from 'react-icons/fa';

const Interests = () => {
  const interests = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Building responsive and interactive web applications using modern frameworks"
    },
    {
      icon: <FaChartBar />,
      title: "Data Science",
      description: "Analyzing data to extract meaningful insights and create visualizations"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Computing",
      description: "Exploring cloud platforms and services for scalable applications"
    },
    {
      icon: <FaBug />,
      title: "Bug Hunting",
      description: "Finding and fixing security vulnerabilities in applications"
    },
    {
      icon: <FaRobot />,
      title: "Machine Learning",
      description: "Developing intelligent systems that can learn and make predictions"
    },
    {
      icon: <FaBrain />,
      title: "Problem Solving and Logic Building",
      description: "Enhancing logical thinking and analytical skills to solve complex problems efficiently"
    }
  ];

  return (
    <section id="interests" className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">My Interests</h2>
            <p className="lead text-muted">
              Areas that fascinate me and drive my passion for technology
            </p>
          </Col>
        </Row>
        
        <Row>
          {interests.map((interest, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="h-100 border-0 shadow-sm card-hover">
                <Card.Body className="text-center p-4">
                  <div className="text-primary mb-3" style={{ fontSize: '3rem' }}>
                    {interest.icon}
                  </div>
                  <Card.Title className="fw-bold mb-3">{interest.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {interest.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Interests;