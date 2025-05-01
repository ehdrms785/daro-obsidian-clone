import React from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition ${
        className ?? ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
