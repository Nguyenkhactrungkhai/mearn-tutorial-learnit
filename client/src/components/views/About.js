import React from "react";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const About = () => {
  return (
    <Row className="mt-5" style={{ marginRight: 0 }}>
      <Col className="text-center">
        <Button
          variant="primary"
          href="https://www.google.com/search?q=ngu+l%C3%A0+g%C3%AC?"
          size="lg"
        >
          Làm gì có gì mà bấm =))
        </Button>
      </Col>
    </Row>
  );
};

export default About;
