import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

import classes from './CheckButton.module.scss';

const boxVariants = {
  checked: {
    background: 'var(--primaryPurple)',
    transition: { duration: 0.1 },
  },
  unchecked: {
    background: 'var(--gray-1)',
    transition: { duration: 0.1 },
  },
};

const checkVaiants = {
  initial: {
    color: '#ffffff',
  },
  checked: {
    pathLength: 1,
  },
  uncheked: {
    pathLength: 0,
  },
};

const CheckButton = ({ checked, handleCheck }) => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <motion.div
      className={classes.svgBox}
      variants={boxVariants}
      animate={checked ? 'checked' : 'unchecked'}
      onClick={handleCheck}>
      <motion.svg
        className={classes.svg}
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={checkVaiants}
          animate={checked ? 'checked' : 'unchecked'}
          style={{ pathLength, opacity }}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
};

export default CheckButton;
