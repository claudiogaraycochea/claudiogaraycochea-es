import React from "react";
import './Icons.css';

export const Icon = (props) => {
  const { className } = props;
  return (
    <div
      className={`icon ${className}`}
    />
  );
};