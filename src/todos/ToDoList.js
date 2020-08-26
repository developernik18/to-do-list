import React from 'react';
import NewToDoForm from './NewToDoForm';
import ToDoListItem from './ToDoListItem';
import './ToDoListItem.css'

const ToDoList = ({ todos = [{text: "Checking list"}] }) => {
  return (
    <div className="list-wrapper">
      <NewToDoForm />
      {todos.map(todo => {
        return <ToDoListItem todo={todo} />
      })}

    </div>
  );
}


export default ToDoList;