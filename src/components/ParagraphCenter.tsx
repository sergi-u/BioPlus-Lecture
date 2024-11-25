import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../components/css/Paragraph.css";

type ParagraphProps = {
  children?: React.ReactNode;
  PaddingTextH?: number;
  PaddingTextTop?: number;
  PaddingTextBottom?: number;
  ColValS?: number;
};

const ParagraphCenter: React.FC<ParagraphProps> = ({
  children,
  PaddingTextBottom = 0,
  PaddingTextH = 0,
  PaddingTextTop = 0,
  ColValS,
}) => {
  return (
    <Container fluid>
      <Row>
        <Col md={1} />
        <Col md={ColValS}>
          <div
            className="inline-card-center"
            style={{
              paddingLeft: PaddingTextH + "%",
              paddingRight: PaddingTextH + "%",
              paddingTop: PaddingTextTop + "%",
              paddingBottom: PaddingTextBottom + "%",
            }}
          >
            <span className="span-card">{children}</span>
          </div>
        </Col>
        <Col md={1} />
      </Row>
    </Container>
  );
};

export default ParagraphCenter;
