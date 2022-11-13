import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

import classes from './AppContent.module.scss';

const AppContent = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  return (
    <div className={classes.content__wrapper}>
      {sortedTodoList && sortedTodoList.length
        ? sortedTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : 'NO TODO'}
    </div>
  );
};

export default AppContent;
