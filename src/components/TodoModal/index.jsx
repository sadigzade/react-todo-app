import React, { useState, useEffect } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';

import Button from '../Button';

import { addTodo, updateTodo } from '../../redux/slices/todoSlice';

import { getFormatedDate } from '../../utils/getFormatedDate';

import classes from './TodoModal.module.scss';

const dropIn = {
  hidden: {
    opacity: 0,
    transform: 'scale(0.9)',
  },
  visible: {
    transform: 'scale(1)',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    transform: 'scale(0.9)',
    opacity: 0,
  },
};

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
          return;
        }

        setModalOpen(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className={classes.wrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}>
          <motion.div
            className={classes.container}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit">
            <motion.div
              className={classes.closeButton}
              onClick={() => setModalOpen(false)}
              onKeyDown={() => setModalOpen(false)}
              tabIndex={0}
              role="button"
              initial={{ top: 40, opacity: 0 }}
              animate={{ top: -10, opacity: 1 }}
              exit={{ top: 40, opacity: 0 }}>
              <MdOutlineClose />
            </motion.div>
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TodoModal;
