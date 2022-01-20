import React from 'react';
import './App.css';
import TodoLists from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <h1>TODO App</h1>
      <TodoLists />
    </div>
  );
}

export default App;
