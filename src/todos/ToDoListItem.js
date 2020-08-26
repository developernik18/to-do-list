import React from 'react';
import ToDoList from './ToDoList';
import './ToDoListItem.css';

const ToDoListItem = ({ todo }) => {
  return(
    <div className="to-do-item-container">
      <h3>{todo.text}</h3>
      <div>
        <button className="completed-button"> Completed </button>
        <button className="remove-button"> Remove </button>
      </div>
    </div>
  );
}

export default ToDoListItem;