import React from 'react';

import classes from './PageTitle.module.scss';

const PageTitle = ({ children }) => <p className={classes.title}>{children}</p>;

export default PageTitle;
