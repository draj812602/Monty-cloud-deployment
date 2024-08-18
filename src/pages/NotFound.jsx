// src/pages/NotFound.js
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1 className="display-4 fw-bolder">404</h1>
          <p className="text-secondary fs-5 fw-bold">
            Sorry, the page you are looking for does not exist.
          </p>
          <Button variant="primary" as={Link} to="/">
            Go to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
