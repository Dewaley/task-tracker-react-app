import React from 'react';
import { BsCircle, BsCheck } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';

const TaskList = ({ todos, setTodos, handleCheck }) => {
  return (
    <div className='todoList'>
      {todos.length > 0 && (
        <div>
          {todos.map((todo) => {
            return (
              <div className='todoTemplate' key={todo.id}>
                <div>
                  {todo.isComplete ? (
                    <BsCheck
                      className='checkedCircle'
                      color='hsl(235, 19%, 35%)'
                      size={18}
                      onClick={handleCheck}
                    />
                  ) : (
                    <BsCircle
                      className='checkCircle'
                      color='hsl(235, 19%, 35%)'
                      size={18}
                      onClick={handleCheck}
                    />
                  )}
                  <span>{todo.text}</span>
                </div>
                <FaTimes
                  className='deleteTask'
                  color='hsl(233, 11%, 84%)'
                  // onClick={()=> setTodos(todos.filter(todo => todo.id !== todo.id))}
                />
              </div>
            );
          })}
          <div className='infoAndActivity'>
            <p>{todos.length} items left</p>
            <p>Clear Completed</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskList;
