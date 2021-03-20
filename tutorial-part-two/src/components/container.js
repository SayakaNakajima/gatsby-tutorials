import React from 'react';
import * as containerStyles from './container.module.css';

const Container = ({ children }) => {
  return (
    <div className={containerStyles.container}>
      {children}
      <p className={containerStyles.text}>This is Container.</p>
    </div>
  );
};

export default Container;