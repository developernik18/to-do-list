import React, { useState } from 'react';
import './NewToDoForm.css';

const NewToDoForm = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="new-to-do-form">
    <input type="text"
      className="new-to-do-input"
      placeholder="Type your new to do here"
      value={inputValue}
      onChange={e => setInputValue(e.target.value)} ></input>
    <button className="new-to-do-button"> Create To do</button>
    </div>
  );
}

export default NewToDoForm;