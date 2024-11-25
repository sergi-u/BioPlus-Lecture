import "../components/css/Header.css";

interface HeaderProps {
  text: string;
  alignement: string;
  PaddingTop?: number;
  PaddingBottom?: number;
}

function Header({ text, alignement, PaddingTop, PaddingBottom }: HeaderProps) {
  return (
    <>
      <div
        className={alignement}
        style={{
          paddingTop: PaddingTop + "%",
          paddingBottom: PaddingBottom + "%",
        }}
      >
        {text}
      </div>
    </>
  );
}

export default Header;
