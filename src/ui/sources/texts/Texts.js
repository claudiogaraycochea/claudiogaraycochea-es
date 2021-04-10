import React from "react";
import './Texts.css';

export const H1 = (props) => {
  const { children } = props;
  return (
    <h1
      className='h1'
    >
      {children}
    </h1>
  );
};

export const H2 = (props) => {
  const { children } = props;
  return (
    <h2
      className='h2'
    >
      {children}
    </h2>
  );
};

export const H3 = (props) => {
  const { children, className } = props;
  return (
    <h3
      className={`h3 ${className}`}
    >
      {children}
    </h3>
  );
};

export const Subtitle = (props) => {
  const { children, className } = props;
  return (
    <div
      className={`subtitle ${className}`}
    >
      {children}
    </div>
  );
};