import React from 'react';
import { BsCircle, BsCheck } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';

const Tasks = ({ todos }) => {
  return (
    <div className='todoList'>
      {todos.map((todo) => {
        return (
          <div className='todoTemplate'>
            {/* <label>
          {todo.isComplete ? (
            <BsCheck className='icon-tick' />
          ) : (
            <BsCircle className='icon-circle' />
          )}
          <span className='list'>{todo.text}</span>
        </label> */}
            <label>
              <BsCircle className='checkCircle' color='hsl(233, 11%, 84%)' size={18}/>
              <span className='list'>Boss Man</span>
            </label>
            <div className='deleteTask'>
              <FaTimes />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
