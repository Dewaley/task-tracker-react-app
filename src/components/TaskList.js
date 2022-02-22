import React from 'react';
import Todo from './Todo';

const TaskList = ({ todos, handleCheck, deleteTask, clearCompleted }) => {
  return (
    <div>
      <div>
        {todos.length > 0 && (
          <div className='container'>
            <div className='todoList'>
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
                <p onClick={clearCompleted} style={{cursor: "pointer"}}>Clear Completed</p>
              </div>
            </div>
            <div className='options'>
              <span>All</span>
              <span>Active</span>
              <span>Completed</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
