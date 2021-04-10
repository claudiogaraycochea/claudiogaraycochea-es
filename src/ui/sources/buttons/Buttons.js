import React from "react";
import './Buttons.css';

export const Button = (props) => {
  const {
    className,
    onPress,
    children,
  } = props;
  return (
    <button
      className={`btn ${className}`}
      onClick={onPress}
    >
      {children}
    </button>
  );
};

