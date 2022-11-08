import React from 'react';

import { getClasses } from '../../../utils/getClasses';

import classes from './SortPopup.module.scss';

const SortPopup = ({ children }) => {
  return (
    <select className={getClasses([classes.button, classes.button__select])}>{children}</select>
  );
};

export default SortPopup;
