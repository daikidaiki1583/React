import React, { FC } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { useForm } from 'react-hook-form';
import {add} from '../action'
import { TodoState,Todo } from '../todoReducer';
import TodoList from '../component/todoList';

type IFormInput = {
    text: string;
}

// type Props = {
//         add: (text: string) => void
// }

const TodoListContainer: FC = () => {
    const todos = useSelector<TodoState,Todo[]> ((state) => state.todo)  
    const dispatch = useDispatch();
    const { register , handleSubmit} = useForm<IFormInput>();
    

    const onSubmit = (data: IFormInput) => {
        console.log(data);
        // dispatch(add(data))
    }

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="text-input" ref={register}/>
                <input type="submit"/>
            </form>
            <TodoList 
                todos={todos}
            />
        </>
    )

}

export default TodoListContainer;