import { Container, Row, Col, Card, CardBody, CardText } from "react-bootstrap";
import "../components/css/Paragraph.css";

type ParagraphProps = {
  children: React.ReactNode;
  description?: string;
  imgSrc?: string;
  PaddingText?: number;
  ColValI?: number;
  ColValS?: number;
};

const ParagraphStart: React.FC<ParagraphProps> = ({
  children,
  description,
  imgSrc,
  PaddingText,
  ColValI,
  ColValS,
}) => {
  return (
    <Container fluid>
      <Row>
        <Col md={2} />
        <Col md={5}>
          <div
            className="inline-cardPI-end"
            style={{ paddingTop: PaddingText + "%" }}
          >
            <span className="span-card">{children}</span>
          </div>
        </Col>
        <Col md={1} />
        <Col md={ColValI}>
          <div className="inline-cardPI-start">
            <Card className="image">
              <Card.Img src={imgSrc} />
              <CardBody>
                <CardText className="cardText">{description}</CardText>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col md={ColValS} />
      </Row>
    </Container>
  );
};

export default ParagraphStart;
