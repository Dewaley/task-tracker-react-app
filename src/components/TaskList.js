import React from 'react';
import Todo from './Todo';

const TaskList = ({
  todos,
  handleCheck,
  deleteTask,
  clearCompleted,
  setStatus,
  status,
  displayed,
  theme,
  setAll,
  setCompleted,
  setActive,
  completed
}) => {
  const button = document.querySelectorAll('.btn');
  button.forEach((btn) => {
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
          <div className={theme}>
            <div className='todoList'>
              {displayed.map((todo) => {
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
                <p>{completed === 1 ? `1 item left` : `${completed} items left`}</p>
                <div className='options'>
                  <button className='btn' value={'all'} onClick={setAll}>
                    All
                  </button>
                  <button className='btn' value={'active'} onClick={setActive}>
                    Active
                  </button>
                  <button
                    className='btn'
                    value={'completed'}
                    onClick={setCompleted}
                  >
                    Completed
                  </button>
                </div>
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
