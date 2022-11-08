import React from 'react';
import { MdOutlineClose } from 'react-icons/md';

import Button from '../../Button';

import classes from './TodoModal.module.scss';

const TodoModal = ({ modalOpen, setModalOpen }) => {
  return (
    modalOpen && (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.closeButton} onClick={() => setModalOpen(false)}>
            <MdOutlineClose />
          </div>
          <form className={classes.form}>
            <h1 className={classes.formTitle}>Add Task</h1>
            <label htmlFor="title">
              Title
              <input type="text" id="title" />
            </label>
            <label htmlFor="status">
              Status
              <select name="status" id="status">
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
              </select>
            </label>
            <div className={classes.buttonContainer}>
              <Button type="submit" variant="primary">
                Add Task
              </Button>
              <Button variant="secondary" onClickModal={() => setModalOpen(false)}>
                Close
              </Button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default TodoModal;
