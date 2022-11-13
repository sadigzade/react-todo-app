import React from 'react';

import { getClasses } from '../../../utils/getClasses';

import classes from './SortPopup.module.scss';

const SortPopup = ({ children, filterStatus, updateFilter }) => {
  return (
    <select
      className={getClasses([classes.button, classes.button__select])}
      value={filterStatus}
      onChange={(e) => updateFilter(e)}>
      {children}
    </select>
  );
};

export default SortPopup;
