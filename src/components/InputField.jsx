import React from 'react';

export default function InputField({ addTodo, text, setText }) {
  return (
    <label>
      <input value={text} type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
    </label>
  );
}
