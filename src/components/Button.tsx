import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default function Button({ children, onClick, type = "primary" }) {
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
      className={`h-14 w-48 rounded px-4 py-2 ${buttonStyle} border border-white font-title text-2xl`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
