import { useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { addTodo } from './store/todoSlice';

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  };
  const toggleTodo = () => {};

  return (
    <div className="App">
      <InputField addTodo={addTask} text={text} setText={setText} />
      <TodoList toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
