import './App.css';
import {useState} from 'react'
import Header from './components/Header';
import Input from './components/Input';
import Tasks from './components/Tasks';

function App() {
  const [input,setInput] = useState('')
  const [todos,setTodos] = useState([])
  return (
      <div className='App'>
        <Header />
        <Input 
          todos={todos}
          setTodos={setTodos}
          input={input}
          setInput={setInput}
        />
        <Tasks todos={todos}/>
      </div>
  );
}

export default App;
