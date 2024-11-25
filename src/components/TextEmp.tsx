import React from "react";
import "../components/css/Paragraph.css";

interface TextEmpProps {
  children?: React.ReactNode;
  style?: string;
}

const TextEmp: React.FC<TextEmpProps> = ({ children, style }) => {
  return <span className={style}>{children}</span>;
};

export default TextEmp;
