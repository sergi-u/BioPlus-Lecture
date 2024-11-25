import React from "react";
import { Container, Row, Col, Card, CardBody, CardText } from "react-bootstrap";
import "../components/css/card.css";

type CardProps = {
  src1?: string;
  src2?: string;
  src3?: string;
  src4?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string;
};

const CardF: React.FC<CardProps> = ({
  src1,
  src2,
  src3,
  src4,
  description1,
  description2,
  description3,
  description4,
}) => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} />
        <Col md={2}>
          <Card className="imageCoords">
            <img src={src1} />
            <CardBody>
              <div className="textCoords">
                <CardText className="cardText">{description1}</CardText>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="imageCoords">
            <img src={src2} />
            <CardBody>
              <div className="textCoords">
                <CardText className="cardText">{description2}</CardText>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="imageCoords">
            <img src={src3} />
            <CardBody>
              <div className="textCoords">
                <CardText className="cardText">{description3}</CardText>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="imageCoords">
            <img src={src4} />
            <CardBody>
              <div className="textCoords">
                <CardText className="cardText">{description4}</CardText>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md={2} />
      </Row>
    </Container>
  );
};

export default CardF;
