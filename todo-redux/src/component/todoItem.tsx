import React, { FC } from 'react';
import { Todo } from '../todoReducer';

type Props = {
    todo: Todo;
}

const TodoItem: FC<Props> = ({todo}) => (
        <li>
            <p>{todo.text}</p>
        </li>
)


export default TodoItem;