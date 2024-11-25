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

const ParagraphEnd = ({
  children,
  description,
  imgSrc,
  PaddingText,
  ColValI,
  ColValS,
}: ParagraphProps) => {
  return (
    <Container fluid>
      <Row>
        <Col md={ColValS} />
        <Col md={ColValI}>
          <div className="inline-cardIP-end">
            <Card className="image">
              <Card.Img src={imgSrc} className="image" />
              <CardBody>
                <CardText className="cardText">{description}</CardText>
              </CardBody>
            </Card>
          </div>
        </Col>
        <Col md={5}>
          <div
            className="inline-cardIP-start"
            style={{ padding: PaddingText + "%" }}
          >
            <span className="span-card">{children}</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ParagraphEnd;
