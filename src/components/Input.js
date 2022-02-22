import React from 'react';
import { BsCircle } from 'react-icons/bs';

const Input = ({ input, onInputChange, addTask}) => {
  return (
    <form action='' onSubmit={addTask}>
      <span>
        <BsCircle className='circle-todo-form' color='hsl(235, 19%, 35%)' />
      </span>
      <input
        type='text'
        placeholder='Create new todo..'
        value={input}
        onChange={onInputChange}
      />
    </form>
  );
};

export default Input;
