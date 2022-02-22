import React from 'react';
import Todo from './Todo';

const TaskList = ({
  todos,
  handleCheck,
  deleteTask,
  clearCompleted,
  setStatus,
  status,
  displayedTodos
}) => {
  const btns = document.querySelectorAll('.btn');
  btns.forEach((btn) => {
    btn.addEventListener('click', () => {
      setStatus(btn.value);
    });
    if (status === btn.value) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  return (
    <div>
      <div>
        {todos.length > 0 && (
          <div className='container'>
            <div className='todoList'>
              {displayedTodos.map((todo) => {
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
                <p onClick={clearCompleted} style={{ cursor: 'pointer' }}>
                  Clear Completed
                </p>
              </div>
            </div>
            <div className='options'>
              <button className='btn' value={'all'}>
                All
              </button>
              <button className='btn' value={'active'}>
                Active
              </button>
              <button className='btn' value={'completed'}>
                Completed
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
