import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaCalendarAlt, FaUsers, FaEdit, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">Experience</h2>
            <p className="lead text-muted">
              My professional journey and leadership roles
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <div className="timeline-item">
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-3">
                      <FaEdit className="text-primary" style={{ fontSize: '2rem' }} />
                    </div>
                    <div>
                      <h4 className="fw-bold mb-1">Editing Head</h4>
                      <h6 className="text-primary mb-1">403 Strats CIT</h6>
                      <div className="timeline-date">
                        <FaCalendarAlt className="me-2" />
                        June 2025 - June 2026
                      </div>
                    </div>
                  </div>
                  
                  <div className="ms-5">
                    <h6 className="fw-bold mb-3">Key Responsibilities:</h6>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <FaUsers className="text-success me-2" />
                        <strong>Team Leadership:</strong> Led a team of designers to create posts, videos, and other content
                      </li>
                      <li className="mb-2">
                        <FaCheckCircle className="text-success me-2" />
                        <strong>Content Review:</strong> Checked and edited content for clarity and accuracy
                      </li>
                      <li className="mb-2">
                        <FaEdit className="text-success me-2" />
                        <strong>Content Accuracy:</strong>Made sure all content followed the same style and quality standards
                      </li>
                    </ul>
                    
                    <div className="mt-3">
                      <Badge bg="primary" className="me-2">Leadership</Badge>
                      <Badge bg="secondary" className="me-2">Content Management</Badge>
                      <Badge bg="success" className="me-2">Team Coordination</Badge>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;