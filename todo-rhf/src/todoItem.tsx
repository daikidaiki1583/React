import React, { FC } from 'react';
import {Todo} from './todolist';

type Props = {
    todo: Todo,
}

const TodoItem: FC<Props> = (todo) => {
    return(
        <li>
            {todo.todo.text}
        </li>
    )
} ;

export default TodoItem;