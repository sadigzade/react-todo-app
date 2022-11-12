import React, { useState, useEffect } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-hot-toast';

import Button from '../Button';

import { addTodo, updateTodo } from '../../redux/slices/todoSlice';

import { getFormatedDate } from '../../utils/getFormatedDate';

import classes from './TodoModal.module.scss';

const TodoModal = ({ type, modalOpen, setModalOpen, todo }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('incomplete');

  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle('');
      setStatus('incomplete');
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      toast.error('Please enter a title');
      return;
    }
    if (title && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: getFormatedDate(new Date().toLocaleString()),
          }),
        );
        toast.success('Task Added Successfully');
      }

      if (type === 'update') {
        if (todo.title !== title || todo.status !== status) {
          dispatch(
            updateTodo({
              ...todo,
              title,
              status,
            }),
          );
        } else {
          toast.error('No Changes Mode');
        }

        setModalOpen(false);
      }
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
            <h1 className={classes.formTitle}>{type === 'update' ? 'Update' : 'Add'} Task</h1>
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
                {type === 'update' ? 'Update' : 'Add'} Task
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
