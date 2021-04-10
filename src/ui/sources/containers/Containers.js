import React from "react";
import './Containers.css';

export const Container = (props) => {
  const { children } = props;
  return (
    <div
      className='container'
    >
      {children}
    </div>
  );
};

export const Section = (props) => {
  const {
    className,
    children,
  } = props;
  const classElement = (className) ? `section ${className}` : 'section';
  return (
    <div
      className={classElement}
    >
      {children}
    </div>
  );
};

export const Row = (props) => {
  const { className, children } = props;
  return (
    <div
      className={`row ${className}`}
    >
      {children}
    </div>
  );
};

export const Col = (props) => {
  const {
    children,
  } = props;
  return (
    <div
      className='col'
    >
      {children}
    </div>
  );
};

export const Box = (props) => {
  const {
    width,
    height,
    className,
    backgroundImage,
    alignItems,
    justifyContent,
    children,
  } = props;
  const styles = {
    width: (width) ? `${width}%` : '',
    height: (height) ? `calc(${height}% - 0px)` : null,
    backgroundImage: `url(${backgroundImage})`,
    alignItems: (alignItems) ? `${alignItems}` : null,
    justifyContent: (justifyContent) ? `${justifyContent}` : null,
  }
  return (
    <div
      className={`box ${className}`}
      style={styles}
    >
      {children}
    </div>
  );
};

export const BoxCircle = (props) => {
  const {
    className,
    backgroundImage,
    children,
    topChildren,
  } = props;
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
  }
  return (
    <div
      className={`box box-circle ${className}`}
    >
      <div
        className='image-top'
        style={styles}
      >
        {topChildren}
      </div>
      {children}
    </div>
  );
};

export const BoxIcon = (props) => {
  const {
    icon,
    children,
  } = props;
  return (
    <div
      className={`box-icon`}
    >
      <div
        className={`icon ${icon}`}
      />
      {children}
    </div>
  );
};