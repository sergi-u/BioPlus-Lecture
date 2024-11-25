import { Container, Row, Col, Card } from "react-bootstrap";
import "../components/css/Paragraph.css";

type ParagraphProps = {
  children?: React.ReactNode;
  imgSrc?: string;
  PaddingText?: number;
  PaddingLeft?: number;
  ColValI?: number;
  ColValS?: number;
};

const ParagraphStart2: React.FC<ParagraphProps> = ({
  children,
  imgSrc,
  PaddingText,
  PaddingLeft,
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
            style={{
              paddingTop: PaddingText + "%",
              paddingLeft: PaddingLeft + "%",
            }}
          >
            <span className="span-card">{children}</span>
          </div>
        </Col>
        <Col md={1} />
        <Col md={ColValI}>
          <div className="inline-cardPI-start">
            <Card className="image">
              <Card.Img src={imgSrc} />
            </Card>
          </div>
        </Col>
        <Col md={ColValS} />
      </Row>
    </Container>
  );
};

export default ParagraphStart2;
