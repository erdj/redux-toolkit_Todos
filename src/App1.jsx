import { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const addTodo = () => {
    if (text.trim().length > 0) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          title: text,
          completed: false,
        },
      ]);
    }
    setText('');
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => id !== todo.id));
  };
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return { ...todo, completed: !todo.completed };
      }),
    );
  };

  return (
    <div className="App">
      <InputField addTodo={addTodo} text={text} setText={setText} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
