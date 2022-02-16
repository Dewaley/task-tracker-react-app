import './App.css';
import Header from './components/Header';
import Input from './components/Input';
import Tasks from './components/Tasks';

function App() {
  return (
    <div>
      <div className='lightBanner'></div>
      <div className='App'>
        <Header />
        <Input />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
