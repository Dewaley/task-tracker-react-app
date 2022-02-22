import './App.css';
import {useState} from 'react'
import Header from './components/Header';
import Input from './components/Input';
import Tasks from './components/Tasks';

function App() {
  const [input,setInput] = useState('')
  const [todos,setTodos] = useState([])
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const addTask = (e) => {
    e.preventDefault();
    if (input === '') {
      alert('Please enter a task');
    } else {
      setTodos([
        { id: new Date().getTime().toString(), text: input, isComplete: false },
        ...todos,
      ]);
      setInput('');
    }
  };
  return (
      <div className='App'>
        <Header />
        <Input 
          input={input}
          addTask={addTask}
          onInputChange={onInputChange}
        />
        <Tasks todos={todos} setTodos={setTodos} />
      </div>
  );
}

export default App;
