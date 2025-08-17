import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-custom">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-2 mb-md-0">
              © {currentYear} Ashwitha C
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
          </Col>
        </Row>
        
        <Row className="mt-3">
          <Col className="text-center">
            <small className="text-muted">
              
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;