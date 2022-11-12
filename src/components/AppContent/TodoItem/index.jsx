import React from 'react';
import { format } from 'date-fns/esm';
import { MdDelete, MdEdit } from 'react-icons/md';

import { getClasses } from '../../../utils/getClasses';

import classes from './TodoItem.module.scss';

const TodoItem = ({ status, title, time }) => {
  const handleDelete = () => {
    console.log('deleting');
  };

  const handleUpdate = () => {
    console.log('updating');
  };

  return (
    <div className={classes.item}>
      <div className={classes.todoDetails}>
        <div className={classes.texts}>
          <p
            className={getClasses([
              classes.todoText,
              status === 'complete' && classes['todoText--completed'],
            ])}>
            {title}
          </p>
          <p className={classes.time}>{format(new Date(time), 'p, dd/MM/yyyy')}</p>
        </div>
      </div>
      <div className={classes.todoActions}>
        <div
          className={classes.icon}
          onClick={handleDelete}
          onKeyDown={handleDelete}
          role="button"
          tabIndex={0}>
          <MdDelete />
        </div>
        <div
          className={classes.icon}
          onClick={handleUpdate}
          onKeyDown={handleUpdate}
          role="button"
          tabIndex={1}>
          <MdEdit />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
