import React from 'react'
import { BsCircle, BsCheck } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';

const Todo = ({handleCheck, text, id, isComplete,deleteTask}) => {
  return (
    <div className='todoTemplate'>
      <div>
        {isComplete ? (
          <BsCheck
            className='checkedCircle'
            color='white'
            size={18}
            onClick={() => handleCheck(id)}
          />
        ) : (
          <BsCircle
            className='checkCircle'
            color='hsl(235, 19%, 35%)'
            size={18}
            onClick={() => handleCheck(id)}
          />
        )}
        <span>{text}</span>
      </div>
      <FaTimes
        className='deleteTask'
        color='hsl(233, 11%, 84%)'
        onClick={()=> deleteTask(id)}
      />
    </div>
  );
}

export default Todo