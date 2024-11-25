import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../components/css/list.css";

type ListElementProps = {
  children?: React.ReactNode;
  Col1?: number;
  Col2?: number;
};

const LE: React.FC<ListElementProps> = ({ children, Col1, Col2 }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}></Col>
        <Col md={Col1}>
          <span className="ListElem">{children}</span>
        </Col>
        <Col md={Col2}></Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
};

export default LE;
