import React from 'react';

import { getClasses } from '../../utils/getClasses';

import classes from './Button.module.scss';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

const Button = ({ children, type, variant, onClickModal }) => {
  return (
    <button
      className={getClasses([classes.button, classes[`button--${buttonTypes[variant]}`]])}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClickModal}>
      {children}
    </button>
  );
};

export default Button;
