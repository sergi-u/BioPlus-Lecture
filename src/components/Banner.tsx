import { Container } from "react-bootstrap";
import "../components/css/Banner.css";

interface BannerProps {
  imgType: string;
  header?: string;
  title: string;
  description?: string;
}

function Banner({ imgType, title, description, header }: BannerProps) {
  return (
    <div className={imgType}>
      <Container>
        <div className="banner-content">
          <h1>
            <span>{header}</span>
          </h1>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Container>
    </div>
  );
}

export default Banner;
