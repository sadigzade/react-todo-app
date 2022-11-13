import React from 'react';
import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

import classes from './AppContent.module.scss';

const AppContent = () => {
  const { filterStatus, todoList } = useSelector((state) => state.todo);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter((item) =>
    filterStatus === 'all' ? true : item.status === filterStatus ? true : false,
  );

  return (
    <div className={classes.content__wrapper}>
      {filteredTodoList && filteredTodoList.length
        ? filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        : 'NO TODO'}
    </div>
  );
};

export default AppContent;
