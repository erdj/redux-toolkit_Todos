import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleComplete } from '../store/todoSlice';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.completed}
        value={todo.title}
        onChange={() => dispatch(toggleComplete({ id: todo.id }))}
      />
      <span>{todo.title}</span>
      <span onClick={() => dispatch(removeTodo({ id: todo.id }))}>&times;</span>
    </li>
  );
}
