import React from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';

import TodoItem from './TodoItem';

import classes from './AppContent.module.scss';

const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariant = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const AppContent = () => {
  const { filterStatus, todoList } = useSelector((state) => state.todo);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter((item) =>
    filterStatus === 'all' ? true : item.status === filterStatus ? true : false,
  );

  return (
    <motion.div
      className={classes.content__wrapper}
      variants={containerVariant}
      initial="hidden"
      animate="visible">
      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length ? (
          filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : (
          <motion.p className={classes.emptyText} variants={childVariant}>
            No Todo Found
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AppContent;
