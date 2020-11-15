import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch,useSelector } from 'react-redux';
import { add } from './action';
import { Todo,TodoState } from './reducer';
import './App.css';

export type InputText = {
  task: string;
}

function App() {
  const { register,handleSubmit,reset } = useForm();
  const todos = useSelector<TodoState,Todo[]>((state)=>state.todos);
  const dispatch = useDispatch();
  
  const onSubmit = (data: InputText): void => {
    console.log(data)
    const {task} = data;
    dispatch(add(task));
    console.log(task)
    console.log(todos)
    reset()
  };

  return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="task" ref={register}/>
          <input type="submit"/>
        </form>
        <ul>
          {
            todos.map((t) => {
              return(
                <li key={t.task}>{t.task}</li>
              )
            })
          }
        </ul>
      </>
  );
}

export default App;
