import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Financial AI Analytics Platform",
      description: "Financial Analytics AI Platform — Python-based Streamlit application for options pricing, implied volatility, live financial data analysis, and an AI-powered finance assistant.",
      technologies: ["Python", "Pandas", "Numpy", "Streamlit"],
      liveLink: "https://financial-ai--analytics-platform.streamlit.app/",
      githubLink: "https://github.com/ashhwiithac22/Financial-AI--Analytics-Platform",
    },
    {
      title: "Ride Share Optimizer",
      description: "Ride Sharing and Trip Planner.A Python + Streamlit app that uses graph algorithms to optimize cost-efficient, multi-stop and ride-sharing routes.",
      technologies: ["Python", "Pandas", "Streamlit", "Advanced Data Structures"],
      liveLink: "https://rideshareoptimizer.streamlit.app/",
      githubLink: "https://github.com/ashhwiithac22/RideShare-Optimizer",
    },
    {
      title: "Phishing URL Detection Application",
      description: "A phishing URL detector web app using machine learning algorithms (Logistic Regression, Linear Regression, K-Means) with a Streamlit interface for real-time predictions.",
      technologies: ["Python", "Scikit-learn", "Logistic Regression", "Kmeans","Streamlit"],
      liveLink:"https://phishing-url-detector-application.streamlit.app/",
      githubLink: "https://github.com/ashhwiithac22/phishing-url-detector-application",
    },
    {
      title: "Customer Relationship Management",
      description: "A Java Swing–based CRM desktop application with MySQL backend to manage customers, sales orders, and transactions through a role-based user interface",
      technologies: ["Java", "Mysql", "JDBC"],
      githubLink: "https://github.com/ashhwiithac22/Customer_Realtionship_Management-System",
    },

  
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-3">My Projects</h2>
            <p className="lead text-muted">
              A showcase of my work and technical skills
            </p>
          </Col>
        </Row>
        
        <Row>
          {projects.map((project, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card className="h-100 border-0 shadow-sm card-hover position-relative">
                <Card.Body className="p-4">
                  <Card.Title className="fw-bold mb-3">{project.title}</Card.Title>
                  <Card.Text className="text-muted mb-3">
                    {project.description}
                  </Card.Text>
                  
                  <div className="mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} bg="secondary" className="me-1 mb-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="d-flex gap-2">
                    <Button 
                      variant="primary" 
                      size="sm"
                      href={project.liveLink}
                      target="_blank"
                      className="flex-fill"
                    >
                      <FaExternalLinkAlt className="me-1" />
                      Live Demo
                    </Button>
                    <Button 
                      variant="outline-primary" 
                      size="sm"
                      href={project.githubLink}
                      target="_blank"
                      className="flex-fill"
                    >
                      <FaGithub className="me-1" />
                      Code
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

export default Projects;
