import React from 'react';
import './App.css';
import ToDoList from './to-do-list';
import Form from './form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My first react app</h1>
        <ToDoList />
        <Form name='1' />
        <Form name='2' />
        <Form name='3' />
      </header>
    </div>
  );
}

// прописывать экспортируемые компоненты
export default App;