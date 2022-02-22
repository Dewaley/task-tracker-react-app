import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';
import TaskList from './components/TaskList';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const addTask = (e) => {
    e.preventDefault();
    if (input === '') {
      alert('Please enter a task');
    } else {
      const newTodos = [
        { id: new Date().getTime().toString(), text: input, isComplete: false },
        ...todos,
      ];
      setTodos(newTodos);
      setInput('');
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
  return (
    <div className='App'>
      <Header />
      <Input input={input} addTask={addTask} onInputChange={onInputChange} />
      <TaskList
        todos={todos}
        setTodos={setTodos}
        handleCheck={handleCheck}
        deleteTask={deleteTask}
        clearCompleted={clearCompleted}
      />
    </div>
  );
}

export default App;
