import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {

  const elements = todos.map(item => {

    const { id } = item; 

    return (
      <li key={id} className="list-group-item">
      <TodoListItem 
        label = {item.label}
        important = {item.important}
        done = {item.done}
        onDeleted = { () => onDeleted(id)}
        onToggleImportant = { () => onToggleImportant(id) }
        onToggleDone = { () => onToggleDone(id) }
      />
    </li>
    );

  });

  return (
    <ul className="list-group todo-list">
      {elements}
    </ul>
  );
};


export default TodoList;
