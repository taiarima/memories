import React from "react";

const Button = ({ children, onClick, type = "primary" }) => {
  let buttonStyle = "";

  switch (type) {
    case "primary":
      buttonStyle = "bg-blue-500 hover:bg-blue-700 text-white";
      break;
    case "secondary":
      buttonStyle = "bg-gray-500 hover:bg-gray-700 text-white";
      break;
    case "danger":
      buttonStyle = "bg-red-500 hover:bg-red-700 text-white";
      break;
    default:
      buttonStyle = "bg-blue-500 hover:bg-blue-700 text-white";
  }

  return (
    <button
      className={`py-2 px-4 rounded w-48 h-14 ${buttonStyle} font-title text-2xl border border-white`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
