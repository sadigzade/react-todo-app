import React, { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-hot-toast';

import Button from '../../Button';

import { addTodo } from '../../../redux/slices/todoSlice';

import classes from './TodoModal.module.scss';

const TodoModal = ({ modalOpen, setModalOpen }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && status) {
      dispatch(
        addTodo({
          id: uuid(),
          title,
          status,
          time: new Date().toLocaleString(),
        }),
      );
      toast.success('Task Added Successfully');
      setModalOpen(false);
    } else {
      toast.error("Title shouldn't be empty");
    }
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
