import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';

import Button from '../../Button';

import classes from './TodoModal.module.scss';

const TodoModal = ({ modalOpen, setModalOpen }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, status });
  };

  return (
    modalOpen && (
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <div className={classes.closeButton} onClick={() => setModalOpen(false)}>
            <MdOutlineClose />
          </div>
          <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
            <h1 className={classes.formTitle}>Add Task</h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label htmlFor="status">
              Status
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}>
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
