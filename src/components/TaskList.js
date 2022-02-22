import React from 'react';
import Todo from './Todo';

const TaskList = ({ todos, handleCheck, deleteTask }) => {
  return (
    <div className='todoList'>
      {todos.length > 0 && (
        <div>
          {todos.map((todo) => {
            return (
              <Todo
                handleCheck={handleCheck}
                id={todo.id}
                isComplete={todo.isComplete}
                text={todo.text}
                deleteTask={deleteTask}
              />
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
