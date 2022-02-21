import React from 'react';
import { useEffect } from 'react';
import { BsCircle } from 'react-icons/bs';

const Input = ({ todos, setTodos, input, setInput }) => {
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const addTask = () => {
    if (input === '') {
      alert('Please enter a task');
    } else {
      setTodos([
        { id: new Date().getTime().toString(), text: input, isComplete: false },
        ...todos,
      ]);
      setInput('');
    }
  };
  const submitForm = (e) => {
    e.preventDefault();
    addTask();
  };
  return (
    <form action='' onSubmit={submitForm}>
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
