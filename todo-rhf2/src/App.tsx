import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch,useSelector } from 'react-redux';
import { add ,deleteItem} from './action';
import { Todo,TodoState } from './reducers/todoReducer';
import './App.css';

export type InputText = {
  task: string;
}

function App() {
  const { register,handleSubmit,reset } = useForm();
  const todos = useSelector<TodoState,Todo[]>((state)=>state.todos);
  const id = useSelector<TodoState,number>((state)=> state.id);
  const dispatch = useDispatch();
  
  const onSubmit = (data: InputText): void => {
    const {task} = data;
    dispatch(add(task,id));    
    reset()
  };

  const deleteTask = (id: number): void => {
    dispatch(deleteItem(id))
  }

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
                
                  <li key={t.id}>
                    {t.task}
                    <button onClick={() => deleteTask(t.id)}>削除</button>
                  </li>
                  
                
              )
            })
          }
        </ul>
      </>
  );
}

export default App;
