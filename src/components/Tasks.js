import React from 'react'
import { BsCircle, BsCheck } from 'react-icons/bs';
import { FaTimes } from "react-icons/fa";

const Tasks = ({todos}) => {
  return todos.map((todo) => (
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
        <BsCircle  className='checkCircle'/>
        <span className='list'>Boss Man</span>
      </label>
      <div className='deleteTask'>
        <FaTimes />
      </div>
    </div>
  ));
}

export default Tasks