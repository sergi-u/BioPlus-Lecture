import React from "react";
import { Container, Row, Col, Card, CardBody, CardText } from "react-bootstrap";
import "../components/css/card.css";

type CardProps = {
  src?: string;
  description?: string;
};

const CardS: React.FC<CardProps> = ({ src, description }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={3} />
        <Col md={6}>
          <Card className="imageCoords">
            <img src={src} />
            <CardBody>
              <div className="textCoords">
                <CardText className="cardText">{description}</CardText>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={3} />
      </Row>
    </Container>
  );
};

export default CardS;
