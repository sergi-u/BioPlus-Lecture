import "../components/css/Image.css";

interface ImageProps {
  srcImg: string;
  heigth?: number;
  width?: number;
}

function Image({ srcImg, heigth, width }: ImageProps) {
  return (
    <>
      <div
        className="Image-Container"
        style={{
          maxHeight: { heigth } + "px",
          maxWidth: { width } + "px",
        }}
      >
        <img src={srcImg} className="Image-Child" />
      </div>
    </>
  );
}

export default Image;
