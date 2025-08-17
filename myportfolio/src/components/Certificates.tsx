import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaDatabase,FaChartBar,FaBullhorn,FaShieldAlt,FaCloud,FaLock,FaFilePdf} from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      title: "Data Visualisation",
      issuer: "Accenture | Forage",
      date: "May 2024",
      icon: <FaChartBar />,
      description: "Learned how to clean, analyze, and show data in clear charts and visuals. Practiced turning raw data into easy-to-understand insights for business use.",
      skills: ["Data cleaning", "Data visualisation", "Dashboards"],
      pdfLink:  "/dataanalytics.pdf"
    },
    {
      title: "Digital Marketing",
      issuer: "Google",
      date: "September 2024",
      icon: <FaBullhorn />,
      description: "Learned how to promote products and services online using tools like social media, SEO, and ads. Covered strategies to reach more people and measure campaign results.",
      skills: ["SEO", "Social Media", "Analytics", "Advertising"],
      pdfLink: "/screenshot.png"
    },
    {
      title: "Bug Bounty Program",
      issuer: "Prompt Infotech",
      date: "January 2025",
      icon: <FaShieldAlt />,
      description: "Hands-on training in web security and bug bounty techniques. Learned to find and fix security issues like authorization flaws, CSRF, SSRF, and file upload risks using real-world tools.",
      skills: ["Web security", "BurpSuite", "vulnerabilities"],
      pdfLink: "/bugbounty.pdf"
    },
    {
      title: "Cloud Computing Fundamentals",
      issuer: "CODTECH",
      date: "October 2024",
      icon: <FaCloud />,
      description: "Completed an 8-week internship in Cloud Computing at CODTECH IT Solutions, focusing on practical cloud concepts like identity management, storage, and access control.",
      skills: ["GCP", "IAM", "Cloud Storage", "Access Permissions"],
      pdfLink: "/codtech.pdf"
    },
    {
      title: "Data Analysis Virtual Internship",
      issuer: "Trainity",
      date: "August 2024",
      icon: <FaDatabase />,
      description: "Completed a virtual internship focused on data analytics, where I worked on real-world projects involving data cleaning, analysis, and insights generation using SQL and Excel.",
      skills: ["SQL", "Excel"],
      pdfLink: "/trainity.pdf"
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "NPTEL",
      date: "October 2024",
      icon: <FaLock/>,
      description: "Completed a 12-week NPTEL course on Cyber Security and Privacy, learning about system security, network safety, data protection, and privacy methods. Gained skills to identify risks and apply safe practices in digital systems.",
      skills: ["Network Security", "Cyber security", "Risk Assessment"],
      pdfLink: "/nptel.pdf"
    }
  ];

  return (
    <section id="certificates" className="py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">Certificates</h2>
            <p className="lead text-muted">
              Professional certifications and achievements
            </p>
          </Col>
        </Row>
        
        <Row>
          {certificates.map((certificate, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="h-100 border-0 shadow-sm card-hover">
                <Card.Body className="p-4 text-center">
                  <div className="text-primary mb-3" style={{ fontSize: '3rem' }}>
                    {certificate.icon}
                  </div>
                  
                  <Card.Title className="fw-bold mb-2">{certificate.title}</Card.Title>
                  
                  <div className="mb-3">
                    <Badge bg="primary" className="me-2">{certificate.issuer}</Badge>
                    <Badge bg="secondary">{certificate.date}</Badge>
                  </div>
                  
                  <Card.Text className="text-muted mb-3 text-start">
                    {certificate.description}
                  </Card.Text>
                  
                  <div className="text-start mb-3">
                    <h6 className="fw-bold mb-2">Skills Covered:</h6>
                    {certificate.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        bg="outline-primary" 
                        className="me-1 mb-1"
                        style={{ 
                          color: '#0d6efd', 
                          border: '1px solid #0d6efd',
                          backgroundColor: 'transparent'
                        }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* View Certificate Button */}
                  <div className="mt-3">
                    <Button 
                      variant="outline-danger" 
                      size="sm" 
                      href={certificate.pdfLink} 
                      target="_blank"
                    >
                      <FaFilePdf className="me-2" /> View Certificate
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Certificates;
