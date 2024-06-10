// eslint-disable-next-line no-unused-vars
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos
        // eslint-disable-next-line react/jsx-key
        .map((todo) => <Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />)
        // eslint-disable-next-line react/jsx-key
        .reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  );
};

export default TodoList;
