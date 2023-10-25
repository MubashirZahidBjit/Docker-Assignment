import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, style, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        borderRadius: "4px",
        backgroundColor: style.backgroundColor || "#007bff",
        color: style.color || "#fff",
        border: "none",
        cursor: "pointer",
        ...style,
      }}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Button;
