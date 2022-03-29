/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TaskList from './components/TaskList';

function App() {
  const [theme, setTheme] = useState('light');
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('');
  const [displayed, setDisplayed] = useState([]);
  const [completed, setCompleted] = useState();
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const addTask = (e) => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Please enter a task');
    } else {
      const newTodos = [
        { id: new Date().getTime().toString(), text: input.trim(), isComplete: false },
        ...todos,
      ];
      setTodos(newTodos);
      setInput('');
      setDisplayed(todos);
    }
  };
  const deleteTask = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const handleCheck = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => todo.isComplete === false);
    setTodos(newTodos);
  };
  const filtering = () => {
    switch (status) {
      case 'completed':
        setDisplayed(todos.filter((todo) => todo.isComplete === true));
        break;
      case 'active':
        setDisplayed(todos.filter((todo) => todo.isComplete === false));
        break;
      default:
        setDisplayed(todos);
        break;
    }
  };
  const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('theme', theme);
  };
  const getTodos = () => {
    const savedTodo = JSON.parse(localStorage.getItem('todos'));
    const savedTheme = localStorage.getItem('theme');
    setTodos(savedTodo);
    setTheme(savedTheme);
  };
  const getNum = () => {
    const arrayCompleted = todos.filter((todo) => todo.isComplete === false);
    setCompleted(arrayCompleted.length);
  }
  useEffect(() => {
    getTodos();
  }, []);
  useEffect(() => {
    filtering();
    saveTodos();
    getNum()
  }, [status, todos, theme]);

  return (
    <div className={`body ${theme}`}>
      <div className='App'>
        <Header theme={theme} setTheme={setTheme} />
        <Input
          input={input}
          addTask={addTask}
          onInputChange={onInputChange}
          theme={theme}
        />
        <TaskList
          theme={theme}
          todos={todos}
          setTodos={setTodos}
          handleCheck={handleCheck}
          deleteTask={deleteTask}
          clearCompleted={clearCompleted}
          setStatus={setStatus}
          status={status}
          displayed={displayed}
          completed={completed}
        />
      </div>
    </div>
  );
}

export default App;
