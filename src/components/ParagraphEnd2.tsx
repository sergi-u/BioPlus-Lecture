import { Container, Row, Col, Card } from "react-bootstrap";
import "../components/css/Paragraph.css";

type ParagraphProps = {
  children: React.ReactNode;
  imgSrc?: string;
  PaddingText?: number;
  PaddingH?: number;
  ColValI?: number;
  ColValS?: number;
};

const ParagraphEnd2 = ({
  children,
  imgSrc,
  PaddingText,
  PaddingH,
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
            </Card>
          </div>
        </Col>
        <Col md={5}>
          <div
            className="inline-cardIP-start"
            style={{
              paddingLeft: PaddingText + "%",
              paddingRight: PaddingText + "%",
              paddingTop: PaddingH + "%",
            }}
          >
            <span className="span-card">{children}</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ParagraphEnd2;
