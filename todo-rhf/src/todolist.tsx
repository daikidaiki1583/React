import React ,{ FC } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useForm } from 'react-hook-form';
import { TodoState } from './reducer';
import { add } from './action'

export type Todo = {
    text: string;
    // id: number;
};

const TodoList: FC = () => {
    // const [todos,setTodo] = useState<Todo[]>([]);                                                    
    const todos = useSelector<TodoState,Todo[]>((state) => state.todos)
    const dispatch = useDispatch();
    // const [currentId,setId] = useState(todos.length + 1);
    const {register,handleSubmit,reset } = useForm<Todo>();   

    const onSubmit = (data: Todo): void => {
        // setId(num => num + 1)
        const {text} = data;
        dispatch(add(text))
        // setTodo([...todos,{text:text,id:currentId}])
        reset()
    };

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="text" ref={register} />
                <input type="submit"/>
            </form>
            <ul>
                {todos.map((t) => 
                    <li key={t.text}>
                        {t.text}
                    </li>
                )}

            </ul>
        </>
    )
}

export default TodoList;