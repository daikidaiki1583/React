import React, { FC } from 'react';
import './App.css';
// import TextInput from './textInput'
import TodoList from './todolist';

const App: FC = () => {

  return (
    <div className="App">
      {/* <TextInput /> */}
      <TodoList />      
    </div>
  );
}

export default App;
