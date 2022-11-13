export const getInitialTodo = () => {
  const data = localStorage.getItem('todoList');
  const todoList = data ? JSON.parse(data) : [];

  if (!data) {
    localStorage.setItem('todoList', JSON.stringify([]));
  }

  return {
    filterStatus: 'all',
    todoList,
  };
};
