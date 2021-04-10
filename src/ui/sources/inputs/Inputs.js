import React from "react";
import './Inputs.css';

export const Input = (props) => {
  const {
    className,
    onPress,
    placeholder,
  } = props;
  return (
    <input
      className={`inp ${className}`}
      placeholder={placeholder}
      onClick={onPress}
    />
  );
};
