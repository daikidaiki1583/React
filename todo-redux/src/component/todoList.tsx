import React, { FC } from 'react';
import TodoItem from './todoItem';
import { Todo } from '../todoReducer';

type Props = {
    todos: Todo[];
}

const TodoList: FC<Props> = ({todos}) => {
    return(
        <>
            <ul>
                {
                    todos.map((t) => 
                        <TodoItem todo={t}/>
                    )
                }
            </ul>
        </>
    )
};

export default TodoList;