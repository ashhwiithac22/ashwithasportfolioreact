import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "ashwithac22@gmail.com",
      link: "mailto:ashwithac22@gmail.com"
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/ashwitha-c/",
      link: "https://www.linkedin.com/in/ashwitha-c/"
    },
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      value: "91-9345048662",
      link: "https://wa.me/919345048662"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "https://github.com/ashhwiithac22",
      link: "https://github.com/ashhwiithac22"
    }
  ];

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">Get In Touch</h2>
            <p className="lead text-muted">
              Let's connect! I'm always open to discussing new opportunities and collaborations.
            </p>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-4">Contact Information</h4>

                {contactInfo.map((info, index) => (
                  <div key={index} className="d-flex align-items-center mb-3">
                    <div 
                      className="me-3 text-primary" 
                      style={{ fontSize: '1.5rem', minWidth: '30px' }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <h6 className="mb-1 fw-bold">{info.title}</h6>
                      {info.link !== "#" ? (
                        <a 
                          href={info.link} 
                          className="text-decoration-none text-muted"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-muted">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}

                <div className="mt-4">
                  <h6 className="fw-bold mb-3">Connect with me:</h6>
                  <div className="d-flex gap-3">
                    <a href="mailto:ashwithac22@gmail.com" className="social-icon">
                      <FaEnvelope />
                    </a>
                    <a href="https://www.linkedin.com/in/ashwitha-c/" className="social-icon">
                      <FaLinkedin />
                    </a>
                    <a href="https://wa.me/919345048662" className="social-icon">
                      <FaWhatsapp />
                    </a>
                    <a href="https://github.com/ashhwiithac22" className="social-icon">
                      <FaGithub />
                    </a>
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

export default Contact;
