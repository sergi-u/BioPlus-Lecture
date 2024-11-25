import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../components/css/list.css";

type ListItemProps = {
  children?: React.ReactNode;
  Col1?: number;
  Col2?: number;
};

const LI: React.FC<ListItemProps> = ({ children, Col1, Col2 }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={3}></Col>
        <Col md={Col1}>
          <span className="ListItem">{children}</span>
        </Col>
        <Col md={Col2}></Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
};

export default LI;
